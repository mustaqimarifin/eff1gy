import BlogList from "~/components/Blogs/BlogList"
import { allPosts } from "~/lib/sanity/client"

export const revalidate = 3600
export default async function BlogIndex() {
	return <BlogList posts={allPosts} />
}
