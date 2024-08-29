import { Link2Icon } from "lucide-react"
import { memo, useState } from "react"
import { InView } from "react-intersection-observer"

import { ListItem } from "~/components/ListDetail/ListItem"
import type { BookmarkListItemFragment } from "~/gql/typeSlut"

interface Props {
	bookmark: BookmarkListItemFragment
	active: boolean
}

export const BookmarksListItem = memo<Props>(({ bookmark, active }) => {
	const [isVisible, setIsVisible] = useState(false)

	function handleClick(e, bookmark) {
		if (e.metaKey) {
			e.preventDefault()
			e.stopPropagation()
			window.open(bookmark.url, "_blank")?.focus()
		}
	}

	return (
		<InView as="div" onChange={(visible: boolean) => !isVisible && setIsVisible(visible)}>
			<ListItem
				key={bookmark.id}
				title={bookmark.title}
				byline={
					<div className="flex items-center space-x-2">
						{bookmark.faviconUrl && isVisible ? (
							<img
								src={bookmark.faviconUrl}
								alt={`Favicon for ${bookmark.host}`}
								className="h-4 w-4 rounded"
								width="16px"
								height="16px"
							/>
						) : (
							<span className="flex h-4 w-4 items-center justify-center">
								<Link2Icon />
							</span>
						)}
						<span>{bookmark.host}</span>
					</div>
				}
				active={active}
				href="/bookmarks/[id]"
				as={`/bookmarks/${bookmark.id}`}
				onClick={e => handleClick(e, bookmark)}
			/>
		</InView>
	)
})
