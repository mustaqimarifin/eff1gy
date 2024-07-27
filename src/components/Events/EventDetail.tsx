"use client"
import { type ReactNode, useRef } from "react"

import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import type { EventDetailsPost } from "~/data/events"

interface Props {
	post: EventDetailsPost
	children?: ReactNode
}

export function EventDetail({ post, children }: Props) {
	const scrollContainerRef = useRef(null)
	const titleRef = useRef(null)

	return (
		<>
			<Detail.Container data-cy="event-detail" ref={scrollContainerRef}>
				<TitleBar
					backButton
					globalMenu={false}
					backButtonHref="/events"
					magicTitle
					title={post?.title}
					titleRef={titleRef}
					scrollContainerRef={scrollContainerRef}
				/>
				<Detail.ContentContainer>
					{children}
					{/*             <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden aspect-video lg:rounded-lg">
              <div className="object-cover">
                {post && <Embed id={post?.video} />}
              </div>
            </div> */}
				</Detail.ContentContainer>
			</Detail.Container>
			{/*       <Detail.Container data-cy="event-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={'/events'}
          magicTitle
          title={post?.title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
        />
        <Detail.ContentContainer>
          <Detail.Header>
            <div className="relative z-0 mx-auto w-full max-w-3xl">
              {post && <YoutubeEmbed id={post?.video} />}
            </div>
            <div className="flex items-center space-x-6">
              <Image
                src={post?.logo}
                width={80}
                height={80}
                alt={`${post?.title} icon`}
                className={'rounded-2xl'}
              />
              <div>
                <Detail.Title ref={titleRef}>{post?.title}</Detail.Title>
                <span
                  title={post?.date}
                  className="text-tertiary inline-block leading-snug">
                  {post?.date}
                </span>
              </div>
            </div>
          </Detail.Header>
          {children}
        </Detail.ContentContainer>
      </Detail.Container> */}
		</>
	)
}
