import { type GetQuestionsQueryVariables, type QueryQuestionArgs, type Question, QuestionStatus } from "~/gql/typeSlut"
import { PAGINATION_AMOUNT } from "~/graphql/constants"
import type { Context } from "~/graphql/context"

export async function getQuestion(_: any, { id }: QueryQuestionArgs, ctx: Context) {
	const { db, viewer } = ctx
	const question = await db.question.findUnique({
		where: { id },
		include: {
			comments: true,
			_count: {
				select: {
					comments: true,
					reactions: true,
				},
			},
		},
	})

	if (!question) return null

	// answered, good to view
	if (question.comments && question._count.comments > 0) {
		return question
	}

	// question hasn't been answered, show it to admin or asker
	if (!viewer) return null

	if (question.userId === viewer?.id || viewer.isAdmin) {
		return question
	}

	return null
}

export async function getQuestions(_, args: GetQuestionsQueryVariables, ctx: Context) {
	const { first = PAGINATION_AMOUNT, after = undefined, filter = { status: QuestionStatus.Answered } } = args

	const { db, viewer } = ctx

	const nullResults = {
		pageInfo: {
			hasNextPage: false,
			totalCount: 0,
			endCursor: null,
		},
		edges: [],
	}

	if (!viewer?.isAdmin && filter?.status === QuestionStatus.Pending) {
		return nullResults
	}

	/*
    When we are paginating after a cursor, we need to skip the cursor object itself. 
    Ref https://www.db.io/docs/concepts/components/db-client/pagination#cursor-based-pagination
  */
	const skip = after ? 1 : 0
	const cursor = after ? { id: after } : undefined

	/*
    Not sure how to handle combined filters, but for now we can essentially 
    switch-case the filter argument and replace the `where` object in our
    findMany call.
  */
	let where
	if (filter?.status === QuestionStatus.Answered) {
		where = {
			comments: {
				some: {},
			},
		}
	}
	if (filter?.status === QuestionStatus.Pending) {
		where = {
			comments: {
				none: {},
			},
		}
	}

	/*
    In order to know if there are more results in the database for the `hasNextPage`
    field, we overfetch by one. If we return more than the amount we requested,
    then we know there are more results.
  */
	const take = first! + 1

	try {
		const edges = await db.question.findMany({
			take,
			skip,
			cursor,
			where,
			orderBy: {
				updatedAt: "desc",
			},
			include: {
				_count: {
					select: {
						comments: true,
						reactions: true,
					},
				},
			},
		})

		// happens when there are no pending questions left to answer, for example
		if (edges.length === 0) return nullResults

		// If we overfetched, then we know there are more results
		const hasNextPage = edges.length > first!
		// Remove the last item so we only return the requested `first` amount
		const trimmedEdges = hasNextPage ? edges.slice(0, -1) : edges
		const edgesWithNodes = trimmedEdges.map(edge => ({
			cursor: edge.id,
			node: edge,
		}))

		return {
			pageInfo: {
				hasNextPage,
				totalCount: await db.question.count({ where }),
				endCursor: edgesWithNodes[edgesWithNodes.length - 1].cursor,
			},
			edges: edgesWithNodes,
		}
	} catch (e) {
		console.error({ error: e })
		return nullResults
	}
}
export async function getQuestionAuthor(parent: Question, _: any, ctx: Context) {
	const { id } = parent
	const { db } = ctx

	return await db.question.findUnique({ where: { id } }).author()
}
