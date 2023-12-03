'use server'
import { createClient } from 'next-sanity'

import type { CaseStudy, Post } from '~/components/Posts/PostDetail'

export const projectId = 'do33z8xq'
export const dataset = 'production'

// see https://www.sanity.io/docs/api-versioning for how versioning works
export const apiVersion = '2023-05-03'

export const useCdn = true

/* const query = encodeURI(
  `https://${projectId}.api.sanity.io/v2023-05-03/data/query/production?query=${indexQuery}`
)
 */

export const sanityConfig = {
  dataset,
  projectId,
  useCdn,
  apiVersion,
}
import {
  caseQuery,
  casesQuery,
  postQuery,
  postsQuery,
  type Settings,
  settingsQuery,
} from './queries'

const client = projectId ? createClient(sanityConfig) : null

export async function getSettings(): Promise<Settings> {
  if (client) {
    return (await client.fetch(settingsQuery)) || {}
  }
  return {}
}

export async function getPosts(): Promise<Post[]> {
  if (client) {
    return (await client.fetch(postsQuery)) || []
  }
  return []
}
export async function getCases(): Promise<CaseStudy[]> {
  if (client) {
    return (await client.fetch(casesQuery)) || []
  }
  return []
}

export async function getCase(slug: string): Promise<CaseStudy> {
  if (client) {
    return (await client.fetch(caseQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getPost(slug: string): Promise<Post> {
  if (client) {
    return (await client.fetch(postQuery, { slug })) || ({} as any)
  }
  return {} as any
}
