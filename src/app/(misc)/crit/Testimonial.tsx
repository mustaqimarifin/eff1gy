import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Button from '../../../components/Button'
import { ExternalLinkIcon, YouTubeIcon } from '../../../components/Icon'

type TestimonialProps = {
  avatarSrc: string
  name: string
  quoteSrc: string
  productSrc: string
  productLogo: string
  productName: string
  quote: string
  youtube: string
  reportSrc: string
}

export function Testimonial({
  testimonial,
}: {
  testimonial: TestimonialProps
}) {
  return (
    <div className="flex flex-col space-y-4 rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
      <div className="flex items-center space-x-4">
        <Link
          href={testimonial.quoteSrc}
          className="text-primary font-semibold"
          target="_blank"
          rel="noopener noreferrer">
          <Image
            width={56}
            height={56}
            alt="testimonial avatar"
            src={testimonial.avatarSrc}
            className="flex-none rounded-full bg-gray-300"
          />
        </Link>
        <div className="flex flex-1 flex-col">
          <Link
            href={testimonial.quoteSrc}
            className="text-primary font-semibold"
            target="_blank"
            rel="noopener noreferrer">
            {testimonial.name}
          </Link>
          <div className="flex items-center space-x-1.5">
            <Image
              alt="product logo"
              src={testimonial.productLogo}
              width={16}
              height={16}
              className="rounded"
            />
            <a
              href={testimonial.productSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="text-tertiary">
              {testimonial.productName}
            </a>
          </div>
        </div>
        {testimonial.reportSrc && (
          <Button
            size="large"
            target="_blank"
            rel="noopenener noreferrer"
            href={testimonial.reportSrc}>
            <span>View report</span>
            <ExternalLinkIcon />
          </Button>
        )}
      </div>
      <p className="prose prose-lg">
        <p>{testimonial.quote}</p>
      </p>
      {testimonial.youtube && (
        <div className="relative w-full pb-[56.25%]">
          <iframe
            className="absolute left-0 top-0 h-full w-full rounded-md"
            src={testimonial.youtube}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      )}
    </div>
  )
}
