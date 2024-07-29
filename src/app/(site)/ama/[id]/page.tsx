import { Suspense } from "react"

import { QuestionDetail } from "~/components/AMA/QuestionDetail"
import { QuestionsList } from "~/components/AMA/QuestionsList"
import { ListDetailView } from "~/components/Layouts"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { query } from "~/components/Provider/ApolloClient"
import { ViewerDocument, type ViewerQuery } from "~/gql/typeSlut"
import { getViewer } from "~/graphql/context"
import { auth } from "~/lib/auth"

export default async function QuestionPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const session = await query<ViewerQuery>({ query: ViewerDocument })
	return (
		<ListDetailView
			list={<QuestionsList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<QuestionDetail id={id} session={session} />
				</Suspense>
			}
		/>
	)
}
