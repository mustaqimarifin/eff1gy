import * as React from 'react'
import { NextPageContext } from 'next'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '~/lib/apollo'

import { SEO } from './SEO'
import { Toast } from './Toaster'

interface Props {
  children?: React.ReactNode
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

      <ApolloProvider client={apolloClient}>
        <GlobalNavigationContext.Provider value={state}>
          {children}
        </GlobalNavigationContext.Provider>
      </ApolloProvider>
    </>
  )
}
