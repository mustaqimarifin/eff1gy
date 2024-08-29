import { type SanityClient, createClient } from "next-sanity"
import { revalidatePath, revalidateTag } from "next/cache"

import { cache } from "react"
import {
	caseQuery,
	casesQuery,
	lilQueries,
	lilQuery,
	lilSlugs,
	postQuery,
	postSlugs,
	postsQuery,
} from "./queries"

export const projectId = "do33z8xq"
export const dataset = "production"

export const apiVersion = "2023-05-03"

/* const query = encodeURI(
  `https://${projectId}.api.sanity.io/v2023-05-03/data/query/production?query=${indexQuery}`
)
 */

export interface Post {
	id: string
	slug: string
	name: string
	content: string
	title: string
	date: string
	excerpt: string
	coverImage: string
	caption?: string
	readingTime?: string
	tweets: any[]
	tags?: string[]
}

export interface LilBits {
	id: string
	slug: string
	name: string
	content: string
	title: string
	date: string
	caption: string
	overview: string
	coverImage: string
	orientation?: "landscape"
}

export function getClient(): SanityClient {
	const sanity = createClient({
		projectId,
		dataset,
		apiVersion,
		perspective: "published",
		useCdn: false,
		// studioUrl: '/studio',
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
/* export const fetcher = async ([query, params]) => {
	return sanity ? sanity.fetch(query, params) : [];
};
 */
export async function getPostSlugs(): Promise<Post[]> {
	if (sanity) {
		return (await sanity.fetch(postSlugs)) || []
	}
	return []
}

export async function getLilSlugs(): Promise<LilBits[]> {
	if (sanity) {
		return (await sanity.fetch(lilSlugs)) || []
	}
	return []
}
/* export async function getPostSlugs(): Promise<Post[]> {
  if (sanity) {
    return (await sanity.fetch(postSlugs)) || [];
  }
  return [];
}
 */

/* export async function getAllPosts(): Promise<Post[]> {
  if (sanity) {
    return (await sanity.fetch(postsQuery)) || [];
  }
  return [];
} */

export const getAllPosts = cache(async (): Promise<Post[]> => {
	if (sanity) {
		return (await sanity.fetch(postsQuery)) || []
	}
	revalidateTag("posts")
	return []
})

export const getAllBits = cache(async (): Promise<LilBits[]> => {
	if (sanity) {
		return (await sanity.fetch(lilQueries)) || []
	}
	revalidateTag("bits")
	return []
})
/* export async function getPost(slug: string) {
  if (sanity) {
    return (await sanity.fetch(postQuery, { slug })) || {};
  }
  return {};
} */
/* export const getVercelYouTubeSubs = cache(
  async () => {
    let response = await yt.channels.list({
      id: ['UCLq8gNoee7oXM7MvTdjyQvA'],
      part: ['statistics'],
    });

    let channel = response.data.items![0];
    return Number(channel?.statistics?.subscriberCount).toLocaleString();
  },
  ['vercel-youtube-subs'],
  {
    revalidate: 3600,
  }
);

 */

export const getPost = cache(async (slug: string) => {
	if (sanity) {
		return (await sanity.fetch(postQuery, { slug })) || {}
	}
	revalidatePath("/(site)/blog/[slug]", "page")
	return {}
})

export const getLilBit = cache(async (slug: string) => {
	if (sanity) {
		return (await sanity.fetch(lilQuery, { slug })) || {}
	}
	revalidatePath("/src/app/(site)/code/[slug]", "page")
	// revalidatePath("/(site)/code/[slug]", "page");
	return {}
})
export async function getAllCases() {
	if (sanity) {
		return (await sanity.fetch(casesQuery)) || []
	}
	return []
}

export async function getCase(slug) {
	if (sanity) {
		return (await sanity.fetch(caseQuery, { slug })) || {}
	}
	return {}
}

export const allPosts = await getAllPosts()
// console.log("allPosts:-", allPosts, 2);
// export const posts = allPosts.map((post) => pick(post, ["slug"]));
/// console.log("posts:-", posts);

export const allPostSlugs = await getPostSlugs()
// console.log("allPostSlugs:-", allPostSlugs);

export const allBits = await getAllBits()
// console.log("allBits:-", allBits, 2);
// export const lilbits = allBits.map((post) => pick(post, ["slug"]));
// console.log("lilBits:-", lilbits);

export const allLilSlugs = await getLilSlugs()
// console.log("allLilSlugs:-", allLilSlugs);
