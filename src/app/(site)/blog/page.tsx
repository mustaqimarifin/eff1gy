import Link from "next/link";
import type { Post } from "~/components/Blogs/BlogDetail";
import BlogList from "~/components/Blogs/BlogList";
import { PostsList } from "~/components/Blogs/PostsList";
import { ListDetailView } from "~/components/Layouts";
import { client } from "~/components/Provider/ApolloClient";
import { GetBlogsDocument, type GetBlogsQuery } from "~/graphql/typeSlut";
import { getAllPosts } from "~/lib/sanity/client";

//export const revalidate = 3600;
export default async function BlogIndex() {
const posts:Post[] = await getAllPosts()
	return <BlogList posts={posts}/>
	
}
