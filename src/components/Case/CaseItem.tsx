"use client"

import Image from "next/image"
import { memo } from "react"

import { ListItem } from "~/components/ListDetail/ListItem"

import type { LilBits } from "~/lib/sanity/client"

interface Props {
	c: LilBits
	active: boolean
}

export const CaseListItem = memo<Props>(({ c, active }) => {
	return (
		<ListItem
			key={c?.slug}
			href="/code/[slug]"
			as={`/code/${c?.slug}`}
			title={c.title}
			description={null}
			leadingAccessory={
				<Image
					width={48}
					height={48}
					alt={c?.title}
					className="rounded-xl"
					src={c?.caption}
				/>
			}
			// byline={`${c.detailsCount} details`}
			active={active}
		/>
	)
})
