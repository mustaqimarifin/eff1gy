import type { Context } from "~/graphql/context";
import type { GetBlogQueryVariables, GetBlogsQueryVariables } from "~/graphql/typeSlut";

export async function getBlogs(_, args: GetBlogsQueryVariables, ctx: Context) {
	const { db } = ctx;

	return await db.blog.findMany({
		orderBy: { date: "desc" },
		include: {
			_count: {
				select: {
					reactions: true,
				},
			},
		},
	});
}

export async function getBlog(_, { slug }: GetBlogQueryVariables, ctx: Context) {
	const { db } = ctx;

	const [blogBySlug, blogById] = await Promise.all([
		db.blog.findUnique({
			where: { slug },
			include: {
				comments: true,
				_count: {
					select: {
						reactions: true,
					},
				},
			},
		}),
		db.blog.findUnique({
			where: { slug },
			include: {
				comments: true,
				_count: {
					select: {
						reactions: true,
					},
				},
			},
		}),
	]);

	const blog = blogBySlug || blogById;

	/*   if (!blog.date && !viewer?.isAdmin) {
    return null
  }
 */
	return blog;
}
