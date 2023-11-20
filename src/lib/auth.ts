import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth, { type NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'
import Twitter from 'next-auth/providers/twitter'

import { prisma } from './prisma'

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Twitter({
      clientId: process.env.TWITTER_ID,
      clientSecret: process.env.TWITTER_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
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
      return session
    },
  },
} satisfies NextAuthConfig

export const { handlers, auth, signIn, signOut } = NextAuth({
  ...authConfig,
})
