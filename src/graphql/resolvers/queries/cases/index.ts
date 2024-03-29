import { type Context } from "~/graphql/context";
import type { GetCasesQueryVariables, GetCaseQueryVariables } from "~/graphql/typeSlut";

export async function getCases(_, args: GetCasesQueryVariables, ctx: Context) {
	const { db, viewer } = ctx;

	return await db.case.findMany({
		relationLoadStrategy: "join",
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
export async function getCase(_, { slug }: GetCaseQueryVariables, ctx: Context) {
	const { db, viewer } = ctx;

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
	]);

	const cibai = caseBySlug || caseById;

	/*   if (!case.date && !viewer?.isAdmin) {
    return null
  }
 */
	return cibai;
}
