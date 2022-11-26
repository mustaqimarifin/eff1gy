import { ApolloServer } from '@apollo/server'
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextApiRequest, NextApiResponse } from 'next'

import { Context, getViewer } from '~/graphql/context'
import { schema } from '~/graphql/schema'
import prisma from '~/lib/prisma'

const server = new ApolloServer<Context>({
  schema,
  plugins: [
    // Install a landing page plugin based on NODE_ENV
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
