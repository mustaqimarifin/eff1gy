import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '~/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString()

    if (req.method === 'POST') {
      const sexySHOTS = await prisma.pageView.upsert({
        where: { slug },
        create: {
          slug,
        },
        update: {
          viewCount: {
            increment: 1,
          },
        },
      })

      return res.status(200).json({
        total: sexySHOTS.viewCount.toString(),
      })
    }

    if (req.method === 'GET') {
      const views = await prisma.pageView.findUnique({
        where: {
          slug,
        },
      })

      return res.status(200).json({ total: views.viewCount.toString() })
    }
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
