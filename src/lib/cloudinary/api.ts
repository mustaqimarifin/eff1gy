import type { UploadApiOptions } from 'cloudinary'
import { type UploadApiResponse } from 'cloudinary'
import { responsePathAsArray } from 'graphql'

import { cloudinaryAPI, cloudinaryURL } from '~/graphql/constants'

type UploadSignatureMetadata = {
  timestamp: number
  folder: string
  signature: string
}

export const signUpload = async (): Promise<UploadSignatureMetadata> => {
  const response = await fetch(`/api/images/sign`, {
    method: 'POST',
  })

  return response.json()
}

export async function uploadToCloudinary(
  blob: Blob,
  folder: string,
  timestamp: string | Blob,
  signature: string
): Promise<UploadApiResponse> {
  const formData = new FormData()

  formData.append('file', blob)
  formData.append('folder', folder)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)
  formData.append('api_key', cloudinaryAPI)
  formData.append('upload_preset', 'ml_default')
  formData.append('format', 'mp4')

  try {
    const res = await fetch(cloudinaryURL, {
      method: 'POST',
      body: formData,
    })
    return res.json()
  } catch {
    return null
  }
}
