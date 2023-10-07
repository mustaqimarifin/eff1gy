import { Suspense } from "react"
import { ListDetailView, SiteLayout } from "~/components/Layouts"
import { Detail } from "~/components/ListDetail/Detail"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { MDSEX } from "~/components/MarkdownRenderer"
import { mdxToCode } from "~/components/MarkdownRenderer/Mdx"
import { withProviders } from "~/components/Providers/withProviders"
import { PostEditor } from "~/components/Writing/Editor/PostEditor"
import { PostDetail } from "~/components/Writing/PostDetail"
import { PostsList } from "~/components/Writing/PostsList"
import { getContext } from "~/graphql/context"
import { GET_COMMENTS } from "~/graphql/queries/comments"
import { GET_POST, GET_POSTS } from "~/graphql/queries/posts"
import { GET_VIEWER } from "~/graphql/queries/viewer"
import { CommentType, useGetPostQuery } from "~/graphql/typeSlut"
import { addApolloState, initApolloClient } from "~/lib/apollo"

const WritingPostPage = ({ post, slug }) => {
  const { data, loading } = useGetPostQuery({ variables: { slug } })

  if (data?.post && !data.post.publishedAt) return <PostEditor slug={slug} />
  if (loading) return <Detail.Loading />

  return (
    <PostDetail slug={slug}>
      <MDSEX mdx={post.text} />
    </PostDetail>
  )
}
/* export async function getStaticPaths() {
  const paths = await useGetPostsQuery({
    variables: { filter: { published: true } },
  })
  return {
    paths: paths.data.posts.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
} */
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
        variables: { refId: data.post.id, type: CommentType.Post },
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
