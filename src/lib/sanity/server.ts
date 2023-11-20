/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import type { SanityClient } from 'next-sanity'
import { createClient } from 'next-sanity'

import { sanityConfig } from './config'

export const sanityClient = createClient(sanityConfig)

export const previewClient = createClient({
  ...sanityConfig,
})

export const getClient = (preview?: SanityClient) =>
  preview ? previewClient : sanityClient
