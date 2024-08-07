import { Suspense } from "react"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PostsList } from "~/components/Posts/PostsList"
import { PreloadQuery } from "~/components/Provider/ApolloClient"
import { GET_POSTS } from "~/graphql/queries/posts"

/* export default async function WritingPage () {
	//await query({ query: ViewerDocument })
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
	//await query({ query: ViewerDocument })
	return <ListDetailView list={<PostsList />} hasDetail={ false } detail={ null } />
}
 



/* export default async function WritingPage() {
	 await Promise.all([
		query({ query: ViewerDocument }),
		query({
			query: GET_POSTS,
			variables: { filter: { published: true } },
		}),
	]);
 
	return <ListDetailView list={<PostsList/>} hasDetail={false} detail={null} />;
}
 */

export default async function WritingPage() {
	//await query({ query: GET_VIEWER })
	return (
		<PreloadQuery
			query={GET_POSTS}
			variables={{
				filter: { published: true },
			}}
		>
			<Suspense fallback={<LoadingSpinner />}>
				<PostsList />
			</Suspense>
		</PreloadQuery>
	)
}
