import type { NextApiRequest, NextApiResponse } from 'next'
import { type PostPageGroup } from '~/components/Posts/PostsList'
import { designIndexQuery, indexQuery } from '~/lib/sanity/queries'
import { getAllCaseStudy } from '~/lib/sanity/sanity.client'
import { sanityClient } from '~/lib/sanity/server'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const casestudies = await sanityClient.fetch(designIndexQuery)

  //const postcache = await fetch(key, () => posts, 60 * 60 * 24)

  return res.status(200).json(casestudies)
}
