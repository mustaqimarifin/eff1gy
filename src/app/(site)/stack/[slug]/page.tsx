import { Suspense } from "react"
import { ListDetailView } from "~/components/Layouts"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PreloadQuery, query } from "~/components/Provider/ApolloClient"
import { StackDetail } from "~/components/Stack/StackDetail"
import StackList from "~/components/Stack/StackList"
import { GET_STACK } from "~/graphql/queries/stack"
import { GET_VIEWER } from "~/graphql/queries/viewer"

interface StackProps {
	params: {
		slug: string
	}
}

export default async function StackPage(props: StackProps) {
	const { slug } = props.params
	//await query({ query: GET_VIEWER })
	return (
		<ListDetailView
			list={<StackList />}
			hasDetail
			detail={
				<PreloadQuery
					query={GET_STACK}
					variables={{
						slug,
					}}
				>
					<Suspense fallback={<LoadingSpinner />}>
						<StackDetail slug={slug} />
					</Suspense>
				</PreloadQuery>
			}
		/>
	)
}
