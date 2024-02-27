import { EditQuestionDialog } from "~/components/AMA/EditQuestionDialog";
import Button from "~/components/Button";

import { GetQuestionDocument, type Question, ReactionType, useToggleReactionMutation } from "~/graphql/typeSlut";
import { ReactionButton } from "../Button/ReactionButton";

function useReactionButton(question: Question) {
	const [toggleReaction, { loading }] = useToggleReactionMutation();

	function handleClick() {
		if (loading) return;

		toggleReaction({
			variables: {
				refId: question.id,
				type: ReactionType.Question,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Question",
					...question,
					reactionCount: question.viewerHasReacted ? question.reactionCount - 1 : question.reactionCount + 1,
					viewerHasReacted: !question.viewerHasReacted,
				},
			},
			update(cache, { data: { toggleReaction } }) {
				cache.writeQuery({
					query: GetQuestionDocument,
					variables: { id: question.id },
					data: {
						question: {
							...question,
							...toggleReaction,
						},
					},
				});
			},
		});
	}

	return (
		<ReactionButton
			id={question.id}
			loading={loading}
			count={question.reactionCount}
			hasReacted={question.viewerHasReacted}
			onClick={handleClick}
		/>
	);
}

export function QuestionActions({ question }: { question: Question }) {
	if (question.viewerCanEdit) {
		return (
			<div className="flex items-center space-x-2">
				{useReactionButton(question)}
				{question.viewerCanEdit && <EditQuestionDialog question={question} trigger={<Button>Edit</Button>} />}
			</div>
		);
	}

	return null;
}
