import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

import { HELLSQL } from "~/graphql/constants";

export const { getClient } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			//fetchOptions: { cache: 'no-store' },
			uri: HELLSQL,
			//uri: "http://localhost:3000/api/graphql"
		}),
	});
});

export const client = getClient()