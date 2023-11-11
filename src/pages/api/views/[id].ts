import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id = req?.query?.id?.toString()

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.pageView.upsert({
        where: { id },
        create: {
          id,
        },
        update: {
          viewCount: {
            increment: 1,
          },
        },
      })

      return res.status(200).json({
        total: newOrUpdatedViews.viewCount.toString(),
      })
    }

    if (req.method === 'GET') {
      const views = await prisma.pageView.findUnique({
        where: {
          id,
        },
      })

      return res
        .status(200)
        .json({ total: views?.viewCount.toString() || null })
    }
  } catch (e) {
    return res.status(500).json({ message: e })
  }
}
