import { EyeOpenIcon } from '@radix-ui/react-icons'
import * as React from 'react'
import { Moon } from 'react-feather'
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
  const views = new Number(data?.total)
  const byline1 = `${views > 0 ? views.toLocaleString() : '-'} 👁`
  const byline2 = post.publishedAt ? publishedAt.formatted : 'Draft'

  return (
    <ListItem
      key={post.id}
      href="/writing/[slug]"
      as={`/writing/${post.slug}`}
      title={post.title}
      description={post.excerpt}
      byline={`${byline1} | ${byline2}`}
      active={active}
    />
  )
})
