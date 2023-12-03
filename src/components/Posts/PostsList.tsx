'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { ListContainer } from '../ListDetail/ListContainer'
import { TitleBar } from '../ListDetail/TitleBar'
import { type Post } from './PostDetail'
import { PostListItem } from './PostListItem'

export const PostsList = ({ posts }: { posts: Post[] }) => {
  const path = usePathname()
  const [scrollContainerRef, setScrollContainerRef] = useState(null)
  return (
    <>
      <ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
        <TitleBar scrollContainerRef={scrollContainerRef} title="Posts" />

        <div className="lg:space-y-1 lg:p-3">
          {posts &&
            posts
              ?.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)) {
                  return -1
                }
                return 1
              })
              .map((post) => {
                const active = path === post.slug
                return (
                  <PostListItem key={post.slug} post={post} active={active} />
                )
              })}
        </div>
      </ListContainer>
    </>
  )
}
