import { Suspense } from "react"

import { QuestionDetail } from "~/components/AMA/QuestionDetail"
import { QuestionsList } from "~/components/AMA/QuestionsList"
import { ListDetailView } from "~/components/Layouts"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { query } from "~/components/Provider/ApolloClient"
import { ViewType, ViewerDocument } from "~/gql/typeSlut"
import { HiddenCounter } from "~/lib/actions"

interface Props {
	params: {
		id: string
	}
}
export default async function QuestionPage(props: Props) {
	const { id } = props.params
	await query({ query: ViewerDocument })
	return (
		<ListDetailView
			list={<QuestionsList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<HiddenCounter refId={id} type={ViewType.Question} />
					<QuestionDetail id={id} />
				</Suspense>
			}
		/>
	)
}
