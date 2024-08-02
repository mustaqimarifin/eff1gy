"use client"

import { Plus } from "lucide-react"
import { useContext } from "react"
import SegmentedControl from "../UI/SegmentedController"
import { WritingContext } from "./PostsList"

import { useSession } from "next-auth/react"
import { GhostButton } from "~/components/Button"
import { TitleBar } from "~/components/ListDetail/TitleBar"

export function WritingTitlebar({ scrollContainerRef }) {
	//const { data } = useQuery(ViewerDocument)
	const { data: session } = useSession()

	function getAddButton() {
		if (session?.isAdmin) {
			return (
				<GhostButton href="/post/new" data-cy="new-post-button" size="small-square" aria-label="Add post">
					<Plus size={16} />
				</GhostButton>
			)
		}
		return null
	}

	function trailingAccessory() {
		return <div className="flex space-x-2">{getAddButton()}</div>
	}

	function getChildren() {
		const { setFilter, filter } = useContext(WritingContext)
		if (session?.isAdmin) {
			return (
				<div className="pb-1 pt-2">
					<SegmentedControl
						onSetActiveItem={setFilter}
						active={filter}
						items={[
							{ id: "published", label: "Published" },
							{ id: "draft", label: "Drafts" },
						]}
					/>
				</div>
			)
		}
		return null
	}

	return (
		<TitleBar trailingAccessory={trailingAccessory()} title="Posts" scrollContainerRef={scrollContainerRef}>
			{getChildren()}
		</TitleBar>
	)
}
