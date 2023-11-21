/* eslint-disable @typescript-eslint/no-empty-interface */
import type { User as PrismaUser, UserRole } from '@prisma/client'
import NextAuth, { type DefaultSession, Session } from 'next-auth'

declare module 'next-auth' {
  /**
   * Returned by `useViewerQuery`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** HOKAGE */
      id: string
      role: UserRole
      isAdmin: boolean
    } & DefaultSession['user']
    userId: string
  }

  interface User extends PrismaUser {}
}
