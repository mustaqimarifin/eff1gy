"use client"
import { PlusIcon } from "lucide-react"

import { useQuery } from "@apollo/client"
import { GhostButton } from "~/components/Button"
import { TitleBar } from "~/components/ListDetail/TitleBar"

import { ViewerDocument } from "~/gql/typeSlut"
import { AddBookmarkDialog } from "./AddBookmarkDialog"
import { BookmarksFilterMenu } from "./FilterMenu"

export function BookmarksTitlebar({ scrollContainerRef }) {
	const { data } = useQuery(ViewerDocument)

	function getAddButton() {
		if (data?.viewer?.isAdmin) {
			return (
				<AddBookmarkDialog
					trigger={
						<GhostButton
							aria-label="Add bookmark"
							data-cy="open-add-bookmark-dialog"
							size="small-square"
						>
							<PlusIcon />
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

	return (
		<TitleBar
			scrollContainerRef={scrollContainerRef}
			title="Bookmarks"
			trailingAccessory={trailingAccessory()}
		/>
	)
}
