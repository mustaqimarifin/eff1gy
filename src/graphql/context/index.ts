import type { PrismaClient } from "@prisma/client"
import type { User } from "~/gql/gql"

import { UserRole } from "~/gql/gql"
import { auth } from "~/lib/auth"
import { db } from "~/lib/db"

export async function getViewer(req, res) {
	const session = await auth()
	const user = session?.user
	let viewer
	if (user) {
		viewer = await db.user.findUnique({ where: { id: session.userId } })
		// await db.select().from(users).where(eq(users.id, session.userId))
		return viewer
			? {
					...viewer,
					isAdmin: viewer?.role === "ADMIN" && UserRole.Admin,
				}
			: null
	}
}

/* export async function getViewerD(req, res) {
  const session = await auth()
  //const user = session?.user
  let viewer = null
  if (session) {
    viewer = await dbz.select().from(user).where(eq(user.id, session.userId))

    return viewer
      ? {
          ...viewer,
          isAdmin: viewer?.role === UserRole.Admin,
        }
      : null
  }
}
 */
export interface Context {
	db: PrismaClient
	viewer?: User | null
	//session?: Session
}

/* export interface ContextD {
	dbz: DBZ
	viewer: User | null
}
 */
