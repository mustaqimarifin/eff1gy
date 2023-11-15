import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import MDX from '~/components/MDX'
import { mdxToCode } from '~/components/MDX/Mdx'
import { BlogDetail, type Post } from '~/components/Posts/BlogDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { withProviders } from '~/components/Providers/withProviders'
import { useGetBlogQuery } from '~/graphql/typeSlut'
//import { postSlugsQuery } from '~/lib/sanity/queries'
import { getPostBySlug } from '~/lib/sanity/sanity.client'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'

//import { sanityClient } from '~/lib/sanity/server'

type PPage = {
  post: Post
  loading: boolean
  slug: string
  mdx: MDXRemoteSerializeResult
}

function BlogPage({ mdx, post, loading, slug }: PPage) {
  const { data } = useGetBlogQuery({ variables: { slug } })

  if (!data) return <Detail.Null />
  if (loading) return <LoadingSpinner />

  return (
    <BlogDetail post={post} slug={slug}>
      <MDX source={mdx} />
    </BlogDetail>
  )
}

/* export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}
 */
export async function getServerSideProps({ params: { slug } }) {
  const post: Post = await getPostBySlug(slug)

  if (!post) {
    return { notFound: true }
  }

  const { mdx } = await mdxToCode(post.content)

  return {
    props: {
      post,
      mdx,
      slug,
      revalidate: 120,
    },
  }
}
BlogPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<PostsList />} hasDetail detail={page} />
    </SiteLayout>
  )
})

export default BlogPage
