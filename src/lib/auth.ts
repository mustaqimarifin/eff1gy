import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { type NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Twitter from 'next-auth/providers/twitter'

import {
  gitID,
  gitKEY,
  googleID,
  googleKEY,
  twitterID,
  twitterKEY,
} from '~/graphql/constants'

import { prisma } from './prisma'

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Twitter({
      clientId: twitterID,
      clientSecret: twitterKEY,
    }),
    GitHub({
      clientId: gitID,
      clientSecret: gitKEY,
    }),
    Google({
      clientId: googleID,
      clientSecret: googleKEY,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
        token.sub = user.id
      }

      return token
    },
    async session({ session, user }) {
      session.user.role = user.role
      session.userId = user.id
      session.user.isAdmin = user.isAdmin
      return session
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth } = NextAuth({ ...authConfig })
