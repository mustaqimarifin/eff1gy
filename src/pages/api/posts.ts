import type { NextApiRequest, NextApiResponse } from "next"
import { type PostPageGroup } from "~/components/Posts/PostsList"
import { indexQuery } from "~/lib/sanity/queries"
import { sanityClient } from "~/lib/sanity/server"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const posts: PostPageGroup = await sanityClient.fetch(indexQuery)

  //const postcache = await fetch(key, () => posts, 60 * 60 * 24)

  return res.status(200).json(posts)
}
