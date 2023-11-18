import { type PrismaClient, Role } from '@prisma/client'
import { User } from 'next-auth'

import { auth } from '~/lib/auth'
import { prisma } from '~/lib/prisma'

export async function getViewer(req, res) {
  const session = await auth()
  const user = session?.user
  let viewer: User = null
  if (user) {
    viewer = await prisma.user.findUnique({ where: { id: session.userId } })

    return viewer
      ? {
          ...viewer,
          isAdmin: viewer?.role === Role.ADMIN,
        }
      : null
  }
}

export type Context = {
  prisma: PrismaClient
  viewer: User | null
}
