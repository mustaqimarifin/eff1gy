import { QuestionsList } from "~/components/AMA/QuestionsList";

import { ListDetailView } from "~/components/Layouts";
import { client } from "~/components/Provider/ApolloClient";
import { GET_QUESTIONS } from "~/graphql/queries/questions";
import { GET_VIEWER } from "~/graphql/queries/viewer";

export const dynamic = "force-dynamic";

export default async function QuestionIndex() {
	await Promise.allSettled([client.query({ query: GET_VIEWER }), client.query({ query: GET_QUESTIONS })]);
	return <ListDetailView list={<QuestionsList />} hasDetail={false} detail={null} />;
}
