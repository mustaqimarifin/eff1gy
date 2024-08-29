import type { PrismaClient } from "@prisma/client"
import type { User } from "next-auth"
import { UserRole } from "~/gql/typeSlut"

import { auth } from "~/lib/auth"
import { db } from "~/lib/db"

export async function getViewer(req, res) {
	const session = await auth()
	const user = session?.user
	let viewer
	if (user) {
		viewer = await db.user.findUnique({ where: { id: session.userId } })
		return viewer
			? {
					...viewer,
					isAdmin: viewer?.role === UserRole.Admin,
				}
			: null
	}
}

export async function getContext(req, res) {
	const viewer = await getViewer(req, res)

	return {
		viewer,
		db,
	}
}

export interface Context {
	db: PrismaClient
	viewer: User | null
}
