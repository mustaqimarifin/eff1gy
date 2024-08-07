import { TrashIcon, UploadIcon } from "lucide-react"
import Image from "next/image"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

import { LoadingSpinner } from "~/components/LoadingSpinner"

// import { url } from '~/lib/cloudinary/api'

export function StackImageUploader({ stack, onImageUploaded }) {
	const [loading, setLoading] = useState(false)
	const [initialImage, setInitialImage] = useState(stack?.image)
	const [previewImage, setPreviewImage] = useState(null)

	async function getSignedUrl() {
		const data = await fetch("/api/sign").then(res => res.json())
		return data?.uploadURL
	}

	async function uploadFile({ file, signedUrl }) {
		const data = new FormData()
		data.append("file", file)
		const upload = await fetch(signedUrl, {
			method: "POST",
			body: data,
		}).then(r => r.json())
		return upload?.result?.id
	}

	const onDrop = useCallback(async (acceptedFiles: any[]) => {
		setLoading(true)
		const file = acceptedFiles[0]
		const signedUrl = await getSignedUrl()
		if (!signedUrl) {
			setLoading(false)
			return console.error("No signed url")
		}
		const id = await uploadFile({ file, signedUrl })
		if (!id) {
			setLoading(false)
			return console.error("Upload failed")
		}
		setLoading(false)
		// setPreviewImage(url)
		// return onImageUploaded(url)
	}, [])

	const { getRootProps, getInputProps } = useDropzone({
		onDrop,
		maxSize: 1000 * 1000, // 1mb,
		accept: {
			"image/*": [],
		},
		/*     accept: {
      'image/*': ['.jpeg', '.png', '.webp', '.svg', '.gif'],
    }, */
		multiple: false,
	})

	if (initialImage || previewImage) {
		return (
			<div className="relative inline-block h-24 w-24 rounded-lg border border-gray-100 dark:border-gray-900">
				<Image
					src={initialImage || previewImage}
					width="96"
					height="96"
					quality={100}
					className="inline-block rounded-lg"
					alt={stack.name}
				/>
				<button
					onClick={() => {
						setInitialImage(false)
						setPreviewImage(null)
						onImageUploaded(null)
					}}
					className="absolute -right-3 -top-3 cursor-pointer rounded-full border-2 border-white bg-gray-900 p-2 text-white shadow-md hover:bg-red-500 focus:bg-red-500 dark:border-gray-800 dark:bg-gray-700"
				>
					<TrashIcon />
				</button>
			</div>
		)
	}

	return (
		<div
			{...getRootProps()}
			className="text-tertiary flex h-24 w-24 cursor-pointer items-center justify-center rounded-md border border-dashed border-gray-200 bg-gray-100 p-6 hover:bg-gray-150 dark:border-gray-700 dark:bg-gray-800 dark:hover:border-gray-600 dark:hover:bg-gray-800"
		>
			<input {...getInputProps()} />
			{loading ? <LoadingSpinner /> : <UploadIcon />}
		</div>
	)
}
