'use client'

import { useQuery } from '@apollo/experimental-nextjs-app-support/ssr'
import { type ReactNode, useRef } from 'react'

import { Comments } from '~/components/Comments'
import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { GET_POST } from '~/graphql/queries/posts'
import type { Post } from '~/graphql/typeSlut'
import { CommentType } from '~/graphql/typeSlut'
import { timestampToCleanTime } from '~/lib/transformers'

import { MarkdownRenderer } from '../MarkdownRenderer'
import { PostActions } from './PostActions'

interface PD {
  children?: ReactNode
  slug?: string
  post?: Post
}
export function PostDetail({ children, slug }: PD) {
  const scrollContainerRef = useRef(null)
  const titleRef = useRef(null)
  const { data, loading, error } = useQuery(GET_POST, {
    variables: { slug },
    context: { fetchOptions: { cache: 'force-cache' } },
  })
  // const { data, loading, error } = useGetPostQuery({ variables: { slug } })

  if (loading) {
    return <Detail.Loading />
  }

  if (!data?.post || error) {
    return <Detail.Null />
  }

  const publishedAt = timestampToCleanTime({
    timestamp: data?.post.publishedAt,
  })

  const { post } = data
  return (
    <>
      <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={'/writing'}
          magicTitle
          title={post.title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
          trailingAccessory={<PostActions post={post} />}
        />

        <Detail.ContentContainer>
          <Detail.Header>
            <Detail.Title ref={titleRef}>{post.title}</Detail.Title>

            <span
              title={publishedAt.raw}
              className="text-tertiary inline-block leading-snug">
              {publishedAt.formatted}
            </span>
          </Detail.Header>
          <div className="mt-8 xl:prose-lg lg:max-w-3xl">{children}</div>

          {/*  <MarkdownRenderer
            children={post.text}
            className="mt-8 xl:prose-md lg:max-w-3xl"
          /> */}
          {/* bottom padding to give space between post content and comments */}
          <div className="py-6" />
        </Detail.ContentContainer>

        <Comments refId={post.id} type={CommentType.Post} />
      </Detail.Container>
    </>
  )
}
