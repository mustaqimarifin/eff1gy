'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { InView } from 'react-intersection-observer'

import { MarkdownRenderer } from '~/components/MarkdownRenderer'
import type { EventDetail } from '~/data/events'

interface Props {
  detail: EventDetail
}

export function EventDetailMedia(props: Props) {
  const { detail } = props
  const [isVisible, setIsVisible] = useState(false)

  return (
    <InView
      as="div"
      onChange={(visible: boolean) => !isVisible && setIsVisible(visible)}>
      <div className="flex flex-col">
        <h2 className="mb-4 text-lg font-bold text-primary">{detail?.title}</h2>
        <div className="prose">
          <MarkdownRenderer>{detail?.description}</MarkdownRenderer>
        </div>

        {isVisible && detail.media && (
          <div className="flex items-center justify-center p-2 mt-8 mb-4 -mx-4 bg-gray-100 rounded-none dark:bg-gray-900 md:-mx-8 md:p-4 xl:rounded-md">
            {detail.media.map((src) => (
              <video
                playsInline
                muted
                loop
                autoPlay
                preload="metadata"
                key={src}
                style={{
                  minHeight: `${
                    detail.orientation === 'landscape' ? '320px' : '680px'
                  }`,
                  maxWidth: `${
                    detail.orientation === 'landscape' ? '100%' : '400px'
                  }`,
                }}
                className="w-full h-full overflow-hidden rounded-md">
                <source src={`${src}#t=0.1`} />
              </video>
            ))}
          </div>
        )}
        {isVisible && detail.gallery && (
          <div className="flex items-center justify-center p-2 mt-8 mb-4 -mx-4 bg-gray-100 rounded-none dark:bg-gray-900 md:-mx-8 md:p-4 xl:rounded-md ">
            {detail.gallery.map((src) => (
              <div className="aspect-square relative" key={src}>
                <Image fill src={src} alt="drawing"></Image>
              </div>
            ))}
          </div>
        )}
      </div>
    </InView>
  )
}
