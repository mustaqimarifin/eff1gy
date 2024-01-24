'use client'
import { type ReactNode, useRef } from 'react'

import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import type { EventDetailsPost } from '~/data/events'

import { FunContainer } from '../Layouts'
import { Embed } from '../MDX/Embed'

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
          backButtonHref={'/events'}
          magicTitle
          title={post?.title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
        />
        <Detail.ContentContainer>
          <FunContainer className="!pt-0">
            <div className="max-w-screen-md mx-auto ">
              <h1 className="mt-2 mb-3 text-5xl font-extrabold tracking-tight text-center text-brand-primary dark:text-white lg:text-4xl lg:leading-snug">
                {post.title}
              </h1>

              <div className="flex justify-center mt-3 space-x-3 text-gray-500 ">
                <div className="flex items-center gap-3">
                  <div>
                    <div className="flex items-center space-x-2 text-sm">
                      <time
                        className="text-gray-500 dark:text-gray-400"
                        dateTime={post?.date}>
                        {new Date(post?.date).toDateString()}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FunContainer>{' '}
          <div className="relative z-0 max-w-screen-lg mx-auto overflow-hidden aspect-video lg:rounded-lg">
            <div className="object-cover">
              {post && <Embed id={post?.video} />}
            </div>
          </div>
          <FunContainer>
            <article className="max-w-screen-md mx-auto ">
              <div className="mx-auto my-3 prose dark:prose-invert prose-a:text-blue-600">
                {children}
              </div>
            </article>
          </FunContainer>
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
