import { MDXRemote } from 'next-mdx-remote/rsc'

import { components } from '~/components/MDX'
import imageMetadata from '~/components/MDX/Meta2'
export default async function Mdx({ source }) {
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <MDXRemote
        source={source}
        options={{
          mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: [],
            rehypePlugins: [imageMetadata],
            format: 'mdx',
          },
        }}
        components={{ ...(components || {}) }}
      />
    </article>
  )
}
