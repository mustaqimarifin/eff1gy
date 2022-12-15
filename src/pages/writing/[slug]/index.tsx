import * as React from 'react'

import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { MDSEX } from '~/components/MarkdownRenderer'
import { mdxToCode } from '~/components/MarkdownRenderer/MDX'
import { withProviders } from '~/components/Providers/withProviders'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { PostDetail } from '~/components/Writing/PostDetail'
import { PostsList } from '~/components/Writing/PostsList'
import { getContext } from '~/graphql/context'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_POST, GET_POSTS } from '~/graphql/queries/posts'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import { CommentType, useGetPostQuery } from '~/graphql/types.generated'
import { addApolloState, initApolloClient } from '~/lib/apollo'

// in your next.js page
//export const config = {
//unstable_includeFiles: ['node_modules/.pnpm/**/shiki/languages/*.json'],}
function WritingPostPage({ post, slug }) {
  const { data } = useGetPostQuery({ variables: { slug } })

  if (data.post && !data.post.publishedAt)
    return (
      <PostEditor slug={slug}>
        <MDSEX mdx={post.text} />
      </PostEditor>
    )
  return (
    <PostDetail slug={slug}>
      <MDSEX mdx={post.text} />
    </PostDetail>
  )
}

export async function getServerSideProps({ params: { slug }, req, res }) {
  const context = await getContext(req, res)
  const client = initApolloClient({ context })

  const { data } = await client.query({
    query: GET_POST,
    variables: { slug },
  })

  await Promise.all([
    client.query({ query: GET_VIEWER }),
    client.query({ query: GET_POSTS }),

    data?.post?.id &&
      client.query({
        query: GET_COMMENTS,
        variables: { refId: data.post.id, type: CommentType.Bookmark },
      }),
  ])
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

WritingPostPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<PostsList />} hasDetail detail={page} />
    </SiteLayout>
  )
})

export default WritingPostPage
