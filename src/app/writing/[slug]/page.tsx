import { Suspense } from 'react'

import { Detail } from '~/components/ListDetail/Detail'
import { getClient } from '~/components/Provider/ApolloClient'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { PostDetail } from '~/components/Writing/PostDetail'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_POST, GET_POSTS } from '~/graphql/queries/posts'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import type { GetPostQuery } from '~/graphql/typeSlut'
import { CommentType } from '~/graphql/typeSlut'

export const dynamic = 'force-dynamic'

export default async function PostPage({ params: { slug } }) {
  const client = getClient()

  const { data, loading, error } = await client.query<GetPostQuery>({
    query: GET_POST,
    variables: { slug },
  })

  await Promise.all([
    client.query({ query: GET_VIEWER }),
    client.query({ query: GET_POSTS }),

    data?.post?.id &&
      client.query({
        query: GET_COMMENTS,
        variables: { refId: data.post.id, type: CommentType.Post },
      }),
  ])

  if (loading) {
    return <Detail.Loading />
  }

  if (!data?.post || error) {
    return <Detail.Null />
  }
  ///const { mdx } = await mdxToCode(post.text)

  if (data?.post && !data?.post.publishedAt)
    return (
      <Suspense fallback={<Detail.Loading />}>
        <PostEditor slug={slug} />
      </Suspense>
    )
  return (
    <Suspense fallback={<Detail.Loading />}>
      <PostDetail slug={slug} />
    </Suspense>
  )
}
