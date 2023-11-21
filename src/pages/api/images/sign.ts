import { type NextApiRequest, type NextApiResponse } from 'next'

import { getViewer } from '~/graphql/context'
import { auth } from '~/lib/auth'
import cloudinary from '~/lib/cloudinary'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // if (req.method !== 'POST') {
  //   res.statusCode = 200
  //   return
  // }
  try {
    const viewer = await getViewer(req, res)
    if (!viewer.isAdmin) {
      return res.status(401).end()
    }
    const timeNow = new Date().getTime()
    const { signature, folder, timestamp } = await signUploadRequest(
      timeNow,
      `${process.env.CLOUDINARY_BASE_PATH}`
    )
    return res.status(200).json({ folder, signature, timestamp })
  } catch (error) {
    return res.status(500).end()
  }
}

async function signUploadRequest(timestamp: number, folder: string) {
  const signature = cloudinary.v2.utils.api_sign_request(
    {
      // Sign upload request with transformation to mp4 for cross-browser playing compatibility
      format: 'mp4',
      timestamp,
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
      folder,
    },
    process.env.CLOUDINARY_API_SECRET
  )

  return { signature, folder, timestamp }
}
