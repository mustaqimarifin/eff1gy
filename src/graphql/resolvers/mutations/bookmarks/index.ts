import { GraphQLError } from 'graphql'

import { IS_PROD } from '~/graphql/constants'
import { Context } from '~/graphql/context'
import {
  MutationAddBookmarkArgs,
  MutationDeleteBookmarkArgs,
  MutationEditBookmarkArgs,
} from '~/graphql/types.generated'
import { urlRX } from '~/lib/functions'
import { graphcdn } from '~/lib/graphcdn'
import { revue } from '~/lib/revue'

import getBookmarkMetaData from './getBookmarkMetaData'

export async function editBookmark(
  _,
  args: MutationEditBookmarkArgs,
  ctx: Context
) {
  const { id, data } = args
  const { title, description, tag, faviconUrl } = data
  const { prisma } = ctx

  if (!title || title.length === 0)
    throw new GraphQLError('Bookmark must have a title')

  // reset tags
  await prisma.bookmark.update({
    where: { id },
    data: {
      tags: {
        set: [],
      },
    },
    include: { tags: true },
  })

  return await prisma.bookmark
    .update({
      where: { id },
      data: {
        title,
        description,
        faviconUrl,
        tags: {
          connectOrCreate: {
            where: { name: tag },
            create: { name: tag },
          },
        },
      },
      include: { tags: true },
    })
    .then((bookmark) => {
      graphcdn.purgeList('bookmarks')
      return bookmark
    })
    .catch((err) => {
      console.error({ err })
      throw new GraphQLError('Unable to edit bookmark')
    })
}

export async function addBookmark(
  _,
  args: MutationAddBookmarkArgs,
  ctx: Context
) {
  const { data } = args
  const { url, tag } = data
  const { prisma } = ctx

  if (!urlRX(url)) throw new GraphQLError('URL was invalid')

  const metadata = await getBookmarkMetaData(url)
  const { host, title, image, description, faviconUrl } = metadata

  /*
    Preemptively add bookmarks to Revue, assuming I want to share them
    more broadly in the newsletter
  */
  if (IS_PROD) {
    try {
      const { id } = await revue.getCurrentIssue()
      await revue.addItemToIssue({ id, url })
    } catch (err) {
      console.error({ err })
    }
  } else {
    console.log('Adding bookmark to newsletter', { url })
  }

  return await prisma.bookmark
    .create({
      data: {
        url,
        host,
        title,
        image,
        description,
        faviconUrl,
        tags: {
          connectOrCreate: {
            where: { name: tag },
            create: { name: tag },
          },
        },
      },
      include: { tags: true },
    })
    .then((bookmark) => {
      graphcdn.purgeList('bookmarks')
      return bookmark
    })
    .catch((err) => {
      console.error({ err })
      throw new GraphQLError('Unable to create bookmark')
    })
}

export async function deleteBookmark(
  _,
  args: MutationDeleteBookmarkArgs,
  ctx: Context
) {
  const { id } = args
  const { prisma } = ctx

  return await prisma.bookmark
    .delete({
      where: { id },
    })
    .then(() => {
      graphcdn.purgeList('bookmarks')
      return true
    })
    .catch((err) => {
      console.error({ err })
      throw new GraphQLError('Unable to delete bookmark')
    })
}
