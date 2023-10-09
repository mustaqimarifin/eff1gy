import { HttpLink } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr'

export const { getClient } = registerApolloClient(() => {
  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: 'http://localhost:3000/api/graphql',
      credentials: 'include',
    }),
  })
})
