import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'

import { components } from '~/components/MDX'
import META3 from '~/components/MDX/meta3'

export default async function Mdx({ source }) {
  //const Component = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <article className="prose-quoteless prose prose-neutral dark:prose-invert">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: [],
            rehypePlugins: [
              META3,
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
        }}
        components={{ ...components }}
      />
    </article>
  )
}
