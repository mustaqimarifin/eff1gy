import type { Context } from "~/graphql/context"

export async function getTags(_, __, ctx: Context) {
	const { db } = ctx

	try {
		return await db.tag.findMany({
			orderBy: { name: "desc" },
		})
	} catch (e) {
		return []
	}
}
