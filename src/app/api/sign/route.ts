import { cloudinaryKEY } from "~/graphql/constants";
import cloudinary from "~/lib/cloudinary";

async function signUploadRequest(timestamp: number, folder: string) {
	const signature = cloudinary.utils.api_sign_request(
		{
			format: "mp4",
			timestamp,
			upload_preset: "ml_default",
			folder,
		},
		cloudinaryKEY,
	);

	return { signature, folder, timestamp };
}

export async function POST(req: Request) {
	try {
		const timeNow = new Date().getTime();
		const { signature, folder, timestamp } = await signUploadRequest(timeNow, `xyz`);
		return Response.json({ folder, signature, timestamp });
	} catch (e) {
		console.log(`${e}`);
		return new Response(`Failed to upload`, {
			status: 500,
		});
	}
}
