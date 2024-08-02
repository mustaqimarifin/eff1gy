"use client"
import { PlusIcon } from "lucide-react"

import { GhostButton } from "~/components/Button"
import { TitleBar } from "~/components/ListDetail/TitleBar"

import { useSession } from "next-auth/react"
import { AddBookmarkDialog } from "./AddBookmarkDialog"
import { BookmarksFilterMenu } from "./FilterMenu"

export function BookmarksTitlebar({ scrollContainerRef }) {
	//const { data } = useViewerQuery()
	const { data: session } = useSession()
	function getAddButton() {
		if (session?.isAdmin) {
			return (
				<AddBookmarkDialog
					trigger={
						<GhostButton aria-label="Add bookmark" data-cy="open-add-bookmark-dialog" size="small-square">
							<PlusIcon size={16} />
						</GhostButton>
					}
				/>
			)
		}
		return null
	}

	function trailingAccessory() {
		return (
			<div className="flex space-x-2">
				<BookmarksFilterMenu />
				{getAddButton()}
			</div>
		)
	}

	return <TitleBar scrollContainerRef={scrollContainerRef} title="Bookmarks" trailingAccessory={trailingAccessory()} />
}
