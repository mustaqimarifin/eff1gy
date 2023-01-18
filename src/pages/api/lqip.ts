import got from 'got'
import { RedisKey } from 'ioredis'
import lqip from 'lqip-modern'
import { NextApiRequest, NextApiResponse } from 'next'

import { db } from '~/lib/redis/redis'
import { PreviewImage, PreviewImageMap } from '~/types/site'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET': {
      const url = req.query.url.toString()
      const result = await db.get(url)
      console.log(result)
      res.status(200).json({ url, result })

      return result
    }
    case 'POST':
      {
        const url = req.body
        const isExternal = url.startsWith('http')

        if (!isExternal) {
          const localimg = await lqip(url)
          const previewImage = {
            originalWidth: localimg.metadata.originalWidth,
            originalHeight: localimg.metadata.originalHeight,
            dataURIBase64: localimg.metadata.dataURIBase64,
          }
          db.set(url, previewImage)
          res.status(200).json(previewImage)
          console.log(previewImage)
        } else {
          const { body } = await got(url, { responseType: 'buffer' })
          const extresult = await lqip(body)

          const previewImage = {
            originalWidth: extresult.metadata.originalWidth,
            originalHeight: extresult.metadata.originalHeight,
            dataURIBase64: extresult.metadata.dataURIBase64,
          }
          db.set(url, previewImage)
          res.status(200).json(previewImage)
          console.log(previewImage)

          return previewImage
        }
      }

      return
  }
}
