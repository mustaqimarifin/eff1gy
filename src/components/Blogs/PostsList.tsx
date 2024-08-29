"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import useSWR from "swr"

import { CLIENT_URL } from "~/graphql/constants"
import { fetcher } from "~/lib/functions"
import { ListContainer } from "../ListDetail/ListContainer"
import { TitleBar } from "../ListDetail/TitleBar"
import { LoadingSpinner } from "../LoadingSpinner"
import type { Post } from "./BlogDetail"
import { PostListItem } from "./PostListItem"

export function PostsList() {
	const path = usePathname()
	const [scrollContainerRef, setScrollContainerRef] = useState(null)
	const { data: posts, isLoading } = useSWR<Post[]>(`${CLIENT_URL}/api/post`, fetcher)

	if (!posts && isLoading) {
		return (
			<ListContainer onRef={setScrollContainerRef}>
				<TitleBar scrollContainerRef={scrollContainerRef} title="Posts" />
				<div className="flex flex-1 items-center justify-center">
					<LoadingSpinner />
				</div>
			</ListContainer>
		)
	}

	return (
		<>
			<ListContainer data-cy="posts-list" onRef={setScrollContainerRef}>
				<TitleBar scrollContainerRef={scrollContainerRef} title="Posts" />
				<div className="lg:space-y-1 lg:p-3">
					{posts
						?.sort((a, b) => {
							if (new Date(a?.date) > new Date(b?.date)) {
								return -1
							}
							return 1
						})
						.map(post => {
							const active = path === post.slug
							return <PostListItem key={post?.slug} post={post} active={active} />
						})}
				</div>
			</ListContainer>
		</>
	)
}
