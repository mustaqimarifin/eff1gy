import type { GetStackQueryVariables, GetStacksQueryVariables } from "~/gql/typeSlut"
import { PAGINATION_AMOUNT } from "~/graphql/constants"
import type { Context } from "~/graphql/context"

export async function getStacks(_, args: GetStacksQueryVariables, ctx: Context) {
	const { first = PAGINATION_AMOUNT, after = undefined } = args
	const { db } = ctx

	/*
    When we are paginating after a cursor, we need to skip the cursor object itself. 
    Ref https://www.db.io/docs/concepts/components/db-client/pagination#cursor-based-pagination
  */
	const skip = after ? 1 : 0
	const cursor = after ? { id: after } : undefined

	/*
    In order to know if there are more results in the database for the `hasNextPage`
    field, we overfetch by one. If we return more than the amount we requested,
    then we know there are more results.
  */
	const take = first! + 1

	try {
		const edges = await db.stack.findMany({
			take,
			skip,
			cursor,
			orderBy: { name: "asc" },
			include: {
				_count: {
					select: {
						reactions: true,
					},
				},
			},
		})

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
				totalCount: await db.stack.count(),
				endCursor: edgesWithNodes[edgesWithNodes.length - 1].cursor,
			},
			edges: edgesWithNodes,
		}
	} catch (e) {
		console.error({ error: e })
		return {
			pageInfo: {
				hasNextPage: false,
				totalCount: 0,
				endCursor: null,
			},
			edges: [],
		}
	}
}

export async function getStack(_, { slug }: GetStackQueryVariables, ctx: Context) {
	const { db } = ctx

	const stackBySlug = await db.stack
		.findUnique({
			where: { slug },
			include: {
				users: true,
				tags: true,
				_count: {
					select: {
						reactions: true,
					},
				},
			},
		})
		.catch(e => {
			return null
		})

	if (stackBySlug) return stackBySlug

	// Fallback for old links that may exist that used a stack ID
	return await db.stack.findUnique({
		where: { id: slug },
		include: {
			users: true,
			tags: true,
			_count: {
				select: {
					reactions: true,
				},
			},
		},
	})
}
