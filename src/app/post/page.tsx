import { ListDetailView } from '~/components/Layouts'
import { PostsList } from '~/components/Posts/PostsList'
import { getPosts } from '~/lib/sanity/server'

//export const revalidate = 3600

export default async function PostIndex() {
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
