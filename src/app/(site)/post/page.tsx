import { ListDetailView } from "~/components/Layouts";
import { PostsList } from "~/components/Posts/PostsList";
import { getClient } from "~/components/Provider/ApolloClient";
import { GET_POSTS } from "~/graphql/queries/posts";
import { GET_VIEWER } from "~/graphql/queries/viewer";

export const metadata = {
	title: "Writing",
};

export const dynamic = "force-dynamic";

export default async function WritingPage() {
	const client = getClient();

	await Promise.all([
		client.query({ query: GET_VIEWER }),
		client.query({
			query: GET_POSTS,
			variables: { filter: { published: true } },
		}),
	]);

	return <ListDetailView list={<PostsList />} hasDetail={false} detail={null} />;
}
