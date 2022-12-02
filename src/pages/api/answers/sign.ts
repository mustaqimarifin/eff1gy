import { NextApiRequest, NextApiResponse } from 'next'

import cloudinary from '~/lib/cloudinary'

/* const {
  CLOUDINARY_UPLOAD_PRESET,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_BASE_PATH,
} = process.env */

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
    const data = signUploadRequest(timeNow, 'xyz')
    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).end()
  }
}

function signUploadRequest(timestamp: number, folder: string) {
  const signature = cloudinary.v2.utils.api_sign_request(
    {
      // Sign upload request with transformation to mp4 for cross-browser playing compatibility
      timestamp,
      upload_preset: 'musxyz',
      folder,
    },
    process.env.CLOUDINARY_API_SECRET
  )
  const data = { signature, folder, timestamp }

  return data
}
