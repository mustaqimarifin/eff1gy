import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { type NextAuthConfig } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Twitter from "next-auth/providers/twitter";

import { gitID, gitKEY, googleID, googleKEY, twitterID, twitterKEY } from "~/graphql/constants";

import { db } from "./db";

export const authConfig = {
	adapter: PrismaAdapter(db),
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
	  secret: process.env.NEXTAUTH_SECRET,
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
    : {}),
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.role = user.role;
				token.sub = user.id;
			}

			return token;
		},
		async session({ session, user }) {
			session.user.role = user.role;
			session.userId = user.id;
			session.isAdmin = user.isAdmin;
			return session;
		},
	},
} satisfies NextAuthConfig;

export const { handlers, auth } = NextAuth({ ...authConfig });
