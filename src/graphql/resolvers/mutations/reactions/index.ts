import { type Context } from "~/graphql/context"
import {
  ReactionType,
  type MutationToggleReactionArgs,
} from "~/graphql/typeSlut"
import { GraphQLError } from "graphql"

export async function toggleReaction(
  _,
  args: MutationToggleReactionArgs,
  ctx: Context
) {
  const { refId, type } = args
  const { viewer, prisma } = ctx

  let field: string
  let table: string
  switch (type) {
    case ReactionType.Bookmark: {
      field = "bookmarkId"
      table = "bookmark"
      break
    }
    case ReactionType.Post: {
      field = "postId"
      table = "post"
      break
    }
    case ReactionType.Blog: {
      field = "blogId"
      table = "blog"
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
    prisma[table].findUnique({
      where: { id: refId },
    }),

    prisma.reaction.findMany({
      where: {
        [field]: refId,
        userId: viewer.id,
      },
    }),
  ])

  if (!parentObject) {
    throw new GraphQLError("Reacting on something that doesn’t exist")
  }

  let fn
  if (existingReaction.length > 0) {
    fn = () =>
      prisma.reaction.delete({
        where: {
          id: existingReaction[0].id,
        },
      })
  } else {
    fn = () =>
      prisma.reaction.create({
        data: {
          userId: viewer.id,
          [field]: String(refId),
        },
      })
  }

  return await fn()
    .then(() => {
      return { ...parentObject, reactableType: table }
    })
    .catch((err) => {
      console.error({ err })
      return { ...parentObject, reactableType: table }
    })
}
