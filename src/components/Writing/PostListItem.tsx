import * as React from 'react'
import useSWR from 'swr'

import { ListItem } from '~/components/ListDetail/ListItem'
import { Post } from '~/graphql/types.generated'
import { cleanTime, ketchup } from '~/lib/functions'

import { Views } from '../Stats/ViewCounter'

interface Props {
  post: Post
  active: boolean
}

export const PostListItem = React.memo<Props>(({ post, active }) => {
  const publishedAt = cleanTime({ timestamp: post.publishedAt })
  const { data } = useSWR<Views>(`/api/views/${post.slug}`, ketchup)
  const views = data?.total

  return (
    <ListItem
      key={post.id}
      href="/writing/[slug]"
      as={`/writing/${post.slug}`}
      title={post.title}
      description={`${
        views ? new Number(views).toLocaleString() : '–––'
      } views`}
      byline={post.publishedAt ? publishedAt.formatted : 'Draft'}
      active={active}
    />
  )
})
