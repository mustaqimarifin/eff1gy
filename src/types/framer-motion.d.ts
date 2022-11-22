import * as React from 'react'

declare module 'framer-motion' {
  export interface Props {
    id?: string
    inheritId?: boolean
    children?: React.ReactNode
  }
}
