'use client'

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { usePathname } from 'next/navigation'
import { createContext, useEffect, useState } from 'react'

import { ListContainer } from '~/components/ListDetail/ListContainer'
import { GET_POSTS } from '~/graphql/queries/posts'
import type { GetPostsQuery } from '~/graphql/typeSlut'

import { LoadingSpinner } from '../LoadingSpinner'
import { PostListItem } from './PostListItem'
import { WritingTitlebar } from './WritingTitlebar'

export const WritingContext = createContext({
  filter: 'published',
  setFilter: (filter: string) => {},
})

export function PostsList() {
  const path = usePathname()

  const [filter, setFilter] = useState('published')
  const [scrollContainerRef, setScrollContainerRef] = useState(null)

  const variables =
    filter === 'published'
      ? { filter: { published: true } }
      : { filter: { published: false } }

  const { error, data, refetch, loading } = useQuery<GetPostsQuery>(GET_POSTS, {
    variables,
  })

  useEffect(() => {
    refetch()
  }, [filter])

  if (error) {
    return (
      <ListContainer onRef={setScrollContainerRef}>
        <div />
      </ListContainer>
    )
  }

  if (loading && !data?.posts) {
    return (
      <ListContainer onRef={setScrollContainerRef}>
        <WritingTitlebar scrollContainerRef={scrollContainerRef} />
        <div className="flex flex-1 items-center justify-center">
          <LoadingSpinner />
        </div>
      </ListContainer>
    )
  }

  const { posts } = data

  const defaultContextValue = {
    filter,
    setFilter,
  }

  return (
    <WritingContext.Provider value={defaultContextValue}>
      <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
        <WritingTitlebar scrollContainerRef={scrollContainerRef} />

        <div className="lg:space-y-1 lg:p-3">
          {posts.map((post) => {
            const active = path === post.slug

            return <PostListItem key={post.id} post={post} active={active} />
          })}
        </div>
      </ListContainer>
    </WritingContext.Provider>
  )
}
