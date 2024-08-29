"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
// import useSWR from "swr";

import { ListContainer } from "~/components/ListDetail/ListContainer"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import { CaseListItem } from "./CaseItem"

import type { LilBits } from "~/lib/sanity/client"

export function BitList({ bits }: { bits: LilBits[] }) {
	const path = usePathname()
	const [scrollContainerRef, setScrollContainerRef] = useState(null)
	/* 	const { data, isLoading } = useSWR<b[]>(`${CLIENT_URL}/api/case`, fetcher); */

	/* 	if (!bits && isLoading) {
		return (
			<ListContainer onRef={ setScrollContainerRef }>
				<TitleBar scrollContainerRef={ scrollContainerRef } title="Case Study" />
				<div className="flex flex-1 items-center justify-center">
					<LoadingSpinner />
				</div>
			</ListContainer>
		);
	}

 */ return (
		<ListContainer data-cy="case-list" onRef={setScrollContainerRef}>
			<TitleBar scrollContainerRef={scrollContainerRef} title="Code" />

			<div className="lg:space-y-1 lg:p-3">
				{bits?.map(b => {
					const active = path === b.slug
					return <CaseListItem key={b?.slug} c={b} active={active} />
				})}
			</div>
		</ListContainer>
	)
}
