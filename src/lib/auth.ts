import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import Twitter from "next-auth/providers/twitter"

import type { Provider } from "next-auth/providers"
import { uid } from "uid"
import { db } from "./db"
import { PenisAdapter } from "./db/adapter"

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
	adapter: PenisAdapter(db) as any,
	providers,
	session: {
		generateSessionToken: () => `wHoDisB1Tch${uid(5)}`,
	},
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
