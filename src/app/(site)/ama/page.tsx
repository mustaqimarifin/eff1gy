import { Suspense } from "react"
import { QuestionsList } from "~/components/AMA/QuestionsList"

import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PreloadQuery, query } from "~/components/Provider/ApolloClient"
import { GET_QUESTIONS } from "~/graphql/queries/questions"
import { GET_VIEWER } from "~/graphql/queries/viewer"

export default async function QuestionIndex() {
	await query({ query: GET_VIEWER })
	return (
		<PreloadQuery query={GET_QUESTIONS}>
			<Suspense fallback={<LoadingSpinner />}>
				<QuestionsList />
			</Suspense>
		</PreloadQuery>
	)
}
