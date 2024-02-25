import { makeExecutableSchema } from "@graphql-tools/schema";
import { useAPQ } from "@graphql-yoga/plugin-apq";
import { createYoga } from "graphql-yoga";
import type { User } from "next-auth";

import { getViewer } from "~/graphql/context";
import resolvers from "~/graphql/resolvers";
import typeDefs from "~/graphql/typeDefs";
import { db } from "~/lib/db";

const schema = makeExecutableSchema({
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
	graphiql: false,
	context: async ({ req, res }) => {
		const viewer = await getViewer(req, res);

		return {
			viewer,
			db,
		};
	},
	schema,
	graphqlEndpoint: "/api/graphql",
	fetchAPI: { Response },
	plugins: [useAPQ()],
});

export { handleRequest as GET, handleRequest as POST };
