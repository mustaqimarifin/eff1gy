"use client"
import { PlusIcon } from "lucide-react"

import { GhostButton } from "~/components/Button"
import { TitleBar } from "~/components/ListDetail/TitleBar"

import { useSession } from "next-auth/react"
import { AddStackDialog } from "./AddStackDialog"

export function StackTitlebar({ scrollContainerRef }) {
	//const { data } = useQuery(ViewerDocument)
	const { data: session } = useSession()
	function trailingAccessory() {
		if (session?.isAdmin) {
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

	return <TitleBar scrollContainerRef={scrollContainerRef} title="Stack" trailingAccessory={trailingAccessory()} />
}
