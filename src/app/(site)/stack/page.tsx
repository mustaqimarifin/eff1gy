import lazy from "next/dynamic"
import { Suspense } from "react"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PreloadQuery, query } from "~/components/Provider/ApolloClient"
import { GET_STACKS } from "~/graphql/queries/stack"
import { GET_VIEWER } from "~/graphql/queries/viewer"

export const metadata = {
	title: "Stack",
}

const StackList = lazy(() => import("~/components/Stack/StackList"))
export default async function StackIndex() {
	await query({ query: GET_VIEWER })
	return (
		<PreloadQuery query={GET_STACKS}>
			<Suspense fallback={<LoadingSpinner />}>
				<StackList />
			</Suspense>
		</PreloadQuery>
	)
}
