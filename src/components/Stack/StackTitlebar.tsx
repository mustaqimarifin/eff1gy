"use client"
import { PlusIcon } from "lucide-react"

import { GhostButton } from "~/components/Button"
import { TitleBar } from "~/components/ListDetail/TitleBar"

import { useQuery } from "@apollo/client"

import { ViewerDocument } from "~/gql/typeSlut"
import { AddStackDialog } from "./AddStackDialog"

export function StackTitlebar({ scrollContainerRef }) {
	const { data } = useQuery(ViewerDocument)

	function trailingAccessory() {
		if (data?.viewer?.isAdmin) {
			return (
				<AddStackDialog
					trigger={
						<GhostButton aria-label="Add Stack" size="small-square">
							<PlusIcon />
						</GhostButton>
					}
				/>
			)
		}
		return null
	}

	return (
		<TitleBar
			scrollContainerRef={scrollContainerRef}
			title="Stack"
			trailingAccessory={trailingAccessory()}
		/>
	)
}
