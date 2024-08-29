import { GraphQLError } from "graphql"
import { nanoid } from "nanoid"

import { Nuts } from "~/components/Provider/Toaster"
import {
	CommentType,
	type MutationAddCommentArgs,
	type MutationDeleteCommentArgs,
	type MutationEditCommentArgs,
} from "~/gql/typeSlut"
import { CLIENT_URL } from "~/graphql/constants"
import type { Context } from "~/graphql/context"

export async function editComment(_: any, args: MutationEditCommentArgs, ctx: Context) {
	const { id, text } = args
	const { db, viewer } = ctx

	if (!text || text.length === 0) throw new GraphQLError("Comment can’t be blank")

	const comment = await db.comment.findUnique({
		where: { id },
	})

	if (!comment) throw new GraphQLError("Comment doesn’t exist")

	if (comment.userId !== viewer?.id) {
		throw new GraphQLError("You can’t edit this comment")
	}

	return await db.comment
		.update({
			where: { id },
			data: { text },
		})
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to edit comment")
		})
}

export async function addComment(_: any, args: MutationAddCommentArgs, ctx: Context) {
	const { refId, type, text, parentId } = args
	const { viewer, db } = ctx

	const trimmedText = text.trim()

	if (trimmedText.length === 0) throw new GraphQLError("Comments can’t be blank")

	let field: string
	let table: string
	let route: string
	switch (type) {
		case CommentType.Bookmark: {
			field = "bookmarkId"
			table = "bookmark"
			route = `${CLIENT_URL}/bookmarks/${refId}`
			break
		}
		case CommentType.Blog: {
			field = "blogId"
			table = "blog"
			route = `${CLIENT_URL}/blog/${refId}`
			break
		}
		case CommentType.Post: {
			field = "postId"
			table = "post"
			route = `${CLIENT_URL}/post/${refId}`
			break
		}
		case CommentType.Question: {
			field = "questionId"
			table = "question"
			route = `${CLIENT_URL}/ama/${refId}`
			break
		}
		case CommentType.Stack: {
			field = "stackId"
			table = "stack"
			route = `${CLIENT_URL}/stack/${refId}`
			break
		}
		default: {
			throw new GraphQLError("Invalid comment type")
		}
	}

	const parentObject = await db[table].findUnique({
		where: { id: refId },
	})

	if (!parentObject) {
		throw new GraphQLError("Commenting on something that doesn’t exist")
	}

	const [comment] = await Promise.all([
		db.comment.create({
			data: {
				id: nanoid(9),
				text,
				parentId,
				userId: viewer?.id,
				[field]: refId,
			},
		}),
		db[table].update({
			where: {
				id: refId,
			},
			data: {
				updatedAt: new Date(),
			},
		}),
	]).catch(err => {
		console.error({ err })
		throw new GraphQLError("Unable to add comment")
	})
	return comment

	/* const comment = await db.comment.create({
    data: {
      id: nanoid(9),
      text,
      parentId,
      userId: viewer?.id,
      [field]: refId,
    },
  })
  return comment */
}
export async function deleteComment(_: any, args: MutationDeleteCommentArgs, ctx: Context) {
	const { id } = args
	const { db, viewer } = ctx

	const comment = await db.comment.findUnique({
		where: { id },
	})
	if (!comment) return true
	if (comment.userId !== viewer?.id && !viewer?.isAdmin) {
		throw new GraphQLError("You can’t delete this comment")
	}
	;(_err: any) => {
		Nuts.error("You can’t delete this comment", {
			icon: "🙀",
		})
	}
	return await db.comment
		.delete({
			where: { id },
		})
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to delete comment")
		})
}
