import { Suspense } from "react"
import { ListDetailView } from "~/components/Layouts"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PreloadQuery, query } from "~/components/Provider/ApolloClient"
import { StackDetail } from "~/components/Stack/StackDetail"
import StackList from "~/components/Stack/StackList"
import { GetStackDocument, ViewerDocument } from "~/gql/typeSlut"

interface StackProps {
	params: {
		slug: string
	}
}

export default async function StackPage(props: StackProps) {
	const { slug } = props.params
	await query({ query: ViewerDocument })
	return (
		<ListDetailView
			list={<StackList />}
			hasDetail
			detail={
				<PreloadQuery query={GetStackDocument} variables={{ slug }}>
					<Suspense fallback={<LoadingSpinner />}>
						<StackDetail slug={slug} />
					</Suspense>
				</PreloadQuery>
			}
		/>
	)
}
