//import isEqual from 'lodash/isEqual'
//import { isEqual } from 'lodash-es'
import { useMemo } from 'react'
import {
  ApolloClient,
  ApolloLink,
  Context,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
  ServerError,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { createPersistedQueryLink } from '@apollo/client/link/persisted-queries'
import { SchemaLink } from '@apollo/client/link/schema'
import { relayStylePagination } from '@apollo/client/utilities'
import { APOLLO_STATE_PROP_NAME, GRAPHQL_ENDPOINT } from '~/graphql/constants'
import { schema } from '~/graphql/schema'
import { StrictTypedTypePolicies } from '~/graphql/typeSlut'
import { sha256 } from 'crypto-hash'
import deepMerge from 'deepmerge'
import isEqual from 'lodash-es/isEqual'
import toast from 'react-hot-toast'

//import { deepmergeArray } from '../functions'

let apolloClient: ApolloClient<NormalizedCacheObject>
export const ssrMode = typeof window === 'undefined'

function createIsomorphLink({ context }: Context) {
  if (ssrMode) {
    return new SchemaLink({ schema, context })
  } else {
    return new HttpLink({
      uri: GRAPHQL_ENDPOINT || '/api/graphql',
      credentials: 'include',
    })
  }
}
/* function createIsomorphLink({ context }: Context) {
  if (ssrMode) {
    return new SchemaLink({ schema, context })
  } else {
    return LinkChain
  }
}
const LinkChain = createPersistedQueryLink({
  sha256,
  useGETForHashedQueries: true,
}).concat(
  new HttpLink({
    uri: GRAPHQL_ENDPOINT || '/api/graphql',
    credentials: 'include',
    useGETForQueries: true,
  })
) */

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message }) => {
      try {
        toast.error(message, {
          icon: '👹',
        })
      } catch {
        console.error({ message })
      }
    })
  }

  if (networkError) {
    const err = networkError as ServerError
    try {
      toast.error('error', {
        icon: '👹',
      })
    } catch {
      console.error({ err })
    }
  }
})

export function createClient({ initialState, context = {} }) {
  const link = ApolloLink.from([errorLink, createIsomorphLink({ context })])
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
  const cache = new InMemoryCache({ typePolicies }).restore(initialState)

  return new ApolloClient({
    ssrMode,
    link,
    cache,
    ssrForceFetchDelay: 1000,
  })
}

export function initApolloClient({ initialState = null, context = {} }) {
  const _apolloClient = apolloClient ?? createClient({ initialState, context })
  if (initialState) {
    const existingCache = _apolloClient.extract()

    //const merge = require('@fastify/deepmerge')({ mergeArray: deepmergeArray })
    const data = deepMerge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    _apolloClient.cache.restore(data)
  }

  if (typeof window === 'undefined') return _apolloClient
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: { props: any }
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
  }

  return pageProps
}

export function useApollo(pageProps) {
  const initialState = pageProps[APOLLO_STATE_PROP_NAME]
  const store = useMemo(
    () => initApolloClient({ initialState }),
    [initialState]
  )
  return store
}
