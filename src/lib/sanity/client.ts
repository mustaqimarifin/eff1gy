import type { SanityClient } from "next-sanity";
import { type QueryParams, createClient } from "next-sanity";

import { caseQuery, casesQuery, lilQueries, lilQuery, lilSlugs, postQuery, postSlugs, postsQuery } from "./queries";
import { cache } from "react";

export const projectId = "do33z8xq";
export const dataset = "production";

export const apiVersion = "2023-05-03";

/* const query = encodeURI(
  `https://${projectId}.api.sanity.io/v2023-05-03/data/query/production?query=${indexQuery}`
)
 */

export type Post = {
	id: string;
	slug: string;
	name: string;
	content: string;
	title: string;
	date: string;
	excerpt: string;
	coverImage: string;
	caption?: string;
	readingTime?: string;
	tweets: any[];
	tags?: string[];
};

export type LilBits = {
	id: string;
	slug: string;
	name: string;
	content: string;
	title: string;
	date: string;
	caption: string;
	overview: string;
	coverImage: string;
	orientation?: "landscape";
};

export function getClient(): SanityClient {
	const sanity = createClient({
		projectId,
		dataset,
		apiVersion,
		perspective: "published",
		useCdn: false,
		// studioUrl: '/studio',
	});
	return sanity;
}

export const getImg = () => getClient();
const sanity = getClient();
/**
 * Checks if it's safe to create a sanity instance, as `@sanity/sanity` will throw an error if `projectId` is false
 */
/* const sanity = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn, studioUrl })
  : null;
 */
export const fetcher = async ([query, params]) => {
	return sanity ? sanity.fetch(query, params) : [];
};

export const getPostSlugs = async (): Promise<Post[]> => {
	if (sanity) {
		return (await sanity.fetch(postSlugs)) || [];
	}
	return [];
};

export const getLilSlugs = async (): Promise<LilBits[]> => {
	if (sanity) {
		return (await sanity.fetch(lilSlugs)) || [];
	}
	return [];
};
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
export const getAllPosts = async (): Promise<Post[]> => {
	if (sanity) {
		return (await sanity.fetch(postsQuery)) || [];
	}
	return [];
};

export const getAllBits = async (): Promise<LilBits[]> => {
	if (sanity) {
		return (await sanity.fetch(lilQueries)) || [];
	}
	return [];
};
/* export async function getPost(slug: string) {
  if (sanity) {
    return (await sanity.fetch(postQuery, { slug })) || {};
  }
  return {};
} */
export const getPost = cache(async (slug: string) => {
	if (sanity) {
		return (await sanity.fetch(postQuery, { slug })) || {};
	}
	return {};
});

export const getLilBit = cache(async (slug: string) => {
	if (sanity) {
		return (await sanity.fetch(lilQuery, { slug })) || {};
	}
	return {};
});
export async function getAllCases() {
	if (sanity) {
		return (await sanity.fetch(casesQuery)) || [];
	}
	return [];
}

export async function getCase(slug) {
	if (sanity) {
		return (await sanity.fetch(caseQuery, { slug })) || {};
	}
	return {};
}

export const allPosts = await getAllPosts();
//console.log("allPosts:-", allPosts, 2);
//export const posts = allPosts.map((post) => pick(post, ["slug"]));
///console.log("posts:-", posts);

export const allPostSlugs = await getPostSlugs();
//console.log("allPostSlugs:-", allPostSlugs);

export const allBits = await getAllBits();
//console.log("allBits:-", allBits, 2);
//export const lilbits = allBits.map((post) => pick(post, ["slug"]));
//console.log("lilBits:-", lilbits);

export const allLilSlugs = await getLilSlugs();
//console.log("allLilSlugs:-", allLilSlugs);
