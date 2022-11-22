import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { getSession } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'

import { Context, getViewer } from '~/graphql/context'
import { schema } from '~/graphql/schema'
import { UserRole } from '~/graphql/types.generated'
import prisma from '~/lib/prisma'

/* type ExampleContext = {
  req: NextApiRequest
  res: NextApiResponse
} */

const apolloServer = new ApolloServer<Context>({ schema })

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => {
    const viewer = await getViewer(req, res)

    return {
      viewer,
      prisma,
    }
  },
})
