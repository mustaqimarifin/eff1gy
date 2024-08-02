import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Twitter from "next-auth/providers/twitter"
import { PrismaAdapter } from "./db/prismaAdapter"

import type { Provider } from "next-auth/providers"
import { db } from "./db"
import { nanoid } from "./functions"

const providers: Provider[] = [
	GitHub({
		allowDangerousEmailAccountLinking: true,
	}),
	Google({
		allowDangerousEmailAccountLinking: true,
	}),
	Twitter,
]

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	adapter: PrismaAdapter(db) as any,
	providers,
	session: {
		generateSessionToken: () => `wHoDisB1Tch${nanoid()}`,
	},
	/*  secret: process.env.NEXTAUTH_SECRET,
  ...(process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
    ? {
        cookies: {
          sessionToken: {
            name: '__Secure-next-auth.session-token',
            options: {
              // The default would be the exact domain. We also want to allow passing
              // credentials with requests to the `graphcdn` subdomain, so we make
              // this cookie readable for all subdomains.
              // Note that this is only relevant for the production deployment. When
              // developing on localhost, no domain needs to be set.
              domain: `.${process.env.NEXTAUTH_URL}`,
              httpOnly: true,
              path: '/',
              sameSite: 'lax',
              secure: true,
            },
          },
        },
      }
    : {}), */
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
			session.isAdmin = user.isAdmin
			return session
		},
	},
})
