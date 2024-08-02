"use client"

import { useParams, usePathname, useRouter } from "next/navigation"
import { createContext, useEffect, useMemo, useState } from "react"

import type { QueryRef } from "@apollo/client"
import React from "react"
import { ListContainer } from "~/components/ListDetail/ListContainer"
import { useGetBookmarksSuspenseQuery } from "~/gql/gql"
import { PAGINATION_AMOUNT } from "~/graphql/constants"
import { ListLoadMore } from "../ListDetail/ListLoadMore"
import { LoadingSpinner } from "../LoadingSpinner"
import { BookmarksListItem } from "./BookmarkListItem"
import { BookmarksTitlebar } from "./BookmarksTitlebar"

export const BookmarksContext = createContext({
	tag: null,
	setTag: (tag: string) => undefined,
})

type BKList = {
	queryRef?: QueryRef
}
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

	//const { fetchMore } = useQueryRefHandlers(queryRef)
	//const { data, error } = useReadQuery(queryRef)
	const { data, fetchMore, error } = useGetBookmarksSuspenseQuery({
		variables,
	})
	const v = {
		tag,
		setTag,
	}
	const value = React.useMemo(
		() => ({
			tag,
			setTag,
		}),
		[tag, setTag],
	)

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
		<BookmarksContext.Provider value={v}>
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
