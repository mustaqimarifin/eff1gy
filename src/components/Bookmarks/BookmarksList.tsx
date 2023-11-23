'use client'

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { animate, glide, inView } from 'motion'
import { useParams, usePathname, useRouter } from 'next/navigation'
import * as React from 'react'

import { ListContainer } from '~/components/ListDetail/ListContainer'
import { PAGINATION_AMOUNT } from '~/graphql/constants'
import { GET_BOOKMARKS } from '~/graphql/queries/bookmarks'
import type { GetBookmarksQuery } from '~/graphql/typeSlut'

import { ListLoadMore } from '../ListDetail/ListLoadMore'
import { LoadingSpinner } from '../LoadingSpinner'
import { BookmarksListItem } from './BookmarkListItem'
import { BookmarksTitlebar } from './BookmarksTitlebar'

export function LayoutGroup({ children }) {
  React.useEffect(() => {
    animate('#bl', { x: 0 }, { easing: glide({ velocity: -500 }) })
  }, [])

  return <div id="bl">{children}</div>
}
export function PGroup({ children }) {
  React.useEffect(() => {
    inView('section', ({ target }) => {
      animate(
        target.querySelector('span'),
        { opacity: 1, transform: 'none' },
        { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
      )
    }),
      []
  })

  return <div id="section">{children}</div>
}

export const BookmarksContext = React.createContext({
  tag: null,
  setTag: (tag: string) => undefined,
})

export function BookmarksList() {
  const router = useRouter()
  const path = usePathname()
  const { tagQuery } = useParams()
  const [tag, setTag] = React.useState<string | string[]>(tagQuery)
  const [isVisible, setIsVisible] = React.useState(false)
  const [scrollContainerRef, setScrollContainerRef] = React.useState(null)

  const variables: any = tag
    ? {
        first: PAGINATION_AMOUNT,
        after: null,
        filter: { tag: tag },
      }
    : null
  const { error, data, fetchMore, loading } = useQuery<GetBookmarksQuery>(
    GET_BOOKMARKS,
    {
      variables,
    }
  )

  const defaultContextValue = {
    tag,
    setTag,
  }

  function handleFetchMore() {
    return fetchMore({
      variables: {
        ...variables,
        after: data?.bookmarks.pageInfo.endCursor,
      },
    })
  }

  // scroll to the top of the list whenever the filters are changed
  React.useEffect(() => {
    if (scrollContainerRef?.current) scrollContainerRef.current.scrollTo(0, 0)
  }, [tag])

  React.useEffect(() => {
    if (isVisible) handleFetchMore()
  }, [isVisible])

  // if a user is linked to /bookmarks?tag=foo, clear the query filter but stay on the same page
  React.useEffect(() => {
    if (tagQuery) router.push(path)
  }, [tagQuery])

  if (loading && !data?.bookmarks) {
    return (
      <ListContainer onRef={setScrollContainerRef}>
        <BookmarksTitlebar scrollContainerRef={scrollContainerRef} />
        <div className="flex flex-1 items-center justify-center">
          <LoadingSpinner />
        </div>
      </ListContainer>
    )
  }

  if (error) return null
  const { bookmarks } = data

  return (
    <BookmarksContext.Provider value={defaultContextValue}>
      <ListContainer data-cy="bookmarks-list" onRef={setScrollContainerRef}>
        <BookmarksTitlebar scrollContainerRef={scrollContainerRef} />
        <PGroup>
          <div className="lg:space-y-1 lg:p-3">
            {bookmarks.edges.map((bookmark) => {
              const active = path === bookmark.node.id
              return (
                <PGroup key={bookmark.node.id}>
                  <BookmarksListItem active={active} bookmark={bookmark.node} />
                </PGroup>
              )
            })}
          </div>

          {bookmarks.pageInfo.hasNextPage && (
            <ListLoadMore setIsVisible={setIsVisible} />
          )}
        </PGroup>
      </ListContainer>
    </BookmarksContext.Provider>
  )
}
