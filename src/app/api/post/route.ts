import { getAllPosts } from "~/lib/sanity/client";

export async function GET() {
	try {
		const posts = await getAllPosts();

		return Response.json(posts);
	} catch (e) {
		console.log(`${e}`);
		return new Response(`Failed to get posts`, {
			status: 500,
		});
	}
}
