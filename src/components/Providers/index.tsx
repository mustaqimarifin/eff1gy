import * as React from 'react'
import { type NextPageContext } from 'next'
import { ApolloProvider } from '@apollo/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useApollo } from '~/lib/apollo'
import { ThemeProvider } from 'next-themes'

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
  const queryClient = new QueryClient()

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
        <QueryClientProvider client={queryClient}>
          <GlobalNavigationContext.Provider value={state}>
            <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
          </GlobalNavigationContext.Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  )
}
