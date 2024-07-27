import { GraphQLError } from "graphql"

import type { MutationEditUserArgs } from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"
import { emailRX, nameRX } from "~/lib/functions"

export async function deleteUser(_, __, ctx: Context) {
	const { db, viewer } = ctx

	if (viewer?.isAdmin) {
		throw new GraphQLError("Admins can’t be deleted")
	}

	await db.user.findUnique({ where: { id: viewer?.id } })

	return await db.user
		.delete({
			where: { id: viewer?.id },
		})
		.then(() => true)
}

export async function editUser(_, args: MutationEditUserArgs, ctx: Context) {
	const { db, viewer } = ctx
	const { data } = args
	const { username, email } = data!

	if (username) {
		if (!nameRX(username)) {
			throw new GraphQLError("Usernames can be 16 characters long")
		}

		const user = await db.user.findUnique({
			where: { username },
		})

		if (user && user.id !== viewer?.id) {
			throw new GraphQLError("That name is taken")
		}

		return await db.user.update({
			where: { id: viewer?.id },
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

		if (userByEmail && userByEmail.id !== viewer?.id) {
			throw new GraphQLError("That email is taken")
		}

		// the user is updating their email to be the same thing
		if (userByEmail && userByEmail.id === viewer?.id) {
			if (userByEmail.email === email) {
				return userByEmail
			}
		}

		return await db.user.update({
			where: { id: viewer?.id },
			data: { pendingEmail: email },
		})
	}

	// if no email or username were passed, the user is trying to cancel the pending email request
	return await db.user.update({
		where: { id: viewer?.id },
		data: { pendingEmail: null },
	})
}
