"use client";

import { LinkIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useRef } from "react";

import { PrimaryButton } from "~/components/Button";

import { Detail } from "~/components/ListDetail/Detail";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import { Tags } from "~/components/Tag";
import { CommentType, GetBookmarkQuery, useGetBookmarkQuery } from "~/graphql/typeSlut";

import dynamic from "next/dynamic";
import { MarkdownRenderer } from "../MarkdownRenderer";
import { BookmarkActions } from "./BookmarkActions";
import { RelatedBookmarks } from "./RelatedBookmarks";

export function BookmarkDetail({
	children,
	id,
}: {
	children: ReactNode;
	id: string;
}) {
	const scrollContainerRef: React.RefObject<HTMLDivElement> = useRef(null);
	const titleRef: React.RefObject<HTMLHeadingElement> = useRef(null);
	const { data, loading, error } = useGetBookmarkQuery({
		variables: { id },
	});

	if (loading) {
		return <Detail.Loading />;
	}

	if (!data?.bookmark || error) {
		return <Detail.Null />;
	}

	const { bookmark } = data;

	const Comments = dynamic(() => import("src/components/Comments").then((x) => x.Comments), {
		ssr: false,
	});

	return (
		<>
			<Detail.Container data-cy="bookmark-detail" ref={scrollContainerRef}>
				<TitleBar
					backButton
					globalMenu={false}
					backButtonHref={"/bookmarks"}
					magicTitle
					title={bookmark.title}
					titleRef={titleRef}
					scrollContainerRef={scrollContainerRef}
					trailingAccessory={<BookmarkActions bookmark={bookmark} />}
				/>

				<Detail.ContentContainer>
					<Detail.Header>
						<Tags tags={bookmark.tags} />
						<Link href={bookmark.url} target="_blank" rel="noopener" className="block">
							<Detail.Title ref={titleRef}>{bookmark.title}</Detail.Title>
						</Link>
						<Link
							href={bookmark.url}
							target="_blank"
							rel="noopener"
							className="flex items-center space-x-2 leading-snug text-tertiary"
						>
							{bookmark.faviconUrl && (
								<img
									src={bookmark.faviconUrl}
									alt={`Favicon for ${bookmark.host}`}
									className="w-4 h-4"
									width="16px"
									height="16px"
								/>
							)}
							<span>{bookmark.host}</span>
						</Link>
						{bookmark.description && (
							<MarkdownRenderer className="italic prose opacity-70" children={bookmark.description} variant="comment" />
						)}
					</Detail.Header>
					<div className="mt-6">
						<PrimaryButton size="large" href={bookmark.url} target="_blank" rel="noopener noreferrer">
							<LinkIcon size={14} />
							<span>Visit</span>
						</PrimaryButton>
					</div>
				</Detail.ContentContainer>

				<RelatedBookmarks bookmark={bookmark} />
				<div className="py-6" />
				<Comments refId={bookmark.id} type={CommentType.Bookmark} />
			</Detail.Container>
		</>
	);
}
