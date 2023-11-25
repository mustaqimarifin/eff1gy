import { type NextApiRequest, type NextApiResponse } from 'next'

import { cloudinaryKEY } from '~/graphql/constants'
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
  const signature = cloudinary.utils.api_sign_request(
    {
      format: 'mp4',
      timestamp,
      upload_preset: 'ml_default',
      folder,
    },
    cloudinaryKEY
  )

  return { signature, folder, timestamp }
}
