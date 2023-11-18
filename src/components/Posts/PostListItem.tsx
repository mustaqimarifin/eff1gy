import * as React from 'react'

import { timestampToCleanTime } from '~/lib/transformers'

import { ListItem } from '../ListDetail/ListItem'

export type PostPage = {
  id: string
  slug: string
  title: string
  date: string
  caption?: string
  excerpt?: string
}

interface Props {
  post: PostPage
  active: boolean
}

export const PostListItem = React.memo<Props>(({ post, active }) => {
  const publishedAt = timestampToCleanTime({ timestamp: post.date })
  return (
    <ListItem
      href="/blog/[slug]"
      as={`/blog/${post.slug}`}
      title={post.title}
      byline={post.date ? publishedAt.formatted : 'Draft'}
      active={active}
    />
  )
})
