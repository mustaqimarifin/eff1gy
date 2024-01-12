'use client'
import Image from 'next/image'
import type { ReactNode } from 'react'
import * as React from 'react'

import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { MarkdownRenderer } from '~/components/MarkdownRenderer'
import type { EventDetailsPost } from '~/data/events'

import { EventDetailMedia } from './DetailMedia'

interface Props {
  post: EventDetailsPost
  children?: ReactNode
}

export function EventDetail({ post, children }: Props) {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)

  return (
    <Detail.Container data-cy="app-detail" ref={scrollContainerRef}>
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
          <div className="flex items-center space-x-6">
            <Image
              src={post?.logo}
              width={80}
              height={80}
              layout="fixed"
              alt={`${post?.title} icon`}
              className={'rounded-2xl'}
            />
            <div>
              <Detail.Title ref={titleRef}>{post?.title}</Detail.Title>
              <span
                title={post.date}
                className="text-tertiary inline-block leading-snug">
                {post?.date}
              </span>
            </div>
          </div>
        </Detail.Header>

        <div className="space-y-12">
          <div className="prose pt-12">
            <MarkdownRenderer children={post?.description} />
          </div>

          {post?.details.map((detail, i) => (
            <EventDetailMedia detail={detail} key={`${detail?.title}-${i}`} />
          ))}
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
