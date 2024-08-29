import { GraphQLError } from "graphql"

import type { Context } from "../context"

export function requiresAdmin(fn) {
	return function resolve(parent, args, context: Context) {
		if (context?.viewer?.isAdmin) {
			return fn(parent, args, context)
		}

		throw new GraphQLError("You can’t do that!")
	}
}
