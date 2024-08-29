"use client"

import type { ReactNode } from "react"
import { useRef } from "react"

import { useQuery } from "@apollo/client"
import { EyeIcon } from "lucide-react"
import dynamic from "next/dynamic"
import { type Blog, CommentType, GetBlogDocument, useGetBlogQuery } from "~/gql/typeSlut"
import { formatDate } from "~/lib/transformers"
import { Detail } from "../ListDetail/Detail"
import { TitleBar } from "../ListDetail/TitleBar"

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

export interface CaseStudy {
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

interface Props {
	children?: ReactNode
	post?: Post
	blog?: Blog
	slug?: string
}

function eye() {
	return <EyeIcon size={20} />
}
export function BlogDetail({ children, post, slug }: Props) {
	const scrollContainerRef = useRef(null)
	const titleRef = useRef(null)

	const { data, loading, error } = useGetBlogQuery({
		variables: { slug },
	})

	// if (error) return <div>failed to load</div>;
	// if (!post) return <div>loading...</div>;
	/*  useEffect(() => {
		async function fetchPost() {
			const response =  await fetch(`/api/post/${post.slug}`;
			const fetchedPost = await response.json();
			setPost(fetchedPost);
		}
		fetchPost();
	}, []); */
	if (loading) {
		return <Detail.Loading />
	}

	if (!data?.blog || error) {
		return <Detail.Null />
	}
	const { blog } = data
	const Comments = dynamic(
		() => import("src/components/Comments").then(x => x.Comments),
		{
			ssr: false,
		},
	)

	const PostAction = dynamic(() => import("./BlogAction").then(x => x.BlogAction), {
		ssr: false,
	})
	//  const publishedAt = realTime({ timestamp: post.publishedAt });
	// const publishedAt = realTime({ timestamp: post.date })

	return (
		<Detail.Container data-cy="blog-detail" ref={scrollContainerRef}>
			<TitleBar
				backButton
				globalMenu={false}
				backButtonHref="/blog"
				magicTitle
				title={post?.title}
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				trailingAccessory={<PostAction blog={blog} />}
			/>

			<Detail.ContentContainer>
				<Detail.Header>
					{/* 	<div className="flex items-center space-x-6">
							<div>
								<Detail.Title ref={titleRef}>{post?.title}</Detail.Title>
							</div>
						</div> */}
					<Detail.Title ref={titleRef}>{post?.title}</Detail.Title>
					<div
						title={post?.date}
						className="text-tertiary inline-block text-xs font-semibold leading-snug"
					>
						{`${formatDate(post?.date!)} • ${blog?.count} views`}
					</div>
				</Detail.Header>
				{/* <div className="mb-16 mt-2 flex w-full flex-col justify-between text-center font-semibold uppercase md:flex-row md:items-center">
						<div className="mt-2 flex content-center items-center gap-x-1 text-xs text-gray-600 md:mt-0 dark:text-gray-400">
							{formatDate(post?.date)}
							{` • `}
							{blog?.count}
						</div>
					</div> */}
				{children}
				<div className="py-6" />
				<Comments refId={blog?.id} type={CommentType.Blog} />
			</Detail.ContentContainer>
		</Detail.Container>
	)
}
