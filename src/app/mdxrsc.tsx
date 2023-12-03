import { MDXRemote } from 'next-mdx-remote/rsc'
import linkifyRegex from 'remark-linkify-regex'

import { components } from '~/components/MDX'
import imageMetadata from '~/components/MDX/Meta2'
export default async function Mdx(props) {
  return (
    <article className="prose prose-neutral dark:prose-invert">
      <MDXRemote
        {...props}
        options={{
          mdxOptions: {
            useDynamicImport: true,
            remarkPlugins: [linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)],
            rehypePlugins: [imageMetadata],
            format: 'mdx',
          },
        }}
        components={{ ...components, ...(props.components || {}) }}
      />
    </article>
  )
}
