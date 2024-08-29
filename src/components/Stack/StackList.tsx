"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { ListContainer } from "~/components/ListDetail/ListContainer"
import { useGetStacksQuery } from "~/gql/typeSlut"
import { ListLoadMore } from "../ListDetail/ListLoadMore"
import { LoadingSpinner } from "../LoadingSpinner"
import { StackListItem } from "./StackListItem"
import { StackTitlebar } from "./StackTitlebar"

export default function StackList() {
	const path = usePathname()
	const [isVisible, setIsVisible] = useState(false)
	const [scrollContainerRef, setScrollContainerRef] = useState(null)
	const { data, loading, fetchMore } = useGetStacksQuery()

	function handleFetchMore() {
		return fetchMore({
			variables: {
				after: data?.stacks.pageInfo?.endCursor,
			},
		})
	}

	useEffect(() => {
		if (isVisible) handleFetchMore()
	}, [isVisible])

	if (loading && !data?.stacks) {
		return (
			<ListContainer onRef={setScrollContainerRef}>
				<StackTitlebar scrollContainerRef={scrollContainerRef} />
				<div className="flex flex-1 items-center justify-center">
					<LoadingSpinner />
				</div>
			</ListContainer>
		)
	}

	return (
		<ListContainer data-cy="stack-list" onRef={setScrollContainerRef}>
			<StackTitlebar scrollContainerRef={scrollContainerRef} />

			<div className="lg:space-y-1 lg:p-3">
				{data?.stacks.edges.map(stack => {
					const active = path === stack?.node?.slug
					return (
						<StackListItem key={stack?.node?.id} stack={stack?.node!} active={active} />
					)
				})}
				{data?.stacks.pageInfo?.hasNextPage && (
					<ListLoadMore setIsVisible={setIsVisible} />
				)}
			</div>
		</ListContainer>
	)
}
