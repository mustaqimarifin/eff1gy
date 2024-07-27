import type { User as PrismaUser, UserRole } from "@prisma/client"
import type { DefaultSession } from "next-auth"

declare module "next-auth" {
	interface Session {
		user: {
			/**
			 * Returned by `useViewerQuery`, `getSession` and received as a prop on the `SessionProvider` React Context
			 */
			id: string
			username?: string
			isAdmin?: boolean
			role: UserRole
		} & DefaultSession["user"]
		userId: string
		isAdmin: boolean
	}

	interface User extends PrismaUser {}
}
