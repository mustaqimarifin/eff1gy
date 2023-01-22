import { GraphQLError } from 'graphql'

import { Context } from '~/graphql/context'
import { Bookmark, HitType, QueryHitArgs } from '~/graphql/typeSlut'

export async function getHit(_, args: QueryHitArgs, ctx: Context) {
  const { id } = args
  const { prisma } = ctx

  return await prisma.pageView.findUnique({ where: { id } })
}

export async function getHits(_, args, ctx: Context) {
  const { pageId, type } = args
  const { prisma } = ctx

  if (!pageId || !type) {
    return []
  }

  switch (type) {
    case HitType.Bookmark: {
      const results = await prisma.bookmark.findUnique({
        where: { id: pageId },
      })

      return results || []
    }
    case HitType.Question: {
      const results = await prisma.question.findUnique({
        where: { id: pageId },
      })

      return results || []
    }
    case HitType.Stack: {
      const results = await prisma.stack.findUnique({ where: { id: pageId } })

      return results || []
    }
    case HitType.Post: {
      const results = await prisma.post.findUnique({ where: { id: pageId } })

      return results || []
    }
    default: {
      return []
    }
  }
}
