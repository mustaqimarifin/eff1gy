import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import { NextPageContext } from 'next'
import * as React from 'react'

//import { User } from '~/graphql/types.generated'
import { useApollo } from '~/lib/apollo'

import { SEO } from './SEO'
import { Toast } from './Toaster'

interface Props {
  children?: any
  pageProps: NextPageContext
}

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
}

export const GlobalNavigationContext = React.createContext(
  globalNavigationContext
)

export function Providers({ children, pageProps }: Props) {
  const apolloClient = useApollo(pageProps)

  const initialState = {
    isOpen: false,
    setIsOpen,
  }

  const [state, setState] = React.useState(initialState)

  function setIsOpen(isOpen) {
    return setState({ ...state, isOpen })
  }

  return (
    <>
      <SEO />
      <Toast />
      <UserProvider>
        <ApolloProvider client={apolloClient}>
          <GlobalNavigationContext.Provider value={state}>
            {children}
          </GlobalNavigationContext.Provider>
        </ApolloProvider>
      </UserProvider>
    </>
  )
}
