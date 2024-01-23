import { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { ListDetailView } from '~/components/Layouts'
import type { Post } from '~/components/Posts/PostDetail'
import { PostDetail } from '~/components/Posts/PostDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { ViewType } from '~/graphql/typeSlut'
import { Counter, HiddenCounter } from '~/lib/actions'
import { getAllPosts, getPost } from '~/lib/sanity/client'
//xport const dynamic = 'force-dynamic'

export const revalidate = 10

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function Post({ params: { slug } }) {
  const post: Post = await getPost(slug)

  if (!post) {
    return { notFound: true }
  }

  /*   const tags = post.tags?.length
    ? post.tags
        .slice(0)
        .map((tag: any, index: any) => <div key={index}>{`#${tag}`}</div>)
    : null
 */
  return (
    <ListDetailView
      list={<PostsList />}
      hasDetail
      detail={
        <Suspense>
          <HiddenCounter refId={post?.slug} type={ViewType.Blog} />
          <PostDetail post={post} slug={slug}>
            <Mdx source={post?.content} />
          </PostDetail>
        </Suspense>
      }
    />
  )
}
