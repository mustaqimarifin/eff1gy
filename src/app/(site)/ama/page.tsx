import { Suspense } from "react";
import { QuestionsList } from "~/components/AMA/QuestionsList";

import { ListDetailView } from "~/components/Layouts";
import { PreloadQuery, query } from "~/components/Provider/ApolloClient";
import { GET_QUESTIONS } from "~/graphql/queries/questions";
import { GET_VIEWER } from "~/graphql/queries/viewer";

/* export default async function QuestionIndex() {
  await Promise.allSettled([client.query({ query: GET_VIEWER }), client.query({ query: GET_QUESTIONS })])
  return <ListDetailView list={<QuestionsList />} hasDetail={false} detail={null} />
}
 */
export default async function QuestionIndex() {
	await query({ query: GET_VIEWER });
	return (
		<PreloadQuery query={GET_QUESTIONS}>
			<Suspense fallback={""}>
				<QuestionsList />
			</Suspense>
		</PreloadQuery>
	);
}
