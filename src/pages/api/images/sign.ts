import { getSession } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

import { UserRole } from '~/graphql/types.generated'
import cloudinary from '~/lib/cloudinary'
import prisma from '~/lib/prisma'

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
    return res.status(401).json({ uploadURL: null })
  }

  try {
    const uploadURL = cloudinary.v2.utils.api_sign_request(
      {
        // Sign upload request with transformation to mp4 for cross-browser playing compatibility
        timestamp: new Date().getTime(),
        upload_preset: 'ml_default',
        folder: 'xyz',
      },
      process.env.CLOUDINARY_API_SECRET as string
    )

    return res.status(200).json({ uploadURL })
  } catch (error) {
    return res.status(500).end()
  }
}
