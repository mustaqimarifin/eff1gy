import { notFound } from "next/navigation";
import { Suspense } from "react";

import Mdx from "~/app/mdxrsc";
import type { Post } from "~/components/Blogs/BlogDetail";
import { BlogDetail } from "~/components/Blogs/BlogDetail";

import { ViewType } from "~/graphql/typeSlut";
import { HiddenCounter } from "~/lib/actions";
import { allPosts, getAllPosts, getPost } from "~/lib/sanity/client";

//export const revalidate = 3600;

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slug,
	}));
}

export default async function Blog({ params: { slug } }) {
	const post: Post = await getPost(slug);
	if (!post) {
		notFound();
	}
	return (
		<Suspense>
			<HiddenCounter refId={post?.slug} type={ViewType.Blog} />
			<BlogDetail post={post} slug={slug}>
				<Mdx source={post?.content} />
			</BlogDetail>
		</Suspense>
	);
}
