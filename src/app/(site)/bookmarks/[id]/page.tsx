import { Suspense } from "react"

import { BookmarkDetail } from "~/components/Bookmarks/BookmarkDetail"
import { BookmarksList } from "~/components/Bookmarks/BookmarksList"
import { ListDetailView } from "~/components/Layouts"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PreloadQuery, query } from "~/components/Provider/ApolloClient"
import { GET_BOOKMARK } from "~/graphql/queries/bookmarks"
import { GET_COMMENTS } from "~/graphql/queries/comments"
import { GET_TAGS } from "~/graphql/queries/tags"
import { GET_VIEWER } from "~/graphql/queries/viewer"

import { CommentType } from "~/gql/gql"
import { HiddenCounter } from "~/lib/actions"

interface BkProps {
	params: {
		id: string
	}
}
export default async function BookmarkPage(props: BkProps) {
	const { id } = props.params

	await Promise.all([
		query({ query: GET_VIEWER }),
		query({ query: GET_TAGS }),
		query({ query: GET_COMMENTS, variables: { refId: id, type: CommentType.Bookmark } }),
	])
	return (
		<ListDetailView
			list={<BookmarksList />}
			hasDetail
			detail={
				<PreloadQuery query={GET_BOOKMARK} variables={{ id: id }}>
					<Suspense fallback={<LoadingSpinner />}>
						<BookmarkDetail id={id} />
					</Suspense>
				</PreloadQuery>
			}
		/>
	)
}
