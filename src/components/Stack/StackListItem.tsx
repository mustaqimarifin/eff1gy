"use client"

import Image from "next/image"
import { memo } from "react"

import { ListItem } from "~/components/ListDetail/ListItem"
import type { StackListItemFragment } from "~/gql/typeSlut"
// TODO: Figure out how to get this dynamically
interface Props {
	stack: StackListItemFragment
	active: boolean
}

export const StackListItem = memo<Props>(({ stack, active }) => {
	function handleClick(e, stack) {
		if (e.metaKey) {
			e.preventDefault()
			e.stopPropagation()
			window.open(stack.url, "_blank")!.focus()
		}
	}

	return (
		<ListItem
			key={stack.id}
			href="/(site)/stack/[slug]"
			as={`/stack/${stack.slug}`}
			title={stack.name}
			description={null}
			byline={null}
			leadingAccessory={
				<div className="h-12 w-12">
					<Image
						priority
						// src={`/static/img/stack/${stack.image}`}
						src={`https://ik.imagekit.io/mstqmarfn/stack/${stack.image}`}
						width={60}
						height={60}
						alt={`${stack.name} icon`}
						className="rounded-md object-cover"
					/>
				</div>
			}
			active={active}
			onClick={e => handleClick(e, stack)}
		/>
	)
})
