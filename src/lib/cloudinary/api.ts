import { cloudinaryAPI, cloudinaryURL } from "~/graphql/constants"

export async function uploadToCloudinary(
	blob: Blob,
	folder: string,
	timestamp: string | Blob,
	signature: string,
) {
	const formData = new FormData()

	formData.append("file", blob)
	formData.append("folder", folder)
	formData.append("signature", signature)
	formData.append("timestamp", timestamp)
	formData.append("api_key", cloudinaryAPI!)
	formData.append("upload_preset", "ml_default")
	formData.append("format", "mp4")

	try {
		const res = await fetch(cloudinaryURL!, {
			method: "POST",
			body: formData,
		})
		return res.json()
	} catch {
		return null
	}
}
