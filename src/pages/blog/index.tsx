import { ListDetailView, SiteLayout } from "~/components/Layouts"
import { type Post } from "~/components/Posts/BlogDetail"
import { PostsList } from "~/components/Posts/PostsList"
import { withProviders } from "~/components/Providers/withProviders"
import routes from "~/config/routes"
import { indexQuery } from "~/lib/sanity/queries"
import { getClient } from "~/lib/sanity/server"
import { NextSeo } from "next-seo"

function PostIndex() {
  return (
    <NextSeo
      title={routes.blog.seo.title}
      description={routes.blog.seo.description}
      openGraph={routes.blog.seo.openGraph}
    />
  )
}

export async function getStaticProps({ preview = false }) {
  const posts: Post[] = await getClient(preview).fetch(indexQuery)

  return { props: { posts } }
}

PostIndex.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<PostsList />} hasDetail={false} detail={page} />
    </SiteLayout>
  )
})

export default PostIndex
