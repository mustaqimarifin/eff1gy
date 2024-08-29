import { EditQuestionDialog } from "~/components/AMA/EditQuestionDialog"
import Button from "~/components/Button"
import { ReactionButton } from "../Button/ReactionButton"

import { type Question, ReactionType, useToggleReactionMutation } from "~/gql/typeSlut"

function getReactionButton(question) {
	const [toggleReaction, { loading }] = useToggleReactionMutation()
	function handleClick() {
		if (loading) return

		toggleReaction({
			variables: {
				refId: question.id,
				type: ReactionType.Question,
			},
			/* optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Question",
					...question,
					reactionCount: question.viewerHasReacted ? question.reactionCount - 1 : question.reactionCount + 1,
					viewerHasReacted: !question.viewerHasReacted,
				},
			}, */
			/* update(cache, { data: { toggleReaction } }) {
				cache.writeQuery({
					query: GetQuestionDocument,
					variables: { id: question.id },
					data: {
						question: {
							...question,
							...toggleReaction,
						},
						__typename: "Query",
					},
				})
			}, */
		})
	}

	return (
		<ReactionButton
			refId={question.id}
			loading={loading}
			count={question.reactionCount}
			hasReacted={question.viewerHasReacted}
			onClick={handleClick}
		/>
	)
}
type Action = {
	question: Question
}
export function QuestionActions({ question }: Action) {
	if (question.viewerCanEdit) {
		return (
			<div className="flex items-center space-x-2">
				{getReactionButton(question)}
				{question.viewerCanEdit && (
					<EditQuestionDialog question={question} trigger={<Button>Edit</Button>} />
				)}
			</div>
		)
	}

	return null
}
