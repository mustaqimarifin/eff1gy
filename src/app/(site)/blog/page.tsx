import type { Post } from "~/components/Blogs/BlogDetail";
import BlogList from "~/components/Blogs/BlogList";

import { getAllPosts } from "~/lib/sanity/client";

export const revalidate = 3600;
export default async function BlogIndex() {
	const posts: Post[] = await getAllPosts();
	return <BlogList posts={posts} />;
}
