/* eslint-disable @typescript-eslint/no-var-requires */
import { remarkCodeHike } from '@code-hike/mdx'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import linkifyRegex from 'remark-linkify-regex'

import theme from '~/styles/moonlight-ii.json'

export async function mdxToCode<T>(text: string) {
  const source = await serialize(text, {
    mdxOptions: {
      useDynamicImport: true,
      remarkPlugins: [
        remarkGfm,
        linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i),
        [remarkCodeHike, { autoImport: false, theme }],
      ],
      rehypePlugins: [
        rehypeSlug,
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
