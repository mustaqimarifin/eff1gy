import type { Context } from "~/graphql/context";
import type { GetPostQueryVariables, GetPostsQueryVariables } from "~/graphql/typeSlut";

export async function getPosts(_, args: GetPostsQueryVariables, ctx: Context) {
	const { filter } = args;
	const { db, viewer } = ctx;
	const published = filter?.published;

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
	});
}

export async function getPost(_, { slug }: GetPostQueryVariables, ctx: Context) {
	const { db, viewer } = ctx;
	const [postBySlug, postById] = await Promise.all([
		db.post.findUnique({
			where: { slug },
			include: {
				_count: {
					select: {
						reactions: true,
					},
				},
			},
		}),
		db.post.findUnique({
			where: { slug },
			include: {
				_count: {
					select: {
						reactions: true,
					},
				},
			},
		}),
	]);

	const post = postBySlug || postById;

	if (!post?.publishedAt && !viewer?.isAdmin) {
		return null;
	}

	return post;
}
