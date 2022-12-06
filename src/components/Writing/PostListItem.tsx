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
  /*   const { data } = useSWR<Views>(`/api/views/${post.slug}`, ketchup)
  const views = data?.total
  const byline1 = Number(views).toLocaleString() */
  const byline2 = post.publishedAt ? publishedAt.formatted : 'Draft'

  return (
    <ListItem
      key={post.id}
      href="/writing/[slug]"
      as={`/writing/${post.slug}`}
      title={post.title}
      description={post.excerpt}
      byline={`${byline2}`}
      active={active}
    />
  )
})
