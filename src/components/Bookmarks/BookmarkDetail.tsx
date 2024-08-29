"use client"

import { LinkIcon } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"
import { useRef } from "react"

import dynamic from "next/dynamic"
import { PrimaryButton } from "~/components/Button"
import { MarkdownRenderer } from "../MarkdownRenderer"
import { BookmarkActions } from "./BookmarkActions"
import { RelatedBookmarks } from "./RelatedBookmarks"

import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import { Tags } from "~/components/Tag"
import { CommentType, useGetBookmarkQuery } from "~/gql/typeSlut"

export function BookmarkDetail({
	id,
}: {
	children?: ReactNode
	id: string
}) {
	const scrollContainerRef: React.RefObject<HTMLDivElement> = useRef(null)
	const titleRef: React.RefObject<HTMLHeadingElement> = useRef(null)
	const { data, error, loading } = useGetBookmarkQuery({
		variables: { id },
	})

	if (loading) {
		return <Detail.Loading />
	}

	if (!data?.bookmark || error) {
		return <Detail.Null />
	}

	const { bookmark } = data

	const Comments = dynamic(
		() => import("src/components/Comments").then(x => x.Comments),
		{
			ssr: false,
		},
	)

	return (
		<Detail.Container data-cy="bookmark-detail" ref={scrollContainerRef}>
			<TitleBar
				backButton
				globalMenu={false}
				backButtonHref="/bookmarks"
				magicTitle
				title={bookmark.title!}
				titleRef={titleRef!}
				scrollContainerRef={scrollContainerRef!}
				trailingAccessory={<BookmarkActions bookmark={bookmark} />}
			/>

			<Detail.ContentContainer>
				<Detail.Header>
					<Tags tags={bookmark?.tags} />
					<Link href={bookmark.url!} target="_blank" rel="noopener" className="block">
						<Detail.Title ref={titleRef}>{bookmark.title}</Detail.Title>
					</Link>
					<Link
						href={bookmark.url!}
						target="_blank"
						rel="noopener"
						className="text-tertiary flex items-center space-x-2 leading-snug"
					>
						{bookmark.faviconUrl && (
							<img
								src={bookmark.faviconUrl}
								alt={`Favicon for ${bookmark.host}`}
								className="h-4 w-4"
								width="16px"
								height="16px"
							/>
						)}
						<span>{bookmark?.host}</span>
					</Link>
					{bookmark?.description && (
						<MarkdownRenderer
							className="prose italic opacity-70"
							children={bookmark?.description}
							variant="comment"
						/>
					)}
				</Detail.Header>
				<div className="mt-6">
					<PrimaryButton
						size="large"
						href={bookmark.url}
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkIcon size={14} />
						<span>Visit</span>
					</PrimaryButton>
				</div>
			</Detail.ContentContainer>

			<RelatedBookmarks bookmark={bookmark} />
			<div className="py-6" />
			<Comments refId={bookmark.id} type={CommentType.Bookmark} />
		</Detail.Container>
	)
}
