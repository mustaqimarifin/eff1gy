import { GraphQLError } from 'graphql'

import { baseUrl } from '~/config/seo'
import { type Context } from '~/graphql/context'
import {
  type MutationAddQuestionArgs,
  type MutationDeleteQuestionArgs,
  type MutationEditQuestionArgs,
} from '~/graphql/typeSlut'

//import { graphcdn } from '~/lib/redis'
//import { graphcdn } from '~/lib/graphcdn'

export async function editQuestion(
  _,
  args: MutationEditQuestionArgs,
  ctx: Context
) {
  const { data, id } = args
  const { audioUrl, waveform } = data
  const { prisma, viewer } = ctx

  const question = await prisma.question.findUnique({ where: { id } })
  if (!question) {
    throw new GraphQLError('Question doesn’t exist')
  }

  if (viewer?.isAdmin || viewer?.id === question?.userId) {
    return await prisma.question
      .update({
        where: { id },
        data: {
          audioUrl,
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
      /*       .then((question) => {
        //graphcdn.purgeList('questions')
        return question
      }) */
      .catch((err) => {
        console.error({ err })
        throw new GraphQLError('Unable to edit question')
      })
  }

  throw new GraphQLError('No permission to delete this question')
}

export async function addQuestion(
  _,
  args: MutationAddQuestionArgs,
  ctx: Context
) {
  const { data } = args
  const { title, description } = data
  const { viewer, prisma } = ctx

  const question = await prisma.question
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
    .then((question) => {
      //graphcdn.purgeList('questions')
      return question
    })
    .catch((err) => {
      console.error({ err })
      throw new GraphQLError('Unable to add question')
    })

  return question
}

export async function deleteQuestion(
  _,
  args: MutationDeleteQuestionArgs,
  ctx: Context
) {
  const { id } = args
  const { prisma, viewer } = ctx

  const question = await prisma.question.findUnique({ where: { id } })
  if (!question) return true

  if (viewer?.isAdmin || viewer?.id === question.userId) {
    return await prisma.question
      .delete({ where: { id } })
      .then(() => {
        //graphcdn.purgeList('questions')
        return true
      })
      .catch((err) => {
        console.error({ err })
        throw new GraphQLError('Unable to delete question')
      })
  }

  throw new GraphQLError('No permission to delete this question')
}
