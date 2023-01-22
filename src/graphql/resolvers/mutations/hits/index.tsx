import { GraphQLError } from 'graphql'

import { CLIENT_URL } from '~/graphql/constants'
import { Context } from '~/graphql/context'
import {
  HitType,
  MutationAddHitArgs,
  MutationDeleteHitArgs,
  MutationEditHitArgs,
} from '~/graphql/typeSlut'
//import { graphcdn } from '~/lib/graphcdn'
//import { emailMe } from '~/lib/postmark'

/* export async function editHit(_, args: MutationEditHitArgs, ctx: Context) {
  const { id } = args
  const { prisma, viewer } = ctx


  const comment = await prisma.comment.findUnique({
    where: { id },
  })

  if (!comment) throw new GraphQLError('Comment doesn’t exist')

  if (comment.userId !== viewer?.id) {
    throw new GraphQLError('You can’t edit this comment')
  }

  return await prisma.comment
    .update({
      where: { id },
      data: { text },
    })
    .then((comment) => {
      //graphcdn.purgeList('comments')
      return comment
    })
    .catch((err) => {
      console.error({ err })
      throw new GraphQLError('Unable to edit comment')
    })
}
 */
export async function addHit(_, args: MutationAddHitArgs, ctx: Context) {
  const { pageId, type } = args
  const { viewer, prisma } = ctx

  let field
  let table
  let route
  switch (type) {
    case HitType.Bookmark: {
      field = 'bookmarkId'
      table = 'bookmark'
      route = `${CLIENT_URL}/bookmarks/${pageId}`
      break
    }
    case HitType.Post: {
      field = 'postId'
      table = 'post'
      route = `${CLIENT_URL}/writing/${pageId}`
      break
    }
    case HitType.Question: {
      field = 'questionId'
      table = 'question'
      route = `${CLIENT_URL}/ama/${pageId}`
      break
    }
    case HitType.Stack: {
      field = 'stackId'
      table = 'stack'
      route = `${CLIENT_URL}/stack/${pageId}`
      break
    }
    default: {
      throw new GraphQLError('mowahhhh')
    }
  }

  const parentObject = await prisma[table].findUnique({
    where: { catID: pageId },
  })

  if (!parentObject) {
    throw new GraphQLError('page not incremented')
  }

  const [hit] = await Promise.all([
    prisma.pageView.upsert({
      where: {
        [field]: pageId,
      },
      create: {
        catID: pageId,
      },
      update: {
        viewCount: {
          increment: 1,
        },
      },
    }),
    prisma[table].update({
      where: {
        catID: pageId,
      },
      data: {
        updatedAt: new Date(),
      },
    }),
  ]).catch((err) => {
    console.error({ err })
    throw new GraphQLError('Unable to add comment')
  })

  // //graphcdn.purgeList('comments')

  return hit
}

/* const [parentObject, existingHit] = await Promise.all([
    prisma[table].findUnique({
      where: { id: pageId },
    }),

    prisma.pageView.findMany({
      where: {
        [field]: pageId,
      },
    }),
  ])

  if (!parentObject) {
    throw new GraphQLError('Reacting on something that doesn’t exist')
  }

  let fn
  if (existingHit.length > 0) {
    fn = () =>
      prisma.pageView.delete({
        where: {
          id: existingHit[0].id,
        },
      })
  } else {
    fn = () =>
      prisma.pageView.create({
        data: {
          [field]: pageId,
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
 */
