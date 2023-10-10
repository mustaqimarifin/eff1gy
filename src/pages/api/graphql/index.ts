import { type NextApiRequest, type NextApiResponse } from 'next'
import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { getViewer, type Context } from '~/graphql/context'
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
