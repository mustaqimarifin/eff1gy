import { GraphQLError } from "graphql"
import { nanoid } from "nanoid"

import type { MutationAddQuestionArgs, MutationDeleteQuestionArgs, MutationEditQuestionArgs } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"

export async function editQuestion(_, args: MutationEditQuestionArgs, ctx: Context) {
	const { data, id } = args
	const waves = Array.isArray(data.waveform) ? data.waveform : null
	const waveform = Buffer.from(waves)

	const { db, viewer } = ctx

	const ama = await db.question.findUnique({ where: { id } })
	if (!ama) {
		throw new GraphQLError("Question doesn’t exist")
	}

	if (viewer?.isAdmin || viewer?.id === ama?.userId) {
		return await db.question
			.update({
				where: { id },
				data: {
					description: data.description,
					title: data.title,
					//  status: ama.status,
					audioUrl: data.audioUrl ?? null,
					waveform,
				},
				include: {
					_count: {
						select: {
							comments: true,
						},
					},
				},
			})

			.catch(err => {
				console.error({ err })
				throw new GraphQLError("Unable to edit question")
			})
	}

	throw new GraphQLError("No permission to delete this question")
}

export async function addQuestion(_, args: MutationAddQuestionArgs, ctx: Context) {
	const { data } = args
	const { title, description } = data
	const { viewer, db } = ctx

	const question = await db.question
		.create({
			data: {
				id: nanoid(9),
				title,
				description,
				userId: viewer?.id,
			},
			include: {
				_count: {
					select: {
						comments: true,
					},
				},
			},
		})
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to add question")
		})

	return question
}

export async function deleteQuestion(_, args: MutationDeleteQuestionArgs, ctx: Context) {
	const { id } = args
	const { db, viewer } = ctx

	const question = await db.question.findUnique({ where: { id } })
	if (!question) return true

	if (viewer?.isAdmin || viewer?.id === question.userId) {
		return await db.question.delete({ where: { id } }).catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to delete question")
		})
	}

	throw new GraphQLError("No permission to delete this question")
}
