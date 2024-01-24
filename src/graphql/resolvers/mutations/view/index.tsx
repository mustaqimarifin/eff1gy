import { GraphQLError } from 'graphql'

import { type Context } from '~/graphql/context'
import { ViewType } from '~/graphql/typeSlut'

export async function addView(_, args, ctx: Context) {
  const { refId, type } = args
  const { db } = ctx

  let field: string
  let table: string
  switch (type) {
    case ViewType.Bookmark: {
      field = 'bookmarkId'
      table = 'bookmark'
      break
    }
    case ViewType.Blog: {
      field = 'blogId'
      table = 'blog'
      break
    }
    case ViewType.Question: {
      field = 'questionId'
      table = 'question'
      break
    }
    case ViewType.Stack: {
      field = 'stackId'
      table = 'stack'
      break
    }
    default: {
      throw new GraphQLError('Invalid reaction type')
    }
  }

  const [parentObject] = await Promise.all([
    db[table].findUnique({
      where: { id: refId },
    }),

    db[table].findMany({
      relationLoadStrategy: 'join',
      where: {
        [field]: refId,
      },
    }),
  ])

  if (!parentObject) {
    throw new GraphQLError('Reacting on something that doesn’t exist')
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
    .catch((err) => {
      console.error({ err })
      return { ...parentObject, reactableType: table }
    })
}
