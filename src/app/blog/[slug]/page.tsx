import React from 'react'

import Mdx from '~/app/mdxrsc'
import { ListDetailView } from '~/components/Layouts'
import type { Post } from '~/components/Posts/BlogDetail'
import { BlogDetail } from '~/components/Posts/BlogDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { getClient } from '~/components/Provider/ApolloClient'
import { GET_BLOG } from '~/graphql/queries/blogs'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import type { GetBlogQuery } from '~/graphql/typeSlut'
import { CommentType } from '~/graphql/typeSlut'
import { addView } from '~/lib/actions'
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
  //const client = getClient()

  /*   const { data } = await client.query<GetBlogQuery>({
    query: GET_BLOG,
    variables: { slug },
    context: { fetchOptions: { cache: 'no-store' } },
  }) */
  const publishedAt = timestampToCleanTime({ timestamp: post?.date })

  /*   await Promise.all([
    client.query({ query: GET_VIEWER }),

    data?.blog?.id &&
      client.query({
        query: GET_COMMENTS,
        variables: { refId: data.blog.id, type: CommentType.Blog },
        context: { fetchOptions: { cache: 'no-store' } },
      }),
  ]) */

  const views = await addView(post?.slug)

  return (
    <ListDetailView
      list={<PostsList posts={posts} />}
      hasDetail
      detail={
        <BlogDetail post={post} slug={slug}>
          <div className="mb-16 mt-2 flex w-full flex-col items-start justify-between  text-center font-semibold uppercase md:flex-row md:items-center">
            <div className="mt-2 flex  items-center gap-2 text-sm text-gray-600 dark:text-gray-400  md:mt-0">
              {publishedAt?.formatted}
              {` • `}
              {views?.viewCount}
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
