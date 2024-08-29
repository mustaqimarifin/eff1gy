import type { GetBlogQueryVariables, GetBlogsQueryVariables } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"

export async function getBlogs(_: any, args: GetBlogsQueryVariables, ctx: Context) {
	const { db } = ctx
	return await db.blog.findMany({
		orderBy: { date: "desc" },
		include: {
			_count: {
				select: {
					reactions: true,
				},
			},
		},
	})
}

export async function getBlog(_: any, { slug }: GetBlogQueryVariables, ctx: Context) {
	const { db } = ctx
	const blog = db.blog.findUnique({
		where: { slug },
		include: {
			comments: true,
			_count: {
				select: {
					reactions: true,
				},
			},
		},
	})
	return blog
}
