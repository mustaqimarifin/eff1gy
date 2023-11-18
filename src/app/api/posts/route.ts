import { Post } from '~/components/Posts/BlogDetail'
import { indexQuery } from '~/lib/sanity/queries'
import { getClient, sanityClient } from '~/lib/sanity/server'
export async function GET() {
  try {
    const res = await getClient().fetch(indexQuery)

    //const data = await res

    return Response.json({ res })
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to get posts`, {
      status: 500,
    })
  }
}
