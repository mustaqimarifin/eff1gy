import { createClient, type QueryParams } from 'next-sanity'

export const projectId = '861c1zhj'
export const dataset = 'production'

export const apiVersion = '2023-05-03'

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
})

/* const query = encodeURI(
  `https://${projectId}.api.sanity.io/v2023-05-03/data/query/production?query=${indexQuery}`
)
 */

const DEFAULT_PARAMS = {} as QueryParams
const DEFAULT_TAGS = [] as string[]

export async function sanityFetch<QueryResponse>({
  query,
  params = DEFAULT_PARAMS,
  tags = DEFAULT_TAGS,
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    cache: 'default',
    next: {
      //revalidate: 30, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  })
}
