import { NextSeo } from 'next-seo'
import * as React from 'react'

import { CLIENT_URL } from "~/graphql/constants"
import { Post } from '~/graphql/types.generated'

interface Props {
  post: Post
}

export function PostSEO({ post }: Props) {
  return (
    <NextSeo
      title={post.title}
      description={post.excerpt}
      openGraph={{
        title: post.title,
        url: `${CLIENT_URL}/writing/${post.slug}`,
        description: post.excerpt,
        images: [
          {
            url:
              post.featureImage ||
              `${CLIENT_URL}/static/img/writing/${post.slug}.png`,
            alt: post.title,
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  )
}
