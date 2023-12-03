import { getPosts } from '~/lib/sanity/server'
export async function GET() {
  try {
    const res = await getPosts()

    return Response.json({ res })
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to get posts`, {
      status: 500,
    })
  }
}
