import type { Context } from "~/graphql/context"
import Mutation from "~/graphql/resolvers/mutations"
import Query from "~/graphql/resolvers/queries"
import { getCommentAuthor } from "~/graphql/resolvers/queries/comments"
import { getQuestionAuthor } from "~/graphql/resolvers/queries/questions"
import { DateQL, JSOD } from "../scalars"

import { QuestionStatus, UserRole } from "~/gql/typeSlut"
const resolvers = {
	Date: DateQL,
	JSON: JSOD,
	Query,
	Mutation,
	Reactable: {
		__resolveType(obj: { reactableType: any }) {
			switch (obj.reactableType) {
				case "question":
					return "Question"
				case "case":
					return "Case"
				case "event":
					return "Event"
				case "stack":
					return "Stack"
				case "post":
					return "Post"
				case "blog":
					return "Blog"
				case "bookmark":
					return "Bookmark"
				default:
					return null
			}
		},
	},
	Comment: {
		author: getCommentAuthor,
		viewerCanEdit: ({ userId }, _, { viewer }: Context) => {
			return userId === viewer?.id
		},
		viewerCanDelete: ({ userId }, _, { viewer }: Context) => {
			return userId === viewer?.id || viewer?.isAdmin
		},
	},
	Question: {
		viewerCanEdit: ({ userId }, _, { viewer }: Context) => {
			return userId === viewer?.id || viewer?.isAdmin
		},
		viewerCanComment: async ({ id }, _, ctx: Context) => {
			const { viewer, db } = ctx
			if (viewer?.isAdmin) return true
			const comments = await db.question
				.findUnique({
					where: { id },
				})
				.comments()
			return comments?.length! > 0
		},
		author: getQuestionAuthor,
		status: ({ _count: { comments } }) => (comments > 0 ? QuestionStatus.Answered : QuestionStatus.Pending),
		viewerHasReacted: async ({ id }, _, { viewer, db }: Context) => {
			if (!viewer) return false

			const reactions = await db.question
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.some(({ userId }) => userId === viewer.id)
		},
		reactionCount: async ({ id, _count }, _, { db }: Context) => {
			if (_count?.reactions) return _count.reactions

			const reactions = await db.question
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.length
		},
	},
	User: {
		isViewer: ({ id }, _, { viewer }: Context) => {
			return viewer && viewer.id === id
		},
		isAdmin: ({ role }) => {
			return role === UserRole.Admin
		},
		email: ({ id }, _, { viewer }: Context) => {
			return viewer && viewer.id === id ? viewer.email : null
		},
		pendingEmail: ({ id }, _, { viewer }: Context) => {
			return viewer && viewer.id === id ? viewer.pendingEmail : null
		},
	},
	Bookmark: {
		viewerHasReacted: async ({ id }, _, { viewer, db }: Context) => {
			if (!viewer) return false

			const reactions = await db.bookmark
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.some(({ userId }) => userId === viewer.id)
		},
		reactionCount: async ({ id, _count }, _, { db }: Context) => {
			if (_count?.reactions) return _count.reactions

			const reactions = await db.bookmark
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.length
		},
	},
	Post: {
		viewerHasReacted: async ({ id }, _, { viewer, db }: Context) => {
			if (!viewer) return false

			const reactions = await db.post
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.some(({ userId }) => userId === viewer.id)
		},
		reactionCount: async ({ id, _count }, _, { db }: Context) => {
			if (_count?.reactions) return _count.reactions

			const reactions = await db.post
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.length
		},
	},
	Blog: {
		viewerHasReacted: async ({ id }, _, { viewer, db }: Context) => {
			if (!viewer) return false

			const reactions = await db.blog
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.some(({ userId }) => userId === viewer.id)
		},
		reactionCount: async ({ id, _count }, _, { db }: Context) => {
			if (_count?.reactions) return _count.reactions

			const reactions = await db.blog
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.length
		},
	},
	Case: {
		viewerHasReacted: async ({ id }, _, { viewer, db }: Context) => {
			if (!viewer) return false

			const reactions = await db.case
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.some(({ userId }) => userId === viewer.id)
		},
		reactionCount: async ({ id, _count }, _, { db }: Context) => {
			if (_count?.reactions) return _count.reactions

			const reactions = await db.case
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.length
		},
	},
	Stack: {
		viewerHasReacted: async ({ id }, _, { viewer, db }: Context) => {
			if (!viewer) return false

			const reactions = await db.stack
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.some(({ userId }) => userId === viewer.id)
		},
		reactionCount: async ({ id, _count }, _, { db }: Context) => {
			if (_count?.reactions) return _count.reactions

			const reactions = await db.stack
				.findUnique({
					where: { id },
				})
				.reactions()

			return reactions?.length
		},
		usedBy: async ({ id, users }, _, ctx: Context) => {
			const { db } = ctx
			if (users) return users

			const data = await db.stack.findUnique({
				where: { id },
				include: {
					users: true,
				},
			})

			return data?.users || []
		},
		usedByViewer: async ({ id, users }, _, ctx: Context) => {
			const { db, viewer } = ctx
			if (!viewer?.id) return false
			if (users) return users.some((s: { id: string }) => s.id === viewer.id)

			const data = await db.stack.findUnique({
				where: { id },
				include: {
					users: true,
				},
			})

			return data?.users.some(s => s.id === viewer.id)
		},
	},
}

export default resolvers
