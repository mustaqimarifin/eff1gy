import { memo } from 'react'

import { realTime } from '~/lib/transformers'

import { ListItem } from '../ListDetail/ListItem'
import type { Post } from './PostDetail'

type Props = {
  post: Post
  active: boolean
}

export const PostListItem = memo<Props>(({ post, active }) => {
  const publishedAt = realTime({ timestamp: post.date })
  return (
    <ListItem
      href="/post/[slug]"
      as={`/post/${post.slug}`}
      title={post.title}
      byline={post.date ? publishedAt.formatted : 'Draft'}
      active={active}
    />
  )
})
