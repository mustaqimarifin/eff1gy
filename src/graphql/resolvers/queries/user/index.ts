import { Context } from '~/graphql/context'

export function getUser(_, args, ctx: Context) {
  const { id } = args
  const { prisma } = ctx

  return prisma.user.findUnique({ where: { id } })
}
