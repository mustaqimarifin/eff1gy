import type { GetPostQueryVariables, GetPostsQueryVariables } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"

export async function getPosts(_: any, args: GetPostsQueryVariables, ctx: Context) {
	const { filter } = args
	const { db, viewer } = ctx
	const published = filter?.published

	return await db.post.findMany({
		orderBy: published ? { publishedAt: "desc" } : { createdAt: "desc" },
		where: {
			publishedAt: !published && viewer?.isAdmin ? { equals: null } : { not: null },
		},
		include: {
			_count: {
				select: {
					reactions: true,
				},
			},
		},
	})
}

export async function getPost(_: any, { slug }: GetPostQueryVariables, ctx: Context) {
	const { db, viewer } = ctx

	const post = await db.post.findUnique({
		where: { slug },
		include: {
			_count: {
				select: {
					reactions: true,
				},
			},
		},
	})

	if (!post?.publishedAt && !viewer?.isAdmin) {
		return null
	}

	return post
}
