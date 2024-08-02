"use client"
import { ReactionButton } from "~/components/Button/ReactionButton"
import { GetBlogDocument, ReactionType, useToggleReactionMutation } from "~/gql/gql"
import type { Blog } from "~/gql/gql"

function getReactionButton(blog) {
	const [toggleReaction, { loading }] = useToggleReactionMutation({
		context: { fetchOptions: { cache: "no-store" } },
	})
	function handleClick() {
		if (loading) return

		toggleReaction({
			variables: {
				refId: blog.slug,
				type: ReactionType.Blog,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Blog",
					...blog,
					reactionCount: blog.viewerHasReacted ? blog.reactionCount - 1 : blog.reactionCount + 1,
					viewerHasReacted: !blog.viewerHasReacted,
				},
			},
			update(cache, { data: { toggleReaction } }) {
				cache.writeQuery({
					query: GetBlogDocument,
					variables: { slug: blog.slug },
					data: {
						blog: {
							...blog,
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
			refId={blog.slug}
			loading={loading}
			count={blog.reactionCount!}
			hasReacted={blog.viewerHasReacted!}
			onClick={handleClick}
		/>
	)
}

export function BlogAction({ blog }: { blog: Blog }) {
	return <div className="flex items-center space-x-2">{getReactionButton(blog)}</div>
}
