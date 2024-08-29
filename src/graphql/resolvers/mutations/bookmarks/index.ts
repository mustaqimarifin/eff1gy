import { GraphQLError } from "graphql"
import { nanoid } from "nanoid"
import type { MutationAddBookmarkArgs, MutationDeleteBookmarkArgs, MutationEditBookmarkArgs } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"
import { urlRX } from "~/lib/functions"
import getBookmarkMetaData from "./getBookmarkMetaData"

export async function editBookmark(_, args: MutationEditBookmarkArgs, ctx: Context) {
	const { id, data } = args
	const { title, description, tag, faviconUrl } = data
	const { db } = ctx

	if (!title || title.length === 0) throw new GraphQLError("Bookmark must have a title")

	// reset tags
	await db.bookmark.update({
		where: { id },
		data: {
			tags: {
				set: [],
			},
		},
		include: { tags: true },
	})

	return await db.bookmark
		.update({
			where: { id },
			data: {
				title,
				description,
				faviconUrl,
				tags: {
					connectOrCreate: {
						where: { name: tag! },
						create: { id: nanoid(9), name: tag },
					},
				},
			},
			include: { tags: true },
		})

		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to edit bookmark")
		})
}

export async function addBookmark(_, args: MutationAddBookmarkArgs, ctx: Context) {
	const { data } = args
	const { url, tag } = data
	const { db } = ctx

	if (!urlRX(url)) throw new GraphQLError("URL was invalid")

	const metadata = await getBookmarkMetaData(url)
	const { host, title, image, description, faviconUrl } = metadata

	/*
    Preemptively add bookmarks to Revue, assuming I want to share them
    more broadly in the newsletter
  */

	return await db.bookmark
		.create({
			data: {
				id: nanoid(9),
				url,
				host,
				title,
				image,
				description,
				faviconUrl,
				tags: {
					connectOrCreate: {
						where: { name: tag },
						create: { id: nanoid(9), name: tag },
					},
				},
			},
			include: { tags: true },
		})

		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to create bookmark")
		})
}

export async function deleteBookmark(_, args: MutationDeleteBookmarkArgs, ctx: Context) {
	const { id } = args
	const { db } = ctx

	return await db.bookmark
		.delete({
			where: { id },
		})

		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to delete bookmark")
		})
}
