import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client"
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support"
import { liveURL } from "~/graphql/constants"

export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
	return new ApolloClient({
		cache: new InMemoryCache(),
		link: new HttpLink({
			// fetchOptions: { cache: 'no-store' },
			// uri: HELLSQL,
			uri: liveURL,
		}),
	})
})
