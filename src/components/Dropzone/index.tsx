import type { ReactNode } from "react"
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

// import { CLOUDFLARE_IMAGE_DELIVERY_BASE_URL } from '~/lib/cloudinary'
import { ActiveDropzone } from "./ActiveDropzone"

interface DropzoneProps {
	children: ReactNode
	onUploadStarted: () => void
	onUploadComplete: (url?: string) => void
	onUploadFailed: () => void
}

/* export const signUP = async (): Promise<UploadSignatureMetadata> => {
  const data = await fetch('/api/answers/sign').then((res) => res.json())
  return data
} */

export async function upCloud(file: File) {
	// const { signature, folder, timestamp } = await signUpload()
	const url = `https://api.cloudinary.com/v1_1/mstqmarfn/image/upload`
	const formData = new FormData()
	formData.append("file", file)
	// formData.append('folder', folder)
	// formData.append('signature', signature)
	// formData.append('timestamp', timestamp)
	// formData.append('api_key', '742773636552889')
	formData.append("upload_preset", "ml_default")
	// If recorded on Chrome which currently only supports .webm recording
	// This parameter will tell cloudinary to transform to mp4 for cross browser compatibility

	const res = await fetch(url, {
		method: "POST",
		body: formData,
	})
	return res.json()
}

export function Dropzone(props: DropzoneProps) {
	const { children, onUploadComplete, onUploadStarted, onUploadFailed } = props

	/*   async function getdata() {
    const data = await fetch('/api/images/sign').then((res) => res.json())
    return data?.uploadURL
  } */

	/*   async function uploadFile({ file, data }) {
    const data = new FormData()
    data.append('file', file)
    const upload = await fetch(data, {
      method: 'POST',
      body: data,
    }).then((r) => r.json())
    return upload?.result?.id
  } */

	const onDropAccepted = useCallback(
		async (acceptedFiles: File[]) => {
			onUploadStarted()

			const file = acceptedFiles[0]
			// const data = await signUP()

			if (!file) {
				onUploadFailed()
				return console.error("No signed url")
			}
			const res = await upCloud(file)
			const url = res.secure_url
			// const url = `https://res.cloudinary.com/mstqmarfn/image/upload/v${version}/${public_id}.${format}`
			return onUploadComplete(url)
		},
		[onUploadComplete, onUploadFailed, onUploadStarted],
	)

	function onDropRejected() {
		alert("File rejected")
	}

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDropAccepted,
		onDropRejected,
		noKeyboard: true,
		multiple: false,
		noClick: true,
		maxSize: 1000 * 1000 * 3, // 3mb
		accept: {
			"image/*": [],
		},
	})

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			{isDragActive ? <ActiveDropzone /> : children}
		</div>
	)
}
