import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '~/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const pageId = req.query.id.toString()

    if (req.method === 'POST') {
      const sexySHOTS = await prisma.pageView.upsert({
        where: { id: pageId },
        create: {
          pageId,
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
          id: pageId,
        },
      })

      return res.status(200).json({ total: views.viewCount.toString() })
    }
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
