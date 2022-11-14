//import { UploadApiResponse } from 'cloudinary'
import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'

import { CLOUDFLARE_IMAGE_DELIVERY_BASE_URL } from '~/lib/cloudflare'
import { signUpload, uploadToCloudinary } from '~/lib/cloudinary/upload'
import { UploadSignatureMetadata } from '~/types/Upload'

import { ActiveDropzone } from './ActiveDropzone'

interface DropzoneProps {
  children: React.ReactNode
  onUploadStarted: () => void
  onUploadComplete: (url?: string) => void
  onUploadFailed: () => void
}
/* export const signUpload = async (): Promise<UploadSignatureMetadata> => {
  const response = await fetch(`/api/images/sign`, {
    method: 'POST',
  })
  if (!response.ok) throw new Error(response.statusText)

  return response.json()
} */
export function Dropzone(props: DropzoneProps) {
  const { children, onUploadComplete, onUploadStarted, onUploadFailed } = props
  const [loading, setLoading] = useState(false)

  /*   const getSignedUrl = async (): Promise<UploadSignatureMetadata> => {
    const data = await fetch('/api/images/sign').then((res) => res.json())
    return data?.uploadURL
  }

  async function uploadFile(
    file: Blob,
    folder: string | null,
    timestamp: string | Blob,
    signature: string
  ): Promise<UploadApiResponse> {
    const url = `https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`

    const data = new FormData()

    data.append('file', file)
    data.append('folder', folder)
    data.append('signature', signature)
    data.append('timestamp', timestamp)
    data.append('api_key', process.env.CLOUDINARY_API_KEY)
    data.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET)
    const response = await fetch(url, {
      method: 'POST',
      body: data,
    })

    if (!response.ok) {
      throw new Error('NO DICE!!')
    }

    return response.json()
  } */

  const onDropAccepted = React.useCallback(async (acceptedFiles: File[]) => {
    onUploadStarted()

    let data = acceptedFiles[0]
    const signedUrl = await signUpload()

    if (!signedUrl) {
      onUploadFailed()
      return console.error('No signed url')
    }
    const upload = await uploadToCloudinary({ data })
    if (!upload) {
      setLoading(false)
      return console.error('Upload failed')
    }

    const url = upload.secure_url
    return onUploadComplete(url)
  }, [])

  function onDropRejected() {
    alert('File rejected')
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDropAccepted,
    onDropRejected,
    noKeyboard: true,
    multiple: false,
    noClick: true,
    maxSize: 1000 * 1000 * 3, // 3mb
    accept: ['image/*'],

    /*     accept: {
      'image/*': ['.jpeg', '.png', '.webp', '.svg', '.gif'],
    }, */
  })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? <ActiveDropzone /> : children}
    </div>
  )
}
