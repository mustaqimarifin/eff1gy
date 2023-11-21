import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { makeExecutableSchema } from '@graphql-tools/schema'
import type { NextRequest } from 'next/server'

import { getViewer } from '~/graphql/context'
import resolvers from '~/graphql/resolvers'
import typeDefs from '~/graphql/typeDefs'
import { prisma } from '~/lib/prisma'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const server = new ApolloServer({
  schema,
})

const handleRequest = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req: NextRequest, res: Response) => {
    const viewer = await getViewer(req, res)
    return {
      viewer,
      prisma,
    }
  },
})

/* const { handleRequest } = createYoga<
  {
    req: Request
    res: Response
  },
  {
    session
  }
>({
  context: async ({ req, res }) => {
    const session = await getViewer(req, res)

    return {
      session,
      prisma,
    }
  },
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
})
 */
export { handleRequest as GET, handleRequest as POST }
