import { CommentType } from "~/gql/gql"
import type { Bookmark, QueryCommentArgs, QueryCommentsArgs } from "~/gql/gql"
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

/* 

    
    query: SELECT "t1"."id", "t1"."userId", "Comment_author"."__prisma_data__" AS "author" FROM "public"."Comment" AS "t1" LEFT JOIN LATERAL (SELECT JSONB_BUILD_OBJECT('id', "t2"."id", 'createdAt', "t2"."createdAt", 'name', "t2"."name", 'image', "t2"."image", 'email', "t2"."email", 'pendingEmail', "t2"."pendingEmail", 'role', "t2"."role", 'isAdmin', "t2"."isAdmin", 'emailVerified', "t2"."emailVerified", 'description', "t2"."description", 'location', "t2"."location", 'username', "t2"."username") AS "__prisma_data__" FROM "public"."User" AS "t2" WHERE "t1"."userId" = "t2"."id" LIMIT $1) AS "Comment_author" ON true WHERE ("t1"."id" = $2 AND 1=1) LIMIT $3 
    --params: [1,"MAn9A",1] */
