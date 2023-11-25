import { getCases } from '~/lib/sanity/sanity.client'

export async function GET(req: Request) {
  try {
    const cases = await getCases()
    return Response.json({ cases })
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to increment page`, {
      status: 500,
    })
  }
}
