import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import MDX from '~/components/MDX'
import { mdxToCode } from '~/components/MDX/Mdx'
import { BlogDetail, type Post } from '~/components/Posts/BlogDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { withProviders } from '~/components/Providers/withProviders'
import { postSlugsQuery } from '~/lib/sanity/queries'
import { getPostBySlug } from '~/lib/sanity/sanity.client'
import { sanityClient } from '~/lib/sanity/server'

type PPage = {
  post: Post
  loading: boolean
}

function BlogPage({ post, loading }: PPage) {
  if (!post) return <Detail.Null />
  if (loading) return <LoadingSpinner />

  return (
    <BlogDetail post={post}>
      <MDX code={post.content} />
    </BlogDetail>
  )
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(postSlugsQuery)
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params, preview = false }) {
  const post: Post = await getPostBySlug(params.slug)

  if (!post) {
    return { notFound: true }
  }

  const { mdx, wordCount, readingTime } = await mdxToCode(post.content)

  return {
    props: {
      post: {
        ...post,
        content: mdx,
        wordCount,
        readingTime,
      },

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
