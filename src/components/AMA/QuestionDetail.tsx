"use client"
import Link from "next/link"
import { useRef } from "react"

import { Avatar } from "~/components/Avatar"
import { Comments } from "~/components/Comments"
import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import AudioPlayer from "../AudioPlayer"
import { MarkdownRenderer } from "../MarkdownRenderer"
import { QuestionActions } from "./QuestionActions"

import { realTime } from "~/lib/transformers"

import { CommentType, useGetQuestionQuery } from "~/gql/typeSlut"

export function QuestionDetail({ id }) {
	const scrollContainerRef = useRef(null)
	const titleRef = useRef(null)
	const { data, loading, error } = useGetQuestionQuery({ variables: { id } })
	if (loading) {
		return <Detail.Loading />
	}

	if (!data?.question || error) {
		return <Detail.Null />
	}

	const { question } = data
	const createdAt = realTime({
		month: "short",
		timestamp: question?.createdAt,
	})

	return (
		<Detail.Container data-cy="question-detail" ref={scrollContainerRef}>
			<TitleBar
				backButton
				globalMenu={false}
				backButtonHref="/ama"
				magicTitle
				title={question?.title}
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				trailingAccessory={<QuestionActions question={question} />}
			/>

			<Detail.ContentContainer>
				<Detail.Header>
					<div className="flex items-center space-x-4 pb-2">
						<Link href={`/u/${question?.author?.name}`} className="inline-flex">
							<Avatar
								user={question?.author}
								src={question?.author?.image}
								width={32}
								height={32}
								quality={100}
								className="rounded-full"
							/>
						</Link>
						<div className="flex space-x-1">
							<Link
								href={`/u/${question.author?.name}`}
								className="inline-flex space-x-1"
							>
								<span className="text-primary whitespace-nowrap font-semibold leading-snug">
									{question.author?.name}
								</span>
								<span className="text-tertiary line-clamp-1 inline-flex font-normal leading-snug">
									@{question.author?.username}
								</span>
							</Link>
							<p className="text-quaternary leading-snug">·</p>
							<p
								className="text-quaternary line-clamp-1 leading-snug"
								title={createdAt.raw}
							>
								{createdAt.formatted}
							</p>
						</div>
					</div>

					<Detail.Title ref={titleRef}>{question?.title}</Detail.Title>
					{question.audioUrl && (
						<div className="py-4">
							<AudioPlayer
								src={question?.audioUrl}
								isRecorder={false}
								id={question.id}
								waveform={question?.waveform}
							/>
						</div>
					)}
					{question?.description && (
						<MarkdownRenderer
							children={question?.description}
							className="prose prose-neutral dark:prose-invert"
							variant="comment"
						/>
					)}
				</Detail.Header>
				<div className="py-6" />
			</Detail.ContentContainer>

			{question.viewerCanComment && (
				<Comments refId={question?.id} type={CommentType.Question} />
			)}
		</Detail.Container>
	)
}
