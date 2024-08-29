import { Suspense } from "react"
import { BookmarksList } from "~/components/Bookmarks/BookmarksList"

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

export default function BookIndex() {
	return (
		<Suspense fallback={""}>
			<BookmarksList />
		</Suspense>
	)
}
