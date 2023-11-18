import { type Context } from '~/graphql/context'
import {
    type GetBlogQueryVariables,
    type GetBlogsQueryVariables,
} from '~/graphql/typeSlut'

export async function getBlogs(_, args: GetBlogsQueryVariables, ctx: Context) {
    const { prisma, viewer } = ctx

    return await prisma.blog.findMany({
        orderBy: { date: 'desc' },
        where: {
            date: viewer?.isAdmin ? { equals: null } : { not: null },
        },
        include: {
            _count: {
                select: {
                    reactions: true,
                },
            },
        },
    })
}

export async function getBlog(
    _,
    { slug }: GetBlogQueryVariables,
    ctx: Context
) {
    const { prisma, viewer } = ctx
    const [blogBySlug, blogById] = await Promise.all([
        prisma.blog.findUnique({
            where: { slug },
            include: {
                _count: {
                    select: {
                        reactions: true,
                    },
                },
            },
        }),
        prisma.blog.findUnique({
            where: { slug },
            include: {
                _count: {
                    select: {
                        reactions: true,
                    },
                },
            },
        }),
    ])

    const blog = blogBySlug || blogById

    if (!blog.date && !viewer?.isAdmin) {
        return null
    }

    return blog
}
