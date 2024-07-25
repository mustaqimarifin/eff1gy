"use client";
import { useMutation } from "@apollo/client";
import { ReactionButton } from "~/components/Button/ReactionButton";
import { GET_BLOG } from "~/graphql/queries/blogs";
import type { Blog } from "~/graphql/typeSlut";
import { ReactionType, ToggleReactionDocument } from "~/graphql/typeSlut";

function getReactionButton(blog: Blog) {
	const [toggleReaction, { loading }] = useMutation(ToggleReactionDocument, {
		context: { fetchOptions: { cache: "no-store" } },
	});
	function handleClick() {
		if (loading) return;

		toggleReaction({
			variables: {
				refId: blog.id,
				type: ReactionType.Blog,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Blog",
					...blog,
					reactionCount: blog.viewerHasReacted ? blog.reactionCount! - 1 : blog.reactionCount! + 1,
					viewerHasReacted: !blog.viewerHasReacted,
				},
			},
			update(cache, { data: { toggleReaction } }) {
				cache.writeQuery({
					query: GET_BLOG,
					variables: { id: blog.id },
					data: {
						blog: {
							...blog,
							...toggleReaction,
						},
					},
				});
			},
		});
	}

	return (
		<ReactionButton
			id={blog.id}
			loading={loading}
			count={blog.reactionCount!}
			hasReacted={blog.viewerHasReacted!}
			onClick={handleClick}
		/>
	);
}

export function BlogAction({ blog }: { blog: Blog }) {
	return <div className="flex items-center space-x-2">{getReactionButton(blog)}</div>;
}
