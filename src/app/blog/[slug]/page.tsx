import React, { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { ListDetailView } from '~/components/Layouts'
import type { Post } from '~/components/Posts/BlogDetail'
import { BlogDetail } from '~/components/Posts/BlogDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { addView, Counter } from '~/lib/actions'
import { getAllPosts, getPostBySlug } from '~/lib/sanity/sanity.client'
import { timestampToCleanTime } from '~/lib/transformers'

export const revalidate = 60

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

  const publishedAt = timestampToCleanTime({ timestamp: post?.date })

  return (
    <ListDetailView
      list={<PostsList posts={posts} />}
      hasDetail
      detail={
        <BlogDetail post={post} slug={slug}>
          <div className="mb-16 mt-2 flex w-full flex-col items-start justify-between  text-center font-semibold uppercase md:flex-row md:items-center">
            <div className="mt-2 flex  items-center gap-2 text-sm text-gray-600 dark:text-gray-400  md:mt-0">
              <div className="flex space-x-2">
                {publishedAt?.formatted}
                {` • `}
                <Counter id={post.slug} />
                {` • `}
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
