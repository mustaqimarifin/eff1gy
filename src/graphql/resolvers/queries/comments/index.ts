import { type Context } from '~/graphql/context'
import {
  type Bookmark,
  CommentType,
  type QueryCommentArgs,
} from '~/graphql/typeSlut'

export async function getComment(_, args: QueryCommentArgs, ctx: Context) {
  const { id } = args
  const { prisma } = ctx

  return await prisma.comment.findUnique({ where: { id } })
}

export async function getCommentAuthor(parent: Bookmark, _, ctx: Context) {
  const { id } = parent
  const { prisma } = ctx

  return await prisma.comment.findUnique({ where: { id } }).author()
}

export async function getComments(_, args, ctx: Context) {
  const { refId, type } = args
  const { prisma } = ctx

  if (!refId || !type) {
    return []
  }

  switch (type) {
    case CommentType.Bookmark: {
      const results = await prisma.bookmark
        .findUnique({ where: { id: refId } })
        .comments()

      return results || []
    }
    case CommentType.Blog: {
      const results = await prisma.blog
        .findUnique({ where: { id: refId } })
        .comments()

      return results || []
    }
    case CommentType.Question: {
      const results = await prisma.question
        .findUnique({ where: { id: refId } })
        .comments()

      return results || []
    }
    case CommentType.Stack: {
      const results = await prisma.stack
        .findUnique({ where: { id: refId } })
        .comments()

      return results || []
    }
    default: {
      return []
    }
  }
}
