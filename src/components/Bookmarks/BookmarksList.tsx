"use client"

import { useParams, usePathname, useRouter } from "next/navigation"
import { createContext, useEffect, useState } from "react"

import { useQuery } from "@apollo/client"
import { ListContainer } from "~/components/ListDetail/ListContainer"
import { GetBookmarksDocument } from "~/gql/typeSlut"
import { PAGINATION_AMOUNT } from "~/graphql/constants"
import { ListLoadMore } from "../ListDetail/ListLoadMore"
import { LoadingSpinner } from "../LoadingSpinner"
import { BookmarksListItem } from "./BookmarkListItem"
import { BookmarksTitlebar } from "./BookmarksTitlebar"

/* export function LayoutGroup({ children }) {
  useEffect(() => {
    animate('#bl', { x: 0 }, { easing: glide({ velocity: -500 }) })
  }, [])

  return <div id="bl">{children}</div>
} */
/* export function PGroup({ children }) {
  useEffect(() => {
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
 */
export const BookmarksContext = createContext({
	tag: null,
	setTag: (tag: string) => undefined,
})

export function BookmarksList() {
	const router = useRouter()
	const path = usePathname()
	const { tagQuery } = useParams()
	const [tag, setTag] = useState<string | string[]>(tagQuery)
	const [isVisible, setIsVisible] = useState(false)
	const [scrollContainerRef, setScrollContainerRef] = useState(null)

	const variables: any = tag
		? {
				first: PAGINATION_AMOUNT,
				after: null,
				filter: { tag },
			}
		: null
	const { error, data, fetchMore } = useQuery(GetBookmarksDocument, {
		variables,
	})

	const defaultContextValue = {
		tag,
		setTag,
	}

	function handleFetchMore() {
		return fetchMore({
			variables: {
				...variables,
				after: data?.bookmarks.pageInfo?.endCursor,
			},
		})
	}

	// scroll to the top of the list whenever the filters are changed
	useEffect(() => {
		if (scrollContainerRef) scrollContainerRef.current.scrollTo(0, 0)
	}, [])

	useEffect(() => {
		if (isVisible) handleFetchMore()
	}, [isVisible])

	// if a user is linked to /bookmarks?tag=foo, clear the query filter but stay on the same page
	useEffect(() => {
		if (tagQuery) router.push(path)
	}, [tagQuery, path])

	if (!data?.bookmarks) {
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
				<div>
					<div className="lg:space-y-1 lg:p-3">
						{bookmarks.edges.map(bookmark => {
							const active = path === bookmark?.node?.id
							return (
								<div key={bookmark?.node?.id}>
									<BookmarksListItem active={active} bookmark={bookmark?.node} />
								</div>
							)
						})}
					</div>

					{bookmarks.pageInfo?.hasNextPage && <ListLoadMore setIsVisible={setIsVisible} />}
				</div>
			</ListContainer>
		</BookmarksContext.Provider>
	)
}
