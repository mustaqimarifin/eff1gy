import { type UploadApiResponse } from 'cloudinary'

type UploadSignatureMetadata = {
  timestamp: number
  folder: string
  signature: string
}

export const signUpload = async (): Promise<UploadSignatureMetadata> => {
  const response = await fetch(`/api/images/sign`, {
    method: 'POST',
  })
  if (!response.ok) throw new Error(response.statusText)

  return response.json()
}

export async function uploadToCloudinary(
  blob: Blob,
  folder: string,
  timestamp: string | Blob,
  signature: string
): Promise<UploadApiResponse> {
  const url = `https://api.cloudinary.com/v1_1/mstqmarfn/video/upload`
  const formData = new FormData()

  formData.append('file', blob)
  formData.append('folder', folder)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)
  formData.append('api_key', '742773636552889')
  formData.append('upload_preset', 'ml_default')
  // If recorded on Chrome which currently only supports .webm recording
  // This parameter will tell cloudinary to transform to mp4 for cross browser compatibility

  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  })

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}
