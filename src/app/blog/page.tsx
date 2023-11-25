import { ListDetailView } from '~/components/Layouts'
import { PostsList } from '~/components/Posts/PostsList'
import { getPosts } from '~/lib/sanity/sanity.client'

export const revalidate = 60

export default async function BlogIndex() {
  const posts = await getPosts()

  if (!posts) {
    return { notFound: true }
  }

  return (
    <ListDetailView
      list={<PostsList posts={posts} />}
      hasDetail={false}
      detail={null}
    />
  )
}
