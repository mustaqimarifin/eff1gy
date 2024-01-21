import { type Context } from '~/graphql/context'

export async function getTags(_, __, ctx: Context) {
  const { prisma } = ctx

  try {
    return await prisma.tag.findMany({
      relationLoadStrategy: 'join',
      orderBy: { name: 'desc' },
    })
  } catch (e) {
    return []
  }
}
