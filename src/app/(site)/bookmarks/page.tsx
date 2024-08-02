import { Suspense } from "react"
import { BookmarksList } from "~/components/Bookmarks/BookmarksList"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PreloadQuery, query } from "~/components/Provider/ApolloClient"
import { GET_BOOKMARKS } from "~/graphql/queries/bookmarks"
import { GET_TAGS } from "~/graphql/queries/tags"
import { GET_VIEWER } from "~/graphql/queries/viewer"

export const metadata = {
	title: "Bookmarks",
}

/* export default async function BookIndex() {
	await Promise.all([
		client.query({ query: ViewerDocument }),
		client.query({ query: GET_BOOKMARKS }),
		client.query({ query: GET_TAGS }),
	])
	return <ListDetailView list={<BookmarksList />} hasDetail={false} detail={null} />
} */

export default async function BookIndex() {
	await Promise.all([query({ query: GET_VIEWER }), query({ query: GET_TAGS })])
	return (
		<PreloadQuery query={GET_BOOKMARKS}>
			<Suspense fallback={<LoadingSpinner />}>
				<BookmarksList />
			</Suspense>
		</PreloadQuery>
	)
}
