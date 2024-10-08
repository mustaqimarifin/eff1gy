"use client"
import { useQuery } from "@apollo/client"
import Button from "~/components/Button"
import type { Stack } from "~/gql/typeSlut"
import {
	GetStackDocument,
	ReactionType,
	ViewerDocument,
	useToggleReactionMutation,
} from "~/gql/typeSlut"

import { ReactionButton } from "../Button/ReactionButton"
import { EditStackDialog } from "./EditStackDialog"

function getEditButton(stack) {
	const { data } = useQuery(ViewerDocument)
	if (data?.viewer?.isAdmin) {
		return <EditStackDialog stack={stack} trigger={<Button>Edit</Button>} />
	}
	return null
}

function getReactionButton(stack) {
	const [toggleReaction, { loading }] = useToggleReactionMutation()
	function handleClick() {
		if (loading) return

		toggleReaction({
			variables: {
				refId: stack.id,
				type: ReactionType.Stack,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Stack",
					...stack,
					reactionCount: stack.viewerHasReacted
						? stack.reactionCount - 1
						: stack.reactionCount + 1,
					viewerHasReacted: !stack.viewerHasReacted,
				},
			},
			update(cache, { data: { toggleReaction } }) {
				cache.writeQuery({
					query: GetStackDocument,
					variables: { slug: stack.slug },
					data: {
						__typename: "Query",
						stack: {
							...stack,
							...toggleReaction,
						},
					},
				})
			},
		})
	}

	return (
		<ReactionButton
			refId={stack.id}
			loading={loading}
			count={stack.reactionCount}
			hasReacted={stack.viewerHasReacted}
			onClick={handleClick}
		/>
	)
}
type Action = {
	stack: Stack
}
export function StackActions({ stack }: Action) {
	return (
		<div className="flex items-center space-x-2">
			{getReactionButton(stack)}
			{getEditButton(stack)}
		</div>
	)
}
