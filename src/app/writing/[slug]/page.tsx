import Mdx from '~/app/mdxrsc'
import { Detail } from '~/components/ListDetail/Detail'
import { getClient } from '~/components/Provider/ApolloClient'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { PostDetail } from '~/components/Writing/PostDetail'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_POST, GET_POSTS } from '~/graphql/queries/posts'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import {
  CommentType,
  GetPostQuery,
  GetPostsQuery,
  GetPostsQueryVariables,
} from '~/graphql/typeSlut'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const client = getClient()

  const { data } = await client.query<GetPostsQuery, GetPostsQueryVariables>({
    query: GET_POSTS,
  })

  return data?.posts.map((post) => ({
    slug: post.slug,
  }))
}

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

  //const { mdx } = await mdxToCode(data?.post.text)

  const postFilter = data?.post && !data?.post.publishedAt

  if (postFilter) return <PostEditor slug={slug} />
  return (
    <PostDetail post={data?.post}>
      <Mdx source={data?.post.text} />
    </PostDetail>
  )
}
