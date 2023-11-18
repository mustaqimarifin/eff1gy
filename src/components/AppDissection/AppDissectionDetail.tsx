'use client'

import Image from 'next/image'
import * as React from 'react'

import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { timestampToCleanTime } from '~/lib/transformers'

import { CaseStudy } from '../Posts/BlogDetail'

interface Props {
  children: React.ReactNode
  casestudy: CaseStudy
}

export function AppDissectionDetail({ casestudy, children }: Props) {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)

  const date = timestampToCleanTime({ timestamp: casestudy.date })

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
