'use client'

// ^ this file needs the "use client" pragma
import { ApolloLink, HttpLink } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'
import {
    ApolloNextAppProvider,
    NextSSRApolloClient,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

import { HELLSQL } from '~/graphql/constants'
import { StrictTypedTypePolicies } from '~/graphql/typeSlut'

const ssr = typeof window === 'undefined'
function makeClient() {
    const httpLink = new HttpLink({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri: HELLSQL,
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        //fetchOptions: { cache: 'no-store' },
        // you can override the default `fetchOptions` on a per query basis
        // via the `context` property on the options passed as a second argument
        // to an Apollo Client data fetching hook, e.g.:
        // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
    })
    const typePolicies: StrictTypedTypePolicies = {
        Query: {
            fields: {
                bookmarks: relayStylePagination(['filter']),
                questions: relayStylePagination(['filter']),
                stacks: relayStylePagination(),
            },
        },
        Comment: {
            keyFields: ['id'],
            fields: {
                id: {
                    merge: false,
                },
            },
        },
        Bookmark: {
            keyFields: ['id', 'url'],
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

    return new NextSSRApolloClient({
        // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
        cache: new NextSSRInMemoryCache({ typePolicies }),
        link: ssr
            ? ApolloLink.from([
                  // in a SSR environment, if you use multipart features like
                  // @defer, you need to decide how to handle these.
                  // This strips all interfaces with a `@defer` directive from your queries.
                  new SSRMultipartLink({
                      stripDefer: true,
                  }),
                  httpLink,
              ])
            : httpLink,
    })
}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    )
}
