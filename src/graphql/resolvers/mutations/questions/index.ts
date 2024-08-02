import { GraphQLError } from "graphql"

import type {
	AddQuestionMutationVariables,
	DeleteQuestionMutationVariables,
	EditQuestionMutationVariables,
} from "~/gql/gql"
import type { Context } from "~/graphql/context"
import { auth } from "~/lib/auth"
// import { graphcdn } from "~/lib/graphcdn";
// import { graphcdn } from '~/lib/redis'
// import { graphcdn } from '~/lib/graphcdn'
export async function editQuestion(_: any, args: EditQuestionMutationVariables, ctx: Context) {
	const { data, id } = args
	const session = await auth()

	const { db } = ctx

	const ama = await db.question.findUnique({ where: { id } })
	if (!ama) {
		throw new GraphQLError("Question doesn’t exist")
	}

	if (session?.isAdmin || session?.userId === ama?.userId) {
		return await db.question
			.update({
				where: { id },
				data: {
					description: data.description,
					title: data.title,
					//author: viewer,
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

export async function addQuestion(_: any, args: AddQuestionMutationVariables, ctx: Context) {
	const session = await auth()
	const { data } = args
	const { title, description } = data
	const { viewer, db } = ctx

	const question = await db.question
		.create({
			data: {
				title,
				description,
				userId: session?.userId,
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

export async function deleteQuestion(_: any, args: DeleteQuestionMutationVariables, ctx: Context) {
	const session = await auth()

	const { id } = args
	const { db } = ctx

	const question = await db.question.findUnique({ where: { id } })
	if (!question) return true

	if (session?.isAdmin || session?.userId === question.userId) {
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
