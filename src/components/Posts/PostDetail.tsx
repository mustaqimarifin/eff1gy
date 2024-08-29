"use client"

import * as React from "react"

import { Comments } from "~/components/Comments"
import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import { useGetPostQuery } from "~/gql/typeSlut"
import type { Post } from "~/gql/typeSlut"
import { CommentType } from "~/gql/typeSlut"
import { realTime } from "~/lib/transformers"
import { MarkdownRenderer } from "../MarkdownRenderer"
import { PostActions } from "./PostActions"

interface PD {
	children?: React.ReactNode
	slug?: string
	post?: Post
}
export function PostDetail({ slug }: PD) {
	const scrollContainerRef = React.useRef(null)
	const titleRef = React.useRef(null)
	const { data, error, loading } = useGetPostQuery({ variables: { slug } })

	if (loading) return <Detail.Loading />
	if (!data?.post || error) return <Detail.Null />
	const publishedAt = realTime({ timestamp: data?.post.publishedAt })
	const { post } = data

	return (
		<Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
			<TitleBar
				backButton
				globalMenu={false}
				backButtonHref="/post"
				magicTitle
				title={post.title}
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				trailingAccessory={<PostActions post={post} />}
			/>

			<Detail.ContentContainer>
				<Detail.Header>
					<Detail.Title ref={titleRef}>{post.title}</Detail.Title>
					<span
						title={publishedAt.raw}
						className="text-tertiary inline-block leading-snug"
					>
						{publishedAt.formatted}
					</span>
				</Detail.Header>
				{/*     <div className="mt-8 xl:prose-lg lg:max-w-3xl">{children}</div> */}
				<MarkdownRenderer
					children={post.text}
					className="prose prose-neutral dark:prose-invert mt-8"
				/>
				<div className="py-6" />
				{/* bottom padding to give space between post content and comments */}
			</Detail.ContentContainer>
			<Comments refId={post.id} type={CommentType.Post} />
		</Detail.Container>
	)
}
