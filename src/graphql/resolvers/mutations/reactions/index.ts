import { GraphQLError } from "graphql"

import { ReactionType } from "~/gql/gql"
import type { ToggleReactionMutationVariables } from "~/gql/gql"
import type { Context } from "~/graphql/context"
import { auth } from "~/lib/auth"

export async function toggleReaction(_: any, args: ToggleReactionMutationVariables, ctx: Context) {
	const session = await auth()
	const { refId, type } = args
	const { db } = ctx

	let field: string
	let table: string
	switch (type) {
		case ReactionType.Bookmark: {
			field = "bookmarkId"
			table = "bookmark"
			break
		}
		case ReactionType.Blog: {
			field = "blogId"
			table = "blog"
			break
		}
		case ReactionType.Post: {
			field = "postId"
			table = "post"
			break
		}
		case ReactionType.Event: {
			field = "eventId"
			table = "event"
			break
		}
		case ReactionType.Case: {
			field = "caseId"
			table = "case"
			break
		}
		case ReactionType.Question: {
			field = "questionId"
			table = "question"
			break
		}
		case ReactionType.Stack: {
			field = "stackId"
			table = "stack"
			break
		}
		default: {
			throw new GraphQLError("Invalid reaction type")
		}
	}

	const [parentObject, existingReaction] = await Promise.all([
		db[table].findUnique({
			where: { id: refId },
		}),

		db.reaction.findMany({
			where: {
				[field]: refId,
				userId: session?.userId,
			},
		}),
	])

	if (!parentObject) {
		throw new GraphQLError("Reacting on something that doesn’t exist")
	}

	let fn
	if (existingReaction.length > 0) {
		fn = () =>
			db.reaction.delete({
				where: {
					id: existingReaction[0].id,
				},
			})
	} else {
		fn = () =>
			db.reaction.create({
				data: {
					userId: session?.userId,
					[field]: String(refId),
				},
			})
	}

	return await fn()
		.then(() => {
			return { ...parentObject, reactableType: table }
		})
		.catch(err => {
			console.error({ err })
			return { ...parentObject, reactableType: table }
		})
}
