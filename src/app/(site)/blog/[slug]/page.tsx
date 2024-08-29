import { notFound } from "next/navigation"
import { Suspense } from "react"

import Mdx from "~/app/mdxrsc"
import type { Post } from "~/components/Blogs/BlogDetail"
import { BlogDetail } from "~/components/Blogs/BlogDetail"

import { ViewType } from "~/gql/typeSlut"
import { HiddenCounter } from "~/lib/actions"
import { allPosts, getPost } from "~/lib/sanity/client"

export const revalidate = 3600

export async function generateStaticParams() {
	return allPosts.map(post => ({
		slug: post.slug,
	}))
}

interface BlogProps {
	params: {
		slug: string
	}
}
export default async function Blog(props: BlogProps) {
	const { slug } = props.params
	const post: Post = await getPost(slug)
	if (!post) {
		notFound()
	}
	return (
		<Suspense>
			<HiddenCounter refId={slug} type={ViewType.Blog} />
			<BlogDetail post={post} slug={slug}>
				<Mdx source={post?.content} />
			</BlogDetail>
		</Suspense>
	)
}
