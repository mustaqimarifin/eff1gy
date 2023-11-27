import { MDXRemote } from 'next-mdx-remote/rsc'

import { components } from '~/components/MDX'
import imageMetadata from '~/components/MDX/Meta2'
export default async function Mdx(props) {
  return (
    <article className="prose prose-quoteless prose-neutral dark:prose-invert">
      <MDXRemote
        {...props}
        options={{
          mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: [],
            rehypePlugins: [imageMetadata],
            format: 'mdx',
          },
        }}
        components={{ ...components, ...(props.components || {}) }}
      />
    </article>
  )
}
