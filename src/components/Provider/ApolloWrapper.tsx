"use client"

import { ApolloLink, HttpLink } from "@apollo/client"
//import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries"
import { relayStylePagination } from "@apollo/client/utilities"
import {
	ApolloClient,
	ApolloNextAppProvider,
	InMemoryCache,
	SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support"
//import { generatePersistedQueryIdsFromManifest } from "@apollo/persisted-query-lists"
import type { PropsWithChildren } from "react"
import { liveURL } from "~/graphql/constants"

/* const linkQ = createPersistedQueryLink(
	generatePersistedQueryIdsFromManifest({
		loadManifest: () => import("persisted-query-manifest.json"),
	}),
) */
// import { sha256 } from "crypto-hash";
/* import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'

const link = createPersistedQueryLink({
	// biome-ignore lint/complexity/useLiteralKeys: <explanation>
	generateHash: document => document['__meta__']['hash']
}) */
const ssr = typeof window === "undefined"

function makeClient() {
	const httpLink = new HttpLink({
		// this needs to be an absolute url, as relative urls cannot be used in SSR
		// uri: HELLSQL,
			uri: liveURL,
		// you can disable result caching here if you want to
		// (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
		// fetchOptions: { cache: 'no-store' },
		// you can override the default `fetchOptions` on a per query basis
		// via the `context` property on the options passed as a second argument
		// to an Apollo Client data fetching hook, e.g.:
		// const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
	})
	/* const olink = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true,
}).concat(httpLink) */
	const typePolicies = {
		Query: {
			fields: {
				bookmarks: relayStylePagination(["filter"]),
				questions: relayStylePagination(["filter"]),
				stacks: relayStylePagination(),
			},
		},
		Comment: {
			keyFields: ["id"],
			fields: {
				id: {
					merge: false,
				},
			},
		},
		Bookmark: {
			keyFields: ["id", "url"],
			fields: {
				id: {
					merge: false,
				},
				url: {
					merge: false,
				},
			},
		},
	}

	return new ApolloClient({
		cache: new InMemoryCache({ typePolicies }),
		link: ssr
			? ApolloLink.from([
					new SSRMultipartLink({
						stripDefer: true,
					}),
					httpLink,
				])
			: httpLink,
	})
}
export function ApolloWrapper({ children }: PropsWithChildren) {
	return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
