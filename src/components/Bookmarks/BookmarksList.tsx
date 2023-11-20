'use client'

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { LayoutGroup, motion } from 'framer-motion'
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
        <LayoutGroup id="bl">
          <div className="lg:space-y-1 lg:p-3">
            {bookmarks.edges.map((bookmark) => {
              const active = path === bookmark.node.id
              return (
                <motion.div layout key={bookmark.node.id}>
                  <BookmarksListItem active={active} bookmark={bookmark.node} />
                </motion.div>
              )
            })}
          </div>

          {bookmarks.pageInfo.hasNextPage && (
            <ListLoadMore setIsVisible={setIsVisible} />
          )}
        </LayoutGroup>
      </ListContainer>
    </BookmarksContext.Provider>
  )
}
