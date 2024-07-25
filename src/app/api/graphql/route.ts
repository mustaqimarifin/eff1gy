import { makeExecutableSchema } from "@graphql-tools/schema";
import { useAPQ } from "@graphql-yoga/plugin-apq";
import { createSchema, createYoga } from "graphql-yoga";
import type { User } from "next-auth";

import { getViewer } from "~/graphql/context";
import resolvers from "~/graphql/resolvers";
import typeDefs from "~/graphql/typeDefs";
import { db } from "~/lib/db";

const schemaDes = makeExecutableSchema({
	typeDefs,
	resolvers,
});

const { handleRequest } = createYoga<
	{
		req: Request;
		res: Response;
	},
	{
		viewer: User | null;
	}
>({
	schema: schemaDes,
	graphiql: true,
	//logging: 'debug',
	context: async ({ req, res }) => {
		const viewer = await getViewer(req, res);
		return {
			viewer,
			db,
		};
	},

	graphqlEndpoint: "/api/graphql",
	fetchAPI: { Response },
	plugins: [useAPQ()],
});

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS };
