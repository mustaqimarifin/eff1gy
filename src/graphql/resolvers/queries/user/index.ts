import type { Context } from "~/graphql/context"

export function getUser(_, args, ctx: Context) {
	const { id } = args
	const { db } = ctx

	return db.user.findUnique({ where: { id } })
}
