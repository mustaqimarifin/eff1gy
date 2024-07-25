import { Suspense } from "react";
import { ListDetailView } from "~/components/Layouts";
import { PostsList } from "~/components/Posts/PostsList";
import { PreloadQuery, query } from "~/components/Provider/ApolloClient";
import { GET_POSTS } from "~/graphql/queries/posts";
import { GET_VIEWER } from "~/graphql/queries/viewer";

/* export default async function WritingPage () {
	await query({ query: GET_VIEWER })
	return <ListDetailView list={

		<PreloadQuery
			query={ GET_POSTS }
			variables={ {
				filter: { published: true }
			} }
		>
			<Suspense fallback={""}>
				<PostsList />
			</Suspense>
		</PreloadQuery>
	} hasDetail={ false } detail={ null } />
} */

/* export default async function WritingPage () {
	await query({ query: GET_VIEWER })
	return <ListDetailView list={<PostsList />} hasDetail={ false } detail={ null } />
}
 



/* export default async function WritingPage() {
	 await Promise.all([
		query({ query: GET_VIEWER }),
		query({
			query: GET_POSTS,
			variables: { filter: { published: true } },
		}),
	]);
 
	return <ListDetailView list={<PostsList/>} hasDetail={false} detail={null} />;
}
 */

export default async function WritingPage() {
	await query({ query: GET_VIEWER });
	return (
		<PreloadQuery
			query={GET_POSTS}
			variables={{
				filter: { published: true },
			}}
		>
			<Suspense fallback={""}>
				<PostsList />
			</Suspense>
		</PreloadQuery>
	);
}
