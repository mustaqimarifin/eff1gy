"use client"
import { useSession } from "next-auth/react"
import * as React from "react"

import Button from "~/components/Button"
import { ReactionButton } from "~/components/Button/ReactionButton"
import { GetPostDocument, ReactionType, useToggleReactionMutation } from "~/gql/gql"
import type { Post } from "~/gql/gql"

function getReactionButton(post: Post) {
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
					//@ts-ignore
					reactionCount: post.viewerHasReacted ? post.reactionCount! - 1 : post.reactionCount! + 1,
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
	//const { data } = useViewerQuery()
	const { data: session } = useSession()

	if (!session?.isAdmin) return null
	return (
		<Button href="/post/[slug]/edit" as={`/post/${post.slug}/edit`}>
			Edit
		</Button>
	)
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
