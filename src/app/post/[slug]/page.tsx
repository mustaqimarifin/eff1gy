import { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { ListDetailView } from '~/components/Layouts'
import { PostDetail } from '~/components/Posts/PostDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { getClient } from '~/components/Provider/ApolloClient'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import type { GetBlogQuery } from '~/graphql/typeSlut'
import {
  CommentType,
  GetBlogDocument,
  GetCommentsDocument,
} from '~/graphql/typeSlut'
import { Counter } from '~/lib/actions'
import { getPost, getPosts } from '~/lib/sanity/server'
import { formatDate } from '~/lib/transformers'

//export const revalidate = 3600

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params: { slug } }) {
  const posts = await getPosts()
  const post = await getPost(slug)

  if (!post) {
    return { notFound: true }
  }

  const tags = post.tags?.length
    ? post.tags
        .slice(0)
        .map((tag: any, index: any) => <div key={index}>{`#${tag}`}</div>)
    : null

  /*   const client = getClient()
  const { data } = await client.query<GetBlogQuery>({
    query: GetBlogDocument,
    variables: { slug },
  })

  await Promise.all([
    client.query({ query: GET_VIEWER }),

    data?.blog &&
      client.query({
        query: GetCommentsDocument,
        variables: { refId: data.blog.id, type: CommentType.Blog },
        context: { fetchOptions: { cache: 'no-store' } },
      }),
  ])

  const { blog } = data */

  return (
    <ListDetailView
      list={<PostsList posts={posts} />}
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
