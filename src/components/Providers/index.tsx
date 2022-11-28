import { ApolloProvider } from '@apollo/client'
import { NextPageContext } from 'next'
import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { ThemeProvider } from 'next-themes'
import * as React from 'react'

import { useApollo } from '~/lib/apollo'

import ReactQuery from './ReactQuery'
import { SEO } from './SEO'
import { Toast } from './Toaster'

interface Props {
  children?: any
  session: Session
  pageProps: any
}

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => undefined,
}

export const GlobalNavigationContext = React.createContext(
  globalNavigationContext
)

export function Providers({ session, children, pageProps }: Props) {
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
      <ThemeProvider attribute="class">
        <ApolloProvider client={apolloClient}>
          <GlobalNavigationContext.Provider value={state}>
            <SessionProvider session={session}>
              <ReactQuery>{children}</ReactQuery>
            </SessionProvider>
          </GlobalNavigationContext.Provider>
        </ApolloProvider>
      </ThemeProvider>
    </>
  )
}
