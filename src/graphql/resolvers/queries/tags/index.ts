import type { Context } from "~/graphql/context"

export async function getTags(_, __, ctx: Context) {
	try {
		return await ctx.db.tag.findMany({
			orderBy: { name: "desc" },
		})
	} catch (e) {
		return []
	}
}
