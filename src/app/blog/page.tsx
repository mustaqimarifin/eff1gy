import { ListDetailView } from '~/components/Layouts'
import { Post } from '~/components/Posts/BlogDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { getAllPosts } from '~/lib/sanity/sanity.client'

export default async function BlogIndex() {
  const posts: Post[] = await getAllPosts()

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
