import type { SanityClient } from 'next-sanity'
import { createClient, type QueryParams } from 'next-sanity'

import { type Post } from '~/components/Posts/PostDetail'

import { caseQuery, casesQuery, postQuery, postsQuery } from './queries'

export const projectId = 'do33z8xq'
export const dataset = 'production'

export const apiVersion = '2023-05-03'

/* const query = encodeURI(
  `https://${projectId}.api.sanity.io/v2023-05-03/data/query/production?query=${indexQuery}`
)
 */

export function getClient(): SanityClient {
  const sanity = createClient({
    projectId,
    dataset,
    apiVersion,
    perspective: 'published',
    useCdn: false,
    studioUrl: '/studio',
  })
  return sanity
}

export const getImg = () => getClient()
const sanity = getClient()
/**
 * Checks if it's safe to create a sanity instance, as `@sanity/sanity` will throw an error if `projectId` is false
 */
/* const sanity = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn, studioUrl })
  : null;
 */
export const fetcher = async ([query, params]) => {
  return sanity ? sanity.fetch(query, params) : []
}

export async function getAllPosts() {
  if (sanity) {
    return (await sanity.fetch(postsQuery)) || []
  }
  return []
}

export async function getPost(slug: Post['slug']) {
  if (sanity) {
    return (await sanity.fetch(postQuery, { slug })) || {}
  }
  return {}
}

export async function getAllCases() {
  if (sanity) {
    const slugs = (await sanity.fetch(casesQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getCase(slug) {
  if (sanity) {
    return (await sanity.fetch(caseQuery, { slug })) || {}
  }
  return {}
}
