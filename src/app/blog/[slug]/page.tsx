import Mdx from '~/app/mdxrsc'
import { ListDetailView } from '~/components/Layouts'
import { BlogDetail } from '~/components/Posts/BlogDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { Counter } from '~/lib/actions'
import { getPost, getPosts } from '~/lib/sanity/sanity.client'
import { formatDate } from '~/lib/transformers'

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Blog({ params: { slug } }) {
  const posts = await getPosts()
  const post = await getPost(slug)

  if (!post) {
    return { notFound: true }
  }

  return (
    <ListDetailView
      list={<PostsList posts={posts} />}
      hasDetail
      detail={
        <BlogDetail post={post} slug={slug}>
          <div className="mb-16 flex flex-col items-start uppercase text-center font-semibold justify-between w-full mt-2 md:flex-row md:items-center">
            <div className="flex gap-2  items-center mt-2 text-xs text-gray-600 dark:text-gray-400  md:mt-0">
              {formatDate(post?.date)}
              {` • `}
              <Counter id={post.slug} />
              {` • `}
              <div className="flex space-x-2">
                {post.tags?.length &&
                  post.tags
                    .slice(0)
                    .map((tag: any, index: any) => (
                      <div key={index}>{tag}</div>
                    ))}
              </div>
            </div>
          </div>

          <Mdx source={post?.content} />
        </BlogDetail>
      }
    />
  )
}
