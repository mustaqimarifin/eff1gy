import { Suspense } from "react";

import { QuestionDetail } from "~/components/AMA/QuestionDetail";
import { QuestionsList } from "~/components/AMA/QuestionsList";
import { ListDetailView } from "~/components/Layouts";
import { LoadingSpinner } from "~/components/LoadingSpinner";

export default function QuestionPage({
	params: { id },
}: {
	params: { id: string };
}) {
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
	);
}
