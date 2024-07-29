import type { GetStackQueryVariables, GetStacksQueryVariables } from "~/gql/typeSlut"
import { PAGINATION_AMOUNT } from "~/graphql/constants"
import type { Context } from "~/graphql/context"

export async function getStacks(_, args: GetStacksQueryVariables, ctx: Context) {
	const { first = PAGINATION_AMOUNT, after = undefined } = args
	const { db } = ctx
	const skip = after ? 1 : 0
	const cursor = after ? { id: after } : undefined
	const take = first + 1

	try {
		const edges = await db.stack.findMany({
			relationLoadStrategy: "query",
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
		const hasNextPage = edges.length > first
		const trimmedEdges = hasNextPage ? edges.slice(0, -1) : edges
		const edgesWithNodes = trimmedEdges?.map(edge => ({
			cursor: edge.id,
			node: edge,
		}))
		console.log("STACK_EDGES", {
			pageInfo: {
				hasNextPage,
				totalCount: await db.stack.count(),
				endCursor: edgesWithNodes[edgesWithNodes.length - 1].cursor,
			},
			edges: edgesWithNodes,
		})
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
			relationLoadStrategy: "query",

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
		relationLoadStrategy: "query",
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
