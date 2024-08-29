import { type Bookmark, CommentType, type QueryCommentArgs, type QueryCommentsArgs } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"

export async function getComment(_: any, args: QueryCommentArgs, ctx: Context) {
	const { id } = args
	const { db } = ctx

	return await db.comment.findUnique({ where: { id } })
}

export async function getCommentAuthor(parent: Bookmark, _: any, ctx: Context) {
	const { id } = parent
	const { db } = ctx

	return await db.comment.findUnique({ where: { id } }).author()
}

export async function getComments(_: any, args: QueryCommentsArgs, ctx: Context) {
	const { refId, type } = args
	const { db } = ctx

	if (!refId || !type) {
		return []
	}

	switch (type) {
		case CommentType.Bookmark: {
			const results = await db.bookmark.findUnique({ where: { id: refId } }).comments()

			return results || []
		}
		case CommentType.Blog: {
			const results = await db.blog.findUnique({ where: { id: refId } }).comments()

			return results || []
		}
		case CommentType.Post: {
			const results = await db.post.findUnique({ where: { id: refId } }).comments()

			return results || []
		}
		case CommentType.Question: {
			const results = await db.question.findUnique({ where: { id: refId } }).comments()

			return results || []
		}
		case CommentType.Stack: {
			const results = await db.stack.findUnique({ where: { id: refId } }).comments()

			return results || []
		}
		default: {
			return []
		}
	}
}
