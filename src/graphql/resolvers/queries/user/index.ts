import type { GetUserQueryVariables } from "~/gql/gql"
import type { Context } from "~/graphql/context"

export function getUser(_: any, args: { id: string }, ctx: Context) {
	const { id } = args
	const { db } = ctx

	return db.user.findUnique({ where: { id } })
}
