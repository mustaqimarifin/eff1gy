import type { GetCaseQueryVariables, GetCasesQueryVariables } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"

export async function getCases(_: any, args: GetCasesQueryVariables, ctx: Context) {
	const { db } = ctx

	return await db.case.findMany({
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
export async function getCase(_: any, { slug }: GetCaseQueryVariables, ctx: Context) {
	const { db, viewer } = ctx

	const cibai = db.case.findUnique({
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
	return cibai
}
