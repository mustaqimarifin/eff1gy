"use client"
import { useQuery } from "@apollo/client"
import * as React from "react"

import Button from "~/components/Button"
import { ReactionButton } from "~/components/Button/ReactionButton"
import {
	GetPostDocument,
	ViewerDocument,
	useToggleReactionMutation,
} from "~/gql/typeSlut"
import { type Post, ReactionType } from "~/gql/typeSlut"

function getReactionButton(post) {
	const [toggleReaction, { loading }] = useToggleReactionMutation()
	function handleClick() {
		if (loading) return

		toggleReaction({
			variables: {
				refId: post.id,
				type: ReactionType.Post,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Post",
					...post,
					reactionCount: post.viewerHasReacted
						? post.reactionCount! - 1
						: post.reactionCount! + 1,
					viewerHasReacted: !post.viewerHasReacted,
				},
			},
			update(cache, { data: { toggleReaction } }) {
				cache.writeQuery({
					query: GetPostDocument,
					variables: { slug: post.slug },
					data: {
						post: {
							...post,
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
			refId={post.id}
			loading={loading}
			count={post.reactionCount}
			hasReacted={post.viewerHasReacted}
			onClick={handleClick}
		/>
	)
}

function getEditButton(post: Post) {
	const { data } = useQuery(ViewerDocument)
	if (!data?.viewer?.isAdmin) return null
	return <Button href={`/post/${post.slug}/edit`}>Edit</Button>
}
type Action = {
	post: Post
}
export function PostActions({ post }: Action) {
	return (
		<div className="flex items-center space-x-2">
			{getReactionButton(post)}
			{getEditButton(post)}
		</div>
	)
}
