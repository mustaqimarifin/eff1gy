import { Suspense } from "react"
import { QuestionsList } from "~/components/AMA/QuestionsList"

import { LoadingSpinner } from "~/components/LoadingSpinner"

export default async function QuestionIndex() {
	//await query({ query: GET_VIEWER })
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<QuestionsList />
		</Suspense>
	)
}
