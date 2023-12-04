import { MDXRemote } from 'next-mdx-remote/rsc'

//import linkifyRegex from 'remark-linkify-regex'
import { components } from '~/components/MDX'
import meta2 from '~/components/MDX/Meta2'

export default async function Mdx(props) {
  return (
    <div className="prose prose-neutral dark:prose-invert">
      <MDXRemote
        {...props}
        options={{
          mdxOptions: {
            //useDynamicImport: true,
            remarkPlugins: [],
            rehypePlugins: [meta2],
            format: 'mdx',
          },
        }}
        components={{ ...components }}
      />
    </div>
  )
}
