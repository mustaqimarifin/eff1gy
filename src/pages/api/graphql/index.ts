import { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from '@apollo/server'
import responseCachePlugin from '@apollo/server-plugin-response-cache'
import { ApolloServerPluginCacheControl } from '@apollo/server/plugin/cacheControl'
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default'
import { KeyvAdapter } from '@apollo/utils.keyvadapter'
import { ErrorsAreMissesCache } from '@apollo/utils.keyvaluecache'
//import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { Context, getViewer } from '~/graphql/context'
import { schema } from '~/graphql/schema'
import { prisma } from '~/lib/prisma'

const server = new ApolloServer<Context>({
  schema,
  /*   persistedQueries: {
    ttl: 900, // 15 minutes
  }, */
  plugins: [
    /* ApolloServerPluginCacheControl({
      // Cache everything for 1 second by default.
      defaultMaxAge: 5,
      // Don't send the `cache-control` response header.
      calculateHttpHeaders: 'if-cacheable',
    }),
    responseCachePlugin(), */
    //responseCachePlugin(),
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
    const viewer = await getViewer(req, res)

    return {
      viewer,
      prisma,
    }
  },
})
