import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'
import { getToken } from 'next-auth/jwt'

//import { unstable_getServerSession } from 'next-auth/next'
import prisma from '~/lib/prisma'

//import { authOptions } from '~/pages/api/auth/[...nextauth]'
import { User, UserRole } from '../types.generated'
export async function getViewer(req, res) {
  /*   const session = await unstable_getServerSession(req, res, authOptions)
  const user = session?.user */

  const token = await getToken({ req })

  let viewer = null
  if (token) {
    viewer = await prisma.user.findUnique({ where: { id: token.sub } })
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
