import { GraphQLError } from "graphql"

import type { AddPostMutationVariables, DeletePostMutationVariables, EditPostMutationVariables } from "~/gql/gql"
import type { Context } from "~/graphql/context"

export async function editPost(_: any, args: EditPostMutationVariables, ctx: Context) {
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
				excerpt,
				publishedAt:
					// as long as the current post isn't published, and the user is trying to hit publish
					// then it's save to publish. but if the post is _already_ published, we don't want
					// to override the publishedAt date
					!existing.publishedAt && published ? new Date() : existing.publishedAt ? existing.publishedAt : null,
			},
		})
		/*     .then((post) => {
      if (post.publishedAt) //graphcdn.purgeList('posts')
      return post
    }) */
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to edit post")
		})
}

export async function addPost(_: any, args: AddPostMutationVariables, ctx: Context) {
	const { data } = args
	const { title, text, slug, excerpt = "" } = data
	const { db, viewer } = ctx

	return await db.post
		.create({
			data: {
				title,
				text,
				slug,
				excerpt,
				author: {
					connect: { id: viewer?.id },
				},
			},
		})
		/*     .then((post) => {
      //graphcdn.purgeList('posts')
      return post
    }) */
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to add post")
		})
}

export async function deletePost(_: any) {
	return true
}
