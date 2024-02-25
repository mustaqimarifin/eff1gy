import { BookmarksList } from "~/components/Bookmarks/BookmarksList";
import { ListDetailView } from "~/components/Layouts";
import { client } from "~/components/Provider/ApolloClient";
import { GET_BOOKMARKS } from "~/graphql/queries/bookmarks";
import { GET_TAGS } from "~/graphql/queries/tags";
import { GET_VIEWER } from "~/graphql/queries/viewer";

export const dynamic = "force-dynamic";

export const metadata = {
	title: "Bookmarks",
};

export default async function BookIndex() {
	await Promise.all([
		client.query({ query: GET_VIEWER }),
		client.query({ query: GET_BOOKMARKS }),
		client.query({ query: GET_TAGS }),
	]);
	return <ListDetailView list={<BookmarksList />} hasDetail={false} detail={null} />;
}
