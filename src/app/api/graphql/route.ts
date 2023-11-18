import { ApolloServer } from '@apollo/server'
import { startServerAndCreateNextHandler } from '@as-integrations/next'
import { NextRequest, NextResponse } from 'next/server'

import { getViewer } from '~/graphql/context'
import { schema } from '~/graphql/schema'
import { prisma } from '~/lib/prisma'

const server = new ApolloServer({
  schema,
})

const hitler = startServerAndCreateNextHandler<NextRequest>(server, {
  context: async (req: NextRequest, res: NextResponse) => {
    const viewer = await getViewer(req, res)
    return {
      viewer,
      prisma,
    }
  },
})
export { hitler as GET, hitler as POST }
