import { UploadApiResponse } from 'cloudinary'

import { UploadSignatureMetadata } from '~/types/Upload'

export const signUpload = async (): Promise<UploadSignatureMetadata> => {
  const response = await fetch(`/api/images/sign`, {
    method: 'POST',
  })
  if (!response.ok) throw new Error(response.statusText)

  return response.json()
}

export async function uploadToCloudinary({ data }): Promise<UploadApiResponse> {
  const { file, signature, timestamp } = data
  const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`
  const formData = new FormData()

  formData.append('file', file)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)
  formData.append('api_key', process.env.CLOUDINARY_API_KEY)
  formData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET)
  // If recorded on Chrome which currently only supports .webm recording
  // This parameter will tell cloudinary to transform to mp4 for cross browser compatibility
  //formData.append('format', 'mp4')

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}
