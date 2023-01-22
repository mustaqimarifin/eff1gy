import { GraphQLError } from 'graphql'

import { Context } from '../context'

export function requiresUser(fn) {
  return function resolve(parent, args, context: Context) {
    if (context.viewer.id) return fn(parent, args, context)
    throw new GraphQLError('You must be signed in to do that.')
  }
}
