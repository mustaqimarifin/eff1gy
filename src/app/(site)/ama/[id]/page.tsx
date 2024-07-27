import { Suspense } from "react"

import { QuestionDetail } from "~/components/AMA/QuestionDetail"
import { QuestionsList } from "~/components/AMA/QuestionsList"
import { ListDetailView } from "~/components/Layouts"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { query } from "~/components/Provider/ApolloClient"
import { ViewerDocument } from "~/gql/typeSlut"

export default async function QuestionPage({
	params: { id },
}: {
	params: { id: string }
}) {
	await query({ query: ViewerDocument })
	return (
		<ListDetailView
			list={<QuestionsList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<QuestionDetail id={id} />
				</Suspense>
			}
		/>
	)
}
