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
  const { data } = useSWR<Views>(`/api/views/${post.id}`, ketchup)
  const views = data?.total
  const aggregateViews = () => {
    return (
      <p className="w-32 mb-4 text-left text-gray-500 md:text-right md:mb-0">
        {`${views ? new Number(views).toLocaleString() : '–––'} views`}
      </p>
    )
  }
  return (
    <ListItem
      key={post.id}
      href="/writing/[slug]"
      as={`/writing/${post.slug}`}
      title={post.title}
      description={`${aggregateViews}`}
      byline={post.publishedAt ? publishedAt.formatted : 'Draft'}
      active={active}
    />
  )
})
