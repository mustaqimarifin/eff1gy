import { GraphQLError } from "graphql"

import type { MutationAddQuestionArgs, MutationDeleteQuestionArgs, MutationEditQuestionArgs } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"
// import { graphcdn } from "~/lib/graphcdn";
// import { graphcdn } from '~/lib/redis'
// import { graphcdn } from '~/lib/graphcdn'
export async function editQuestion(_, args: MutationEditQuestionArgs, ctx: Context) {
	const { data, id } = args

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
					waveform: Array.isArray(data.waveform) ? data.waveform : null,
				},
				include: {
					_count: {
						select: {
							comments: true,
						},
					},
				},
			})
			/* 			      .then((question) => {
        graphcdn.purgeList('questions')
        return question
      })  */
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
		/* 		     .then((question) => {
      graphcdn.purgeList('questions')
      return question
    })  */
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
		return await db.question
			.delete({ where: { id } })
			/* 			       .then(() => {
        graphcdn.purgeList('questions')
        return true
      })  */
			.catch(err => {
				console.error({ err })
				throw new GraphQLError("Unable to delete question")
			})
	}

	throw new GraphQLError("No permission to delete this question")
}
