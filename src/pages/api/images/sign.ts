import { getSession } from '@auth0/nextjs-auth0'
import fetch from 'isomorphic-unfetch'
import { NextApiRequest, NextApiResponse } from 'next'

import { UserRole } from '~/graphql/types.generated'
import cloudinary from '~/lib/cloudinary/cloudinary'
import { prisma } from '~/lib/prisma'

function signUploadRequest(timestamp: number, folder: string) {
  const signature = cloudinary.v2.utils.api_sign_request(
    {
      timestamp,
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
      folder,
    },
    process.env.CLOUDINARY_API_SECRET as string
  )

  return { signature, folder, timestamp }
}
export default async (req: NextApiRequest, res: NextApiResponse) => {
  function isAuthenticated(req, res) {
    const session = getSession(req, res)
    return session?.user
  }

  async function getIsAdmin(req, res) {
    const user = isAuthenticated(req, res)
    if (!user) return false

    const viewer = await prisma.user.findUnique({
      where: { twitterId: user.sub },
    })

    return viewer.role === UserRole.Admin
  }

  const isAdmin = await getIsAdmin(req, res)
  if (!isAdmin) {
    return res.status(401).json('not allowed bitch')
  }
  try {
    const timeNow = new Date().getTime()
    const { signature, folder, timestamp } = signUploadRequest(
      timeNow,
      `${process.env.CLOUDINARY_BASE_PATH}`
    )
    return res.status(200).json({ folder, signature, timestamp })
  } catch (error) {
    return res.status(500).end()
  }
}
