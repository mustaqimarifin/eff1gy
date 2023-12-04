import { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { ListDetailView } from '~/components/Layouts'
import type { Post } from '~/components/Posts/PostDetail'
import { PostDetail } from '~/components/Posts/PostDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { Counter } from '~/lib/actions'
import { sanityFetch } from '~/lib/sanity/client'
import { postQuery, postsQuery } from '~/lib/sanity/queries'
import { formatDate } from '~/lib/transformers'
export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await sanityFetch<Post[]>({
    query: postsQuery,
    tags: ['posts'],
  })

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params: { slug } }) {
  const post = await sanityFetch<Post>({
    query: postQuery,
    params: { slug },
    tags: ['post'],
  })

  if (!post) {
    return { notFound: true }
  }

  const tags = post.tags?.length
    ? post.tags
        .slice(0)
        .map((tag: any, index: any) => <div key={index}>{`#${tag}`}</div>)
    : null

  return (
    <ListDetailView
      list={<PostsList />}
      hasDetail
      detail={
        <PostDetail post={post} slug={slug}>
          <div className="mb-16 flex flex-col uppercase text-center font-semibold justify-between w-full mt-2 md:flex-row md:items-center">
            <div className="flex gap-x-1 content-center items-center mt-2 text-xs text-gray-600 dark:text-gray-400  md:mt-0">
              {formatDate(post?.date)}
              {` • `}
              <Counter id={post.slug} />
              {` • `}
              {tags}
            </div>
          </div>
          <Suspense>
            <Mdx source={post?.content} />
          </Suspense>
        </PostDetail>
      }
    />
  )
}
