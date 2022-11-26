import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import * as React from 'react'

const queryClient = new QueryClient()

export default function ReactQuery({ children }) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
