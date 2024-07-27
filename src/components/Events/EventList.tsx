"use client"
import { usePathname } from "next/navigation"
import { memo, useState } from "react"

import { ListContainer } from "~/components/ListDetail/ListContainer"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import { summaries } from "~/data/events"
import { EventListItem } from "./EventListItem"

export const EventList = memo(() => {
	const path = usePathname()
	const [scrollContainerRef, setScrollContainerRef] = useState(null)

	return (
		<ListContainer data-cy="event-list" onRef={setScrollContainerRef}>
			<TitleBar scrollContainerRef={scrollContainerRef!} title="Events" />

			<div className="lg:space-y-1 lg:p-3">
				{summaries.map(summary => {
					const active = path === summary?.slug
					return <EventListItem key={summary?.slug} summary={summary} active={active} />
				})}
			</div>
		</ListContainer>
	)
})
