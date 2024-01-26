import { MDXRemote } from 'next-mdx-remote/rsc'

//import linkifyRegex from 'remark-linkify-regex'
import { components } from '~/components/MDX'
import meta2 from '~/components/MDX/Meta2'

export default async function Mdx(props) {
  return (
    <div className="prose font-mono tracking-tight prose-neutral dark:prose-invert">
      <MDXRemote
        {...props}
        options={{
          mdxOptions: {
            rehypePlugins: [meta2],
          },
        }}
        components={{ ...components, ...(props.components || {}) }}
      />
    </div>
  )
}
