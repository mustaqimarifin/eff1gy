import { ApolloServer } from '@apollo/server'
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl'
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default'
import responseCachePlugin from '@apollo/server-plugin-response-cache'
import { KeyvAdapter } from '@apollo/utils.keyvadapter'
import { ErrorsAreMissesCache } from '@apollo/utils.keyvaluecache'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import KeyvRedis from '@keyv/redis'
import Keyv from 'keyv'
import { NextApiRequest, NextApiResponse } from 'next'

import { Context, getViewer } from '~/graphql/context'
import { schema } from '~/graphql/schema'
import { User } from '~/graphql/types.generated'
import prisma from '~/lib/prisma'

import { authOptions } from '../auth/[...nextauth]'

const faultTolerantCache = new Keyv({
  // store: new KeyvRedis(process.env.UPSTASH_URL),
  store: new KeyvRedis('redis://localhost:6379'),
})
export const redisCache = new ErrorsAreMissesCache(
  new KeyvAdapter(faultTolerantCache)
)
const server = new ApolloServer<Context>({
  schema,

  //cache: redisCache,
  plugins: [
    ApolloServerPluginCacheControl({
      // Cache everything for 1 second by default.
      defaultMaxAge: 0,
      // Don't send the `cache-control` response header.
      calculateHttpHeaders: 'if-cacheable',
    }),
    responseCachePlugin(),

    process.env.NODE_ENV === 'production'
      ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: 'my-graph-id@my-graph-variant',
          footer: false,
          embed: true,
        })
      : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
})

export default startServerAndCreateNextHandler(server, {
  context: async (req: NextApiRequest, res: NextApiResponse) => {
    const viewer: User = await getViewer(req, res)

    return {
      viewer,
      prisma,
    }
  },
})
