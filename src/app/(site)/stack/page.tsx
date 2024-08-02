import { Suspense } from "react"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PreloadQuery, query } from "~/components/Provider/ApolloClient"
import StackList from "~/components/Stack/StackList"
import { GET_STACKS } from "~/graphql/queries/stack"
import { GET_TAGS } from "~/graphql/queries/tags"
import { GET_VIEWER } from "~/graphql/queries/viewer"

export const metadata = {
	title: "Stack",
}
/* export default async function StackIndex() {
	return <StackList />
} */
export default async function StackIndex() {
	await Promise.all([query({ query: GET_VIEWER }), query({ query: GET_TAGS })])
	return (
		<PreloadQuery query={GET_STACKS}>
			<Suspense fallback={<LoadingSpinner />}>
				<StackList />
			</Suspense>
		</PreloadQuery>
	)
}
