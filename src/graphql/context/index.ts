import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'
//import { getToken } from 'next-auth/jwt'
import { getServerSession } from 'next-auth/next'

import { prisma } from '~/lib/prisma'
import { authOptions, getSession } from '~/pages/api/auth/[...nextauth]'

import { User, UserRole } from '../typeSlut'

export async function getViewer(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions)
  //const token = await getToken({ req })
  const user = session?.user
  let viewer = null
  if (user) {
    viewer = await prisma.user.findUnique({ where: { id: session.userId } })
  } /*  if (token) {
    viewer = await prisma.user.findUnique({ where: { id: token.sub } })
  } */
  return viewer
    ? {
        ...viewer,
        isAdmin: viewer?.role === UserRole.Admin,
      }
    : null
}

export async function getContext(req: NextApiRequest, res: NextApiResponse) {
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
