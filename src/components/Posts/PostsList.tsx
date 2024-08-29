"use client"

import { useSearchParams } from "next/navigation"
import * as React from "react"

import { ListContainer } from "~/components/ListDetail/ListContainer"
import { useGetPostsQuery } from "~/gql/typeSlut"
import { LoadingSpinner } from "../LoadingSpinner"
import { PostListItem } from "./PostListItem"
import { WritingTitlebar } from "./WritingTitlebar"

export const WritingContext = React.createContext({
	filter: "published",
	setFilter: (_filter: any) => {},
})

export function PostsList() {
	const searchParams = useSearchParams()
	const slug = searchParams.get("slug")
	const [filter, setFilter] = React.useState("published")
	const [scrollContainerRef, setScrollContainerRef] = React.useState(null)
	const variables =
		filter === "published"
			? { filter: { published: true } }
			: { filter: { published: false } }
	const { data, error, refetch, loading } = useGetPostsQuery({ variables })

	React.useEffect(() => {
		refetch()
	}, [refetch])

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

	const { posts } = data!

	const value = {
		filter,
		setFilter,
	}

	return (
		<WritingContext.Provider value={value}>
			<ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
				<WritingTitlebar scrollContainerRef={scrollContainerRef} />
				<div className="lg:space-y-1 lg:p-3">
					{posts.map(post => {
						const active = slug === post?.slug
						return <PostListItem key={post?.id} post={post!} active={active} />
					})}
				</div>
			</ListContainer>
		</WritingContext.Provider>
	)
}
