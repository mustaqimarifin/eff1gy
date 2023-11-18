import { designIndexQuery } from '~/lib/sanity/queries'
import { getClient, sanityClient } from '~/lib/sanity/server'

export async function GET(req: Request) {
    try {
        const cases = await getClient().fetch(designIndexQuery)
        return Response.json({ cases })
    } catch (e) {
        console.log(`${e}`)
        return new Response(`Failed to increment page`, {
            status: 500,
        })
    }
}
