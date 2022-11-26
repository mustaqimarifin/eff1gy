import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextApiRequest, NextApiResponse } from 'next'

import { Context, getViewer } from '~/graphql/context'
import { schema } from '~/graphql/schema'
import prisma from '~/lib/prisma'

const apolloServer = new ApolloServer<Context>({ schema })

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req: NextApiRequest, res: NextApiResponse) => {
    const viewer = await getViewer(req, res)

    return {
      viewer,
      prisma,
    }
  },
})
