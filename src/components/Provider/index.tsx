'use client'

import * as React from 'react'

import { ApolloWrapper } from './ApolloWrapper'

interface Props {
  children?: React.ReactNode
}

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
}

export const GlobalNavigationContext = React.createContext(
  globalNavigationContext
)

export function Providers({ children }: Props) {
  const initialState = {
    isOpen: false,
    setIsOpen,
  }

  const [state, setState] = React.useState(initialState)

  function setIsOpen(isOpen: boolean) {
    return setState({ ...state, isOpen })
  }

  return (
    <>
      <GlobalNavigationContext.Provider value={state}>
        <ApolloWrapper>{children}</ApolloWrapper>
      </GlobalNavigationContext.Provider>
    </>
  )
}
