import type { CaseStudy } from '~/components/Posts/PostDetail'
import { sanityFetch } from '~/lib/sanity/client'
import { casesQuery } from '~/lib/sanity/queries'

export async function GET() {
  try {
    const cases = await sanityFetch<CaseStudy[]>({
      query: casesQuery,
      tags: ['case-study'],
    })

    return Response.json(cases)
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to get posts`, {
      status: 500,
    })
  }
}
