"use client";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { usePathname } from "next/navigation";
import { createContext, useEffect, useState } from "react";

import { ListContainer } from "~/components/ListDetail/ListContainer";

import { GetQuestionsDocument, QuestionStatus, type GetQuestionsQuery } from "~/graphql/typeSlut";
import { ListLoadMore } from "../ListDetail/ListLoadMore";
import { LoadingSpinner } from "../LoadingSpinner";
import { AMATitlebar } from "./AMATitlebar";
import { QuestionListItem } from "./QuestionListItem";

export const QuestionsContext = createContext({
	filterPending: false,
	setFilterPending: (bool: boolean) => {},
});

export function QuestionsList() {
	const path = usePathname();

	const [filterPending, setFilterPending] = useState(false);
	const [isVisible, setIsVisible] = useState(false);
	const [scrollContainerRef, setScrollContainerRef] = useState(null);

	const status = filterPending ? QuestionStatus.Pending : QuestionStatus.Answered;

	const { data, error, loading, fetchMore, refetch } = useQuery<GetQuestionsQuery>(
		GetQuestionsDocument,
		{
			variables: { filter: { status } },
		},
	);

	// refetch questions whenever I toggle back and forth between answered/unanswered
	useEffect(() => {
		refetch();
	}, [refetch]);

	function handleFetchMore() {
		return fetchMore({
			variables: {
				after: data.questions.pageInfo.endCursor,
				filter: { status },
			},
		});
	}

	useEffect(() => {
		if (isVisible) handleFetchMore();
	}, [isVisible]);

	if (loading && !data?.questions) {
		return (
			<ListContainer onRef={setScrollContainerRef}>
				<AMATitlebar scrollContainerRef={scrollContainerRef} />
				<div className="flex flex-1 items-center justify-center">
					<LoadingSpinner />
				</div>
			</ListContainer>
		);
	}

	if (error) return null;

	const { questions } = data;

	const defaultContextValue = { filterPending, setFilterPending };

	return (
		<QuestionsContext.Provider value={defaultContextValue}>
			<ListContainer data-cy="questions-list" onRef={setScrollContainerRef}>
				<AMATitlebar scrollContainerRef={scrollContainerRef} />

				<div className="lg:space-y-1 lg:p-3">
					{questions.edges.map((question) => {
						const active = path === question.node.id.toString(); // post ids are numbers

						return (
							<animate key={question.node.id}>
								<QuestionListItem question={question.node} active={active} />
							</animate>
						);
					})}

					{data.questions.pageInfo.hasNextPage && <ListLoadMore setIsVisible={setIsVisible} />}
				</div>
			</ListContainer>
		</QuestionsContext.Provider>
	);
}

// const [showLoadMore, setShowLoadMore] =useState(true)
// const [loading, setLoading] =useState(false)

// pre-populate data from the cache, but check for any new ones after
// the page loads
// const { data, fetchMore, error } = useGetAmaQuestionsQuery({
//   variables: { status: AmaStatus.Answered },
// })

// this can happen if the route is navigated to from the client or if the
// cache fails to populate for whatever reason
// if (!data || !data.amaQuestions) return <FullscreenLoading />
// if (error) return null

//useEffect(() => {
//   if (questions.length < PAGINATION_AMOUNT) {
//     setShowLoadMore(false)
//   }
// }, [questions])

// function handleLoadMore() {
//   if (loading) return

//   setLoading(true)

//   try {
//     fetchMore({
//       variables: {
//         skip: questions.length,
//       },
//       updateQuery: (prev, { fetchMoreResult }) => {
//         setLoading(false)

//         if (!fetchMoreResult) return prev

//         if (fetchMoreResult.amaQuestions.length < PAGINATION_AMOUNT) {
//           // at the end of the list
//           setShowLoadMore(false)
//         }

//         return Object.assign({}, prev, {
//           amaQuestions: [
//             ...prev.amaQuestions,
//             ...fetchMoreResult.amaQuestions,
//           ],
//         })
//       },
//     })
//   } catch (err) {
//     setLoading(false)
//   }
// }
