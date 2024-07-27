import { Suspense } from "react"

import { BookmarkDetail } from "~/components/Bookmarks/BookmarkDetail"
import { ListDetailView } from "~/components/Layouts"
import { PreloadQuery, query } from "~/components/Provider/ApolloClient"
import { CommentType, GetBookmarkDocument, GetCommentsDocument, GetTagsDocument, ViewerDocument } from "~/gql/typeSlut"

import { HiddenCounter } from "~/lib/actions"

interface BkProps {
	params: {
		id: string
	}
}
export default async function BookmarkPage(props: BkProps) {
	const { id } = props.params

	await Promise.all([
		query({ query: ViewerDocument }),
		query({ query: GetTagsDocument }),
		query({ query: GetCommentsDocument, variables: { refId: id, type: CommentType.Bookmark } }),
	])
	return (
		<ListDetailView
			list={
				<PreloadQuery query={GetBookmarkDocument} variables={{ id: id }}>
					<Suspense fallback={""}>
						<BookmarkDetail id={id} />
					</Suspense>
				</PreloadQuery>
			}
			hasDetail={false}
			detail={null}
		/>
	)
}
