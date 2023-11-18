import Mdx from '~/app/mdxrsc'
import { ListDetailView } from '~/components/Layouts'
import { BlogDetail, Post } from '~/components/Posts/BlogDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { getAllPosts, getPostBySlug } from '~/lib/sanity/sanity.client'

export async function generateStaticParams() {
  const posts: Post[] = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Blog({ params: { slug } }) {
  const posts: Post[] = await getAllPosts()

  const post: Post = await getPostBySlug(slug)

  if (!post) {
    return { notFound: true }
  }

  //const { mdx } = await mdxToCode(post.content)

  return (
    <ListDetailView
      list={<PostsList posts={posts} />}
      hasDetail
      detail={
        <BlogDetail post={post} slug={slug}>
          <Mdx source={post?.content} />
        </BlogDetail>
      }
    />
  )
}
