import { memo } from 'react'

import { ListItem } from '~/components/ListDetail/ListItem'
import { type Post } from '~/graphql/typeSlut'
import { timestampToCleanTime } from '~/lib/transformers'

interface Props {
  post: Post
  active: boolean
}

export const PostListItem = memo<Props>(({ post, active }) => {
  const publishedAt = timestampToCleanTime({ timestamp: post.publishedAt })
  return (
    <ListItem
      key={post.id}
      href="/writing/[slug]"
      as={`/writing/${post.slug}`}
      title={post.title}
      description={null}
      byline={post.publishedAt ? publishedAt.formatted : 'Draft'}
      active={active}
    />
  )
})
