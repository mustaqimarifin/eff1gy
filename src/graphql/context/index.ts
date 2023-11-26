import { type PrismaClient } from '@prisma/client'
import type { User } from 'next-auth'

import { auth } from '~/lib/auth'
import { prisma } from '~/lib/prisma'

import { UserRole } from '../typeSlut'

export async function getViewer(req, res) {
  const session = await auth()
  const user = session?.user
  let viewer = null
  if (user) {
    viewer = await prisma.user.findUnique({ where: { id: session.userId } })

    return viewer
      ? {
          ...viewer,
          isAdmin: viewer?.role === UserRole.Admin,
        }
      : null
  }
}

export async function getContext(req, res) {
  const viewer = await getViewer(req, res)

  return {
    viewer,
    prisma,
  }
}

export type Context = {
  prisma: PrismaClient
  viewer: User | null
}
