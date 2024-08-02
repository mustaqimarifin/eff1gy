import { makeExecutableSchema } from "@graphql-tools/schema"
//import { useAPQ } from "@graphql-yoga/plugin-apq"
import { createYoga } from "graphql-yoga"
import type { User } from "~/gql/gql"
import { getViewer } from "~/graphql/context"

import resolvers from "~/graphql/resolvers"
import typeDefs from "~/graphql/typeDefs"
import { db } from "~/lib/db"

//import { readFileSync } from 'node:fs'
//import { usePersistedOperations } from '@graphql-yoga/plugin-persisted-operations'
//import operations from '../../../../persisted-query-manifest.json'
//const operations = JSON.parse(readFileSync('../../../../persisted-query-manifest.json', 'utf-8'))

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
	schema,
	graphiql: true,
	//logging: 'debug',
	context: async ({ req, res }) => {
		const viewer = await getViewer(req, res)
		return {
			viewer,
			db,
		}
	},
	graphqlEndpoint: "/api/graphql",
	fetchAPI: { Response },
	plugins: [
		//useAPQ(),
		/*  usePersistedOperations({
      skipDocumentValidation: true,
      getPersistedOperation() {
        return operations.id
      },
    }), */
	],
})

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS }
