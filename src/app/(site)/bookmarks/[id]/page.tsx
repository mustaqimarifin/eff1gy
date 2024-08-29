import { Suspense } from "react"
import { BookmarkDetail } from "~/components/Bookmarks/BookmarkDetail"
import { BookmarksList } from "~/components/Bookmarks/BookmarksList"
import { ListDetailView } from "~/components/Layouts"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { ViewType } from "~/gql/typeSlut"

import { HiddenCounter } from "~/lib/actions"

interface BkProps {
	params: {
		id: string
	}
}
export default function BookmarkPage(props: BkProps) {
	const { id } = props.params
	return (
		<ListDetailView
			list={<BookmarksList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<BookmarkDetail id={id} />
					<HiddenCounter refId={id} type={ViewType.Bookmark} />
				</Suspense>
			}
		/>
	)
}
