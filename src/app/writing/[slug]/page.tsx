import { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { ListDetailView } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import { getClient } from '~/components/Provider/ApolloClient'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { PostDetail } from '~/components/Writing/PostDetail'
import { PostsList } from '~/components/Writing/PostsList'
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
        context: {
          fetchOptions: {
            next: { revalidate: 5 },
          },
        },
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
      <ListDetailView
        list={<PostsList />}
        hasDetail
        detail={
          <Suspense fallback={<LoadingSpinner />}>
            <PostEditor slug={slug}>
              <Mdx source={data?.post.text} />
            </PostEditor>
          </Suspense>
        }
      />
    )
  return (
    <ListDetailView
      list={<PostsList />}
      hasDetail
      detail={
        <Suspense fallback={<LoadingSpinner />}>
          <PostDetail slug={slug}>
            <Mdx source={data?.post.text} />
          </PostDetail>
        </Suspense>
      }
    />
  )
}
