import { PrismaClient } from "@prisma/client";
import type { User } from "next-auth";

import { auth } from "~/lib/auth";
import { db } from "~/lib/db";
import { UserRole } from "../typeSlut";

export async function getViewer(req, res) {
	const session = await auth();
	const user = session?.user;
	let viewer = null;
	if (user) {
		viewer = await db.user.findUnique({ where: { id: session.userId } });
		//await db.select().from(users).where(eq(users.id, session.userId))
		return viewer
			? {
					...viewer,
					isAdmin: viewer?.role === UserRole.Admin,
			  }
			: null;
	}
}

export async function getContext(req, res) {
	const viewer = await getViewer(req, res);

	return {
		viewer,
		db,
	};
}

export type Context = {
	db: PrismaClient;
	viewer: User | null;
};
