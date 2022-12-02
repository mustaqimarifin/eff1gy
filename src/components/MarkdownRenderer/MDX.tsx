import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSanitize from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import linkifyRegex from 'remark-linkify-regex'

import { schema } from '.'

//import { useGetPostQuery } from '~/graphql/types.generated'

export async function mdxToCode<T>(text: string) {
  const source = await serialize(text, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)],
      rehypePlugins: [
        rehypeSlug,
        [rehypeSanitize, schema],
        [
          rehypeAutolinkHeadings,
          { behavior: 'wrap' },
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
  })

  const { compiledSource } = source

  return {
    source: { compiledSource },
  }
}
