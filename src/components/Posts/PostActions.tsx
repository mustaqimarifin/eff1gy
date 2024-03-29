import { LucideEye } from "lucide-react";
import * as React from "react";

import Button, { ViewButton } from "~/components/Button";
import { ReactionButton } from "~/components/Button/ReactionButton";
import { GET_POST } from "~/graphql/queries/posts";
import { ReactionType, useToggleReactionMutation, useViewerQuery } from "~/graphql/typeSlut";

function getReactionButton(post) {
	const [toggleReaction, { loading }] = useToggleReactionMutation();
	function handleClick() {
		if (loading) return;

		toggleReaction({
			variables: {
				refId: post?.id,
				type: ReactionType.Post,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Post",
					...post,
					reactionCount: post?.viewerHasReacted ? post?.reactionCount - 1 : post?.reactionCount + 1,
					viewerHasReacted: !post?.viewerHasReacted,
				},
			},
			update(cache, { data: { toggleReaction } }) {
				cache.writeQuery({
					query: GET_POST,
					variables: { id: post?.id },
					data: {
						post: {
							...post,
							...toggleReaction,
						},
					},
				});
			},
		});
	}

	return (
		<ReactionButton
			id={post?.id}
			loading={loading}
			count={post?.reactionCount}
			hasReacted={post?.viewerHasReacted}
			onClick={handleClick}
		/>
	);
}

function getEditButton(post) {
	const { data } = useViewerQuery();

	if (!data?.viewer.isAdmin) return null;

	return (
		<Button href="/post/[slug]/edit" as={`/post/${post?.slug}/edit`}>
			Edit
		</Button>
	);
}
function viewButton(post) {
	return (
		<ViewButton aria-label="Views" style={{ maxHeight: "32px", overflow: "hidden" }}>
			<span className=" text-gray-500	">
				<LucideEye size={18} />
			</span>
			{/*   <PageViews id={post?.slug} trackView /> */}
		</ViewButton>
	);
}
export function PostActions({ post }) {
	return (
		<div className="flex items-center space-x-2">
			{getReactionButton(post)}
			{getEditButton(post)}
		</div>
	);
}
