import { memo } from 'react'

import { formatDate } from '~/lib/transformers'

import { ListItem } from '../ListDetail/ListItem'
import type { Post } from './PostDetail'

type Props = {
  post: Post
  active: boolean
}

export const PostListItem = memo<Props>(({ post, active }) => {
  return (
    <ListItem
      href="/(site)/post/[slug]"
      as={`/post/${post.slug}`}
      title={post.title}
      byline={formatDate(post?.date)}
      active={active}
    />
  )
})
