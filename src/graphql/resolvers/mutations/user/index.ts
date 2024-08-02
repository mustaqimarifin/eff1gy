import { GraphQLError } from "graphql"

import type { EditUserMutationVariables } from "~/gql/gql"
import type { Context } from "~/graphql/context"
import { auth } from "~/lib/auth"
import { emailRX, nameRX } from "~/lib/functions"

export async function deleteUser(_: any, ctx: Context) {
	const session = await auth()

	const { db } = ctx

	if (session?.isAdmin) {
		throw new GraphQLError("Admins can’t be deleted")
	}

	await db.user.findUnique({ where: { id: session?.userId } })

	return await db.user
		.delete({
			where: { id: session?.userId },
		})
		.then(() => true)
}

export async function editUser(args: EditUserMutationVariables, ctx: Context) {
	const session = await auth()

	const { db } = ctx
	const { data } = args
	const { username, email } = data!

	if (username) {
		if (!nameRX(username)) {
			throw new GraphQLError("Usernames can be 16 characters long")
		}

		const user = await db.user.findUnique({
			where: { username },
		})

		if (user && user.id !== session?.userId) {
			throw new GraphQLError("That name is taken")
		}

		return await db.user.update({
			where: { id: session?.userId },
			data: { username },
		})
	}

	if (email) {
		if (!emailRX(email)) {
			throw new GraphQLError("That email is not valid")
		}

		const userByEmail = await db.user.findUnique({
			where: { email },
		})

		if (userByEmail && userByEmail.id !== session?.userId) {
			throw new GraphQLError("That email is taken")
		}

		// the user is updating their email to be the same thing
		if (userByEmail && userByEmail.id === session?.userId) {
			if (userByEmail.email === email) {
				return userByEmail
			}
		}

		return await db.user.update({
			where: { id: session?.userId },
			data: { pendingEmail: email },
		})
	}

	// if no email or username were passed, the user is trying to cancel the pending email request
	return await db.user.update({
		where: { id: session?.userId },
		data: { pendingEmail: null },
	})
}
