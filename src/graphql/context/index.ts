import { PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { getToken } from 'next-auth/jwt'
import { getSession, useSession } from 'next-auth/react'

import prisma from '~/lib/prisma'

import { User, UserRole } from '../types.generated'

//const { data: session } = useSession({ required: false })

export async function getViewer(req, res) {
  const session = await getSession({ req })

  const user = session?.user
  let viewer = null
  if (user) {
    viewer = await prisma.user.findUnique({ where: { id: session.userId } })
  }

  return viewer
    ? {
        ...viewer,
        isAdmin: viewer?.role === UserRole.Admin,
      }
    : null
}

export async function getContext(req, res) {
  const viewer = await getViewer(req, res)

  return {
    viewer,
    prisma,
  }
}

export default async function context(ctx: { req: any; res: any }) {
  return await getContext(ctx.req, ctx.res)
}

export type Context = {
  prisma: PrismaClient
  viewer: User | null
}
