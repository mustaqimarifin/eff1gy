import { GraphQLError } from "graphql"
import { nanoid } from "nanoid"

import { type MutationToggleReactionArgs, ReactionType } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"

export async function toggleReaction(_: any, args: MutationToggleReactionArgs, ctx: Context) {
	const { refId, type } = args
	const { viewer, db } = ctx

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
				userId: viewer?.id,
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
					id: nanoid(9),
					userId: viewer?.id,
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
