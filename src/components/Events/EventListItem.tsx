import Image from "next/image"
import { memo } from "react"

import { ListItem } from "~/components/ListDetail/ListItem"
import type { EventDetailsPostSummary } from "~/data/events"

interface Props {
	summary: EventDetailsPostSummary
	active: boolean
}

export const EventListItem = memo<Props>(({ summary, active }) => {
	return (
		<ListItem
			key={summary.slug}
			href={`/events/${summary.slug}`}
			title={summary.title}
			description={null}
			leadingAccessory={
				<Image
					width={48}
					height={48}
					alt={summary?.title}
					className="rounded-xl"
					src={summary?.logo}
				/>
			}
			byline={`${summary?.detailsCount} details`}
			active={active}
		/>
	)
})
