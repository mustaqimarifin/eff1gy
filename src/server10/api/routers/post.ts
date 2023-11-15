import { TRPCError } from '@trpc/server'
import { z } from 'zod'

import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'

export const postRouter = createTRPCRouter({
  getBySlug: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      return await ctx.prisma.pageView
        .findUnique({
          where: { id: input.id },
          select: {
            id: true,
            comments: {
              orderBy: {
                createdAt: 'desc',
              },
              select: {
                id: true,
                slug: true,
                text: true,
                parentId: true,
                createdAt: true,
                author: {
                  select: {
                    id: true,
                    name: true,
                    image: true,
                  },
                },
                _count: { select: { likes: true } },
              },
            },
          },
        })
        .then(async (post) => {
          const likes = await ctx.prisma.like.findMany({
            where: {
              userId: ctx.viewer.id,
              commentId: {
                in: post?.comments.map((comment: { id: any }) => comment?.id),
              },
            },
          })

          return {
            ...post,
            comments: post?.comments.map(
              (comment: { [x: string]: any; id?: any; _count?: any }) => {
                const { _count, ...commentFields } = comment
                return {
                  ...commentFields,
                  likedByMe: !!likes.find(
                    (like) =>
                      like.commentId === comment.id &&
                      like.userId === ctx.viewer.id
                  ),
                  likeCount: _count.likes,
                }
              }
            ),
          }
        })
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany()
  }),

  addComment: protectedProcedure
    .input(
      z.object({
        slug: z.string(),
        parentId: z.string().optional(),
        text: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.comment
        .create({
          data: {
            slug: input.slug,
            text: input.text,
            parentId: input.parentId,
            userId: ctx.viewer.id,
          },
        })
        .then((comment) => {
          return {
            ...comment,
            likeCount: 0,
            likedByMe: false,
          }
        })
    }),
  updateComment: protectedProcedure
    .input(
      z.object({
        commentId: z.string(),
        text: z.string(),
        slug: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res = await ctx.prisma.comment.findUnique({
        where: { id: input.commentId },
        select: { userId: true },
      })

      if (res?.userId !== ctx.viewer.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'You do not have permission to update this comment',
        })
      }

      return await ctx.prisma.comment.update({
        where: {
          id: input.commentId,
        },
        data: {
          text: input.text,
        },
      })
    }),
  deleteComment: protectedProcedure
    .input(
      z.object({
        commentId: z.string(),
        slug: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res = await ctx.prisma.comment.findUnique({
        where: { id: input.commentId },
        select: { userId: true },
      })
      if (res?.userId !== ctx.viewer.id) {
        throw new TRPCError({
          code: 'UNAUTHORIZED',
          message: 'You do not have permission to delete this comment',
        })
      }

      return await ctx.prisma.comment.delete({
        where: {
          id: input.commentId,
        },
      })
    }),
  toggleLike: protectedProcedure
    .input(
      z.object({
        commentId: z.string(),
        slug: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const res = await ctx.prisma.comment.findUnique({
        where: { id: input.commentId },
        select: { userId: true },
      })
      const like = await ctx.prisma.like.findUnique({
        where: {
          userId_commentId: {
            commentId: input.commentId,
            userId: ctx.viewer.id,
          },
        },
      })

      if (like === null) {
        return await ctx.prisma.like
          .create({
            data: {
              commentId: input.commentId,
              userId: ctx.viewer.id,
            },
          })
          .then(() => {
            return { addLike: true }
          })
      } else {
        return await ctx.prisma.like
          .delete({
            where: {
              userId_commentId: {
                commentId: input.commentId,
                userId: ctx.viewer.id,
              },
            },
          })
          .then(() => {
            return { addLike: false }
          })
      }
    }),
})
