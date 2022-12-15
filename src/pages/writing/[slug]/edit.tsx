import { MDXRemote } from 'next-mdx-remote'
import * as React from 'react'

import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { MDXComponents } from '~/components/MarkdownRenderer'
import { mdxToCode } from '~/components/MarkdownRenderer/MDX'
import { withProviders } from '~/components/Providers/withProviders'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { getContext } from '~/graphql/context'
import { GET_POST } from '~/graphql/queries/posts'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import { useViewerQuery } from '~/graphql/types.generated'
import { addApolloState, initApolloClient } from '~/lib/apollo'

function EditPostPage({ post, slug }) {
  const { data } = useViewerQuery()
  if (!data?.viewer?.isAdmin) return <Detail.Null />
  return (
    <PostEditor slug={slug}>
      <MDXRemote {...post.text} components={MDXComponents} />
    </PostEditor>
  )
}

export async function getServerSideProps({ params: { slug }, req, res }) {
  const context = await getContext(req, res)
  const client = initApolloClient({ context })

  const { data } = await client.query({
    query: GET_POST,
    variables: { slug },
  })
  await Promise.all([client.query({ query: GET_VIEWER })])

  const { post } = data
  const { mdx } = await mdxToCode(post.text)
  return addApolloState(client, {
    props: {
      post: {
        ...post,
        text: mdx,
      },
      slug,
    },
  })
}

EditPostPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={page} />
    </SiteLayout>
  )
})

export default EditPostPage
