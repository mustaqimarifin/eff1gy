import type { Post } from '~/components/Posts/PostDetail'
import { sanityFetch } from '~/lib/sanity/client'
import { postsQuery } from '~/lib/sanity/queries'

export async function GET() {
  try {
    const posts = await sanityFetch<Post[]>({
      query: postsQuery,
      tags: ['posts'],
    })
    return Response.json(posts)
  } catch (e) {
    console.log(`${e}`)
    return new Response(`Failed to get posts`, {
      status: 500,
    })
  }
}
