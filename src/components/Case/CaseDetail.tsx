'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { useRef } from 'react'

import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { realTime } from '~/lib/transformers'

import type { CaseStudy } from '../Posts/PostDetail'

interface Props {
  children: ReactNode
  casestudy: CaseStudy
}

export function CaseDetail({ casestudy, children }: Props) {
  const scrollContainerRef = useRef(null)
  const titleRef = useRef(null)

  const date = realTime({ timestamp: casestudy.date })

  return (
    <Detail.Container data-cy="app-detail" ref={scrollContainerRef}>
      <TitleBar
        backButton
        globalMenu={false}
        backButtonHref={'/casestudy'}
        magicTitle
        title={casestudy.title}
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
      />

      <Detail.ContentContainer>
        <Detail.Header>
          <div className="flex items-center space-x-6">
            <Image
              src={casestudy.caption}
              width={80}
              height={80}
              alt={`${casestudy.title} icon`}
              className={'rounded-2xl'}
            />
            <div>
              <Detail.Title ref={titleRef}>{casestudy.title}</Detail.Title>
              <span
                title={date.raw}
                className="text-tertiary inline-block leading-snug">
                {date.formatted}
              </span>
            </div>
          </div>
        </Detail.Header>

        <div className="space-y-12">
          <div className="prose pt-12">{children}</div>

          {/*           {casestudy.details.map((detail, i) => (
            <DesignDetailMedia detail={detail} key={`${detail.title}-${i}`} />
          ))} */}
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
