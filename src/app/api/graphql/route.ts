import { makeExecutableSchema } from '@graphql-tools/schema'
import { createYoga } from 'graphql-yoga'
import type { User } from 'next-auth'

import { getViewer } from '~/graphql/context'
import resolvers from '~/graphql/resolvers'
import typeDefs from '~/graphql/typeDefs'
import { prisma } from '~/lib/prisma'

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const { handleRequest } = createYoga<
  {
    req: Request
    res: Response
  },
  {
    viewer: User | null
  }
>({
  context: async ({ req, res }) => {
    const viewer = await getViewer(req, res)

    return {
      viewer,
      prisma,
    }
  },
  schema,
  graphqlEndpoint: '/api/graphql',
  fetchAPI: { Response },
})

export { handleRequest as GET, handleRequest as POST }
