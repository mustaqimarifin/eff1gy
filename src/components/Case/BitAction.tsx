"use client"
import { useMutation } from "@apollo/client"
import { ReactionButton } from "~/components/Button/ReactionButton"
import type { Case } from "~/gql/typeSlut"
import { GetCaseDocument, ReactionType, ToggleReactionDocument } from "~/gql/typeSlut"

function getReactionButton(x) {
	const [toggleReaction, { loading }] = useMutation(ToggleReactionDocument, {
		context: { fetchOptions: { cache: "no-store" } },
	})
	function handleClick() {
		if (loading) return

		toggleReaction({
			variables: {
				refId: x.id,
				type: ReactionType.Case,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Case",
					...x,
					reactionCount: x.viewerHasReacted ? x.reactionCount - 1 : x.reactionCount + 1,
					viewerHasReacted: !x.viewerHasReacted,
				},
			},
			update(cache, { data: { toggleReaction } }) {
				cache.writeQuery({
					query: GetCaseDocument,
					variables: { slug: x.slug },
					data: {
						case: {
							...x,
							...toggleReaction,
						},
						__typename: "Query",
					},
				})
			},
		})
	}

	return (
		<ReactionButton
			refId={x.id}
			loading={loading}
			count={x.reactionCount}
			hasReacted={x.viewerHasReacted}
			onClick={handleClick}
		/>
	)
}

export function BitAction({ x }: { x: Case }) {
	return <div className="flex items-center space-x-2">{getReactionButton(x)}</div>
}
