import { GraphQLError } from "graphql"
import { ViewType } from "~/gql/typeSlut"

import type { Context } from "~/graphql/context"

export async function addView(_: any, args: { refId: any; type: any }, ctx: Context) {
	const { refId, type } = args
	const { db } = ctx
	let table: string
	let field: string
	switch (type) {
		case ViewType.Bookmark: {
			field = "bookmarkId"
			table = "bookmark"
			break
		}
		case ViewType.Case: {
			field = "caseId"
			table = "case"
			break
		}
		case ViewType.Blog: {
			field = "blogId"
			table = "blog"
			break
		}
		case ViewType.Post: {
			field = "postId"
			table = "post"
			break
		}
		case ViewType.Event: {
			field = "eventId"
			table = "event"
			break
		}
		case ViewType.Question: {
			field = "questionId"
			table = "question"
			break
		}
		case ViewType.Stack: {
			field = "stackId"
			table = "stack"
			break
		}
		default: {
			throw new GraphQLError("Invalid reaction type")
		}
	}

	const [parentObject] = await Promise.all([
		db[table].findUnique({
			where: { id: refId },
		}),
		db[table].findMany({
			where: {
				[field]: refId,
			},
		}),
	])

	if (!parentObject) {
		throw new GraphQLError("Reacting on something that doesn’t exist")
	}

	let fn

	fn = () =>
		db[table].create({
			data: {
				[field]: String(refId),
			},
		})

	return await fn()
		.then(() => {
			return { ...parentObject, reactableType: table }
		})
		.catch((err: any) => {
			console.error({ err })
			return { ...parentObject, reactableType: table }
		})
}
