import { GraphQLError } from "graphql"

import type {
	AddStackMutationVariables,
	DeleteStackMutationVariables,
	EditStackMutationVariables,
	ToggleStackUserMutationVariables,
} from "~/gql/typeSlut"
import type { Context } from "~/graphql/context"
import { slugify, urlRX } from "~/lib/functions"
// import { graphcdn } from "~/lib/graphcdn";

export async function editStack(_, args: EditStackMutationVariables, ctx: Context) {
	const { id, data } = args
	const { name, url, tag, description, image } = data
	const { db } = ctx

	if (!name || name.length === 0) throw new GraphQLError("Stack must have a name")
	if (!url || url.length === 0) throw new GraphQLError("Stack must have a URL")

	const old = await db.stack.findUnique({ where: { id } })

	if (old.image !== data.image) {
		try {
			const url = new URL(old.image)
			if (urlRX(url)) {
				const [, , imageId] = url.pathname.split("/")

				await fetch(
					`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1/${imageId}`,
					{
						method: "DELETE",
						headers: {
							Authorization: `Bearer ${process.env.CLOUDFLARE_IMAGES_KEY}`,
						},
					},
				)
			}
		} catch (err) {
			console.error({ err })
		}
	}

	await db.stack.update({
		relationLoadStrategy: "query",

		where: { id },
		data: {
			tags: {
				set: [],
			},
		},
	})

	const tags = tag
		? {
				connectOrCreate: {
					where: { name: tag },
					create: { name: tag },
				},
			}
		: undefined

	return await db.stack
		.update({
			relationLoadStrategy: "query",
			where: { id },
			data: {
				name,
				url,
				description,
				image,
				tags,
			},
			include: { tags: true },
		})
		/* .then((stack) => {
graphcdn.purgeList('stacks')
			return stack;
		}) */
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to edit stack")
		})
}

export async function addStack(_, args: AddStackMutationVariables, ctx: Context) {
	const { data } = args
	const { url, name, description, image, tag } = data
	const { db } = ctx

	if (!urlRX(url)) throw new GraphQLError("URL was invalid")

	const tags = tag
		? {
				connectOrCreate: {
					where: { name: tag },
					create: { name: tag },
				},
			}
		: undefined

	return await db.stack
		.create({
			relationLoadStrategy: "query",
			data: {
				name,
				url,
				description,
				image,
				tags,
				slug: slugify(name),
			},
			include: { tags: true },
		})
		/* 		.then((stack) => {
			graphcdn.purgeList('stacks')
			return stack;
		}) */
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to add stack")
		})
}

export async function deleteStack(_, args: DeleteStackMutationVariables, ctx: Context) {
	const { id } = args
	const { db } = ctx

	const old = await db.stack.findUnique({ where: { id } })

	try {
		const url = new URL(old.image)
		const [, , imageId] = url.pathname.split("/")
		if (urlRX(url)) {
			await fetch(
				`https://api.cloudflare.com/client/v4/accounts/${process.env.CLOUDFLARE_ACCOUNT_ID}/images/v1/${imageId}`,
				{
					method: "DELETE",
					headers: {
						Authorization: `Bearer ${process.env.CLOUDFLARE_IMAGES_KEY}`,
					},
				},
			)
		}
	} catch (err) {
		console.error({ err })
	}

	return await db.stack
		.delete({
			where: { id },
		})
		/* 		.then(() => {
			graphcdn.purgeList('stacks')
			return true;
		}) */
		.catch(err => {
			console.error({ err })
			throw new GraphQLError("Unable to delete stack")
		})
}

export async function toggleStackUser(_: any, args: ToggleStackUserMutationVariables, ctx: Context) {
	const { id } = args
	const { db, viewer } = ctx

	const stackUsers = await db.stack.findUnique({
		where: { id },
		include: { users: true },
	})

	if (stackUsers.users.find(s => s.id === viewer?.id)) {
		const data = await db.stack.update({
			relationLoadStrategy: "query",

			where: { id },
			data: {
				users: {
					disconnect: { id: viewer?.id },
				},
			},
			include: { users: true },
		})

		const usedBy = data.users
		const usedByViewer = viewer?.id && data.users.some(s => s.id === viewer?.id)

		return {
			...data,
			usedBy,
			usedByViewer,
		}
	}
	const data = await db.stack.update({
		relationLoadStrategy: "query",

		where: { id },
		data: {
			users: {
				connect: { id: viewer?.id },
			},
		},
		include: { users: true },
	})

	const usedBy = data.users
	const usedByViewer = viewer?.id && data.users.some(s => s.id === viewer?.id)

	return {
		...data,
		usedBy,
		usedByViewer,
	}
}
