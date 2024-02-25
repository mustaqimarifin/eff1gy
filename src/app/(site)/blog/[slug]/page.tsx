
import { Suspense } from "react";

import Mdx from "~/app/mdxrsc";
import type { Post } from "~/components/Blogs/BlogDetail";
import { BlogDetail } from "~/components/Blogs/BlogDetail";

import { ViewType } from "~/graphql/typeSlut";
import { HiddenCounter } from "~/lib/actions";
import { getAllPosts, getPost } from "~/lib/sanity/client";
//xport const dynamic = 'force-dynamic'

//export const revalidate = 3600;

export async function generateStaticParams () {
	const posts = await getAllPosts();

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function Blog ({ params: { slug } }) {

	/* const { data } = await client.query({query: GetBlogDocument})
	const { blog } = data
	
		await Promise.allSettled([
			client.query({ query: GET_VIEWER }),
			client.query({
				query: GET_COMMENTS,
				variables: { refId: blog?.id, type: CommentType.Blog },
				context: { fetchOptions: { cache: 'no-store' } },
			}),
		]) */
	const post: Post = await getPost(slug);

	if (!post) {
		return { notFound: true };
	}

	/* 	const Comments = dynamic(
		() => import('src/components/Comments').then((x) => x.Comments),
		{
			ssr: false,
		}
	)  */

	/*   const tags = post.tags?.length
		? post.tags
				.slice(0)
				.map((tag: any, index: any) => <div key={index}>{`#${tag}`}</div>)
		: null
 */
	return (

		<Suspense>
			<HiddenCounter refId={ post?.slug } type={ ViewType.Blog } />
			<BlogDetail post={ post } slug={ slug }>
				<Mdx source={ post?.content } />
			</BlogDetail>
		</Suspense>


	);
}
