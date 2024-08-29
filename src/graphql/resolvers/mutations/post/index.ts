import { GraphQLError } from "graphql"
import { nanoid } from "nanoid"

import type { MutationAddPostArgs, MutationEditPostArgs } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"

export async function editPost(_, args: MutationEditPostArgs, ctx: Context) {
	const { id, data } = args
	const { title = "", text = "", slug = "", excerpt = "", published = false } = data
	const { db } = ctx

	const existing = await db.post.findUnique({ where: { slug } })
	if (existing?.id !== id) throw new GraphQLError("Slug already exists")

	return await db.post
		.update({
			where: { id },
			data: {
				title,
				text,
				slug,
				excerpt: excerpt!,
				publishedAt:
					!existing.publishedAt && published ? new Date() : existing.publishedAt ? existing.publishedAt : null,
			},
		})
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to edit post")
		})
}

export async function addPost(_, args: MutationAddPostArgs, ctx: Context) {
	const { data } = args
	const { title, text, slug, excerpt = "" } = data
	const { db, viewer } = ctx

	return await db.post
		.create({
			data: {
				id: nanoid(9),
				title,
				text,
				slug,
				excerpt: excerpt!,
				author: {
					connect: { id: viewer?.id },
				},
			},
		})
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to add post")
		})
}

export async function deletePost(_) {
	return true
}
