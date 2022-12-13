import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from '~/lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const catID = req.query.catID.toString()

    if (req.method === 'POST') {
      const sexySHOTS = await prisma.pageView.upsert({
        where: { catID },
        create: {
          catID,
        },
        update: {
          viewCount: {
            increment: 1,
          },
        },
      })

      return res.status(200).json({
        total: sexySHOTS.viewCount,
      })
    }

    if (req.method === 'GET') {
      const views = await prisma.pageView.findUnique({
        where: {
          catID,
        },
      })

      return res.status(200).json({ total: views.viewCount - 1 })
    }
  } catch (e) {
    return res.status(500).json({ message: e.message })
  }
}
