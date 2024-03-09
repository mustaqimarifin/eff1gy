"use client";
import { useMutation } from "@apollo/client";
import { ReactionButton } from "~/components/Button/ReactionButton";
import { GET_CASE } from "~/graphql/queries/cases";
import type { Case} from "~/graphql/typeSlut";
import { ReactionType, ToggleReactionDocument } from "~/graphql/typeSlut";

function getReactionButton(x:Case) {
	const [toggleReaction, { loading }] = useMutation(ToggleReactionDocument, {
		context: { fetchOptions: { cache: "no-store" } },
	});
	function handleClick() {
		if (loading) return;

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
					query: GET_CASE,
					variables: { id: x.id },
					data: {
						x: {
							...x,
							...toggleReaction,
						},
					},
				});
			},
		});
	}

	return (
		<ReactionButton
			id={x.id}
			loading={loading}
			count={x.reactionCount}
			hasReacted={x.viewerHasReacted}
			onClick={handleClick}
		/>
	);
}

export function BitAction({ x }: { x: Case}) {
	return <div className="flex items-center space-x-2">{getReactionButton(x)}</div>;
}
