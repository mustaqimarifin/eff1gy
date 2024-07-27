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

	const [caseBySlug, caseById] = await Promise.all([
		db.case.findUnique({
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
		db.case.findUnique({
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
	])

	const cibai = caseBySlug || caseById

	/*   if (!case.date && !viewer?.isAdmin) {
    return null
  }
 */
	return cibai
}
