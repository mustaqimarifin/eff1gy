import * as React from 'react'

import { Comments } from '~/components/Comments'
import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { CommentType, useGetPostQuery } from '~/graphql/typeSlut'
import { cleanTime } from '~/lib/functions'

import ViewCounter from '../Stats/ViewCounter'
import ClientOnly from '../Switch/ClientOnly'
import { PostActions } from './PostActions'
import { PostSEO } from './PostSEO'

export function PostDetail({ children, slug }) {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)
  const { data, error, loading } = useGetPostQuery({ variables: { slug } })

  if (loading) {
    return <Detail.Loading />
  }

  if (!data?.post || error) {
    return <Detail.Null />
  }
  const { post } = data
  const publishedAt = cleanTime({ timestamp: post.publishedAt })
  return (
    <>
      <PostSEO post={post} />
      <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={'/writing'}
          magicTitle
          title={post.title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
          trailingAccessory={
            <>
              <PostActions post={post} />
            </>
          }
        />

        <Detail.ContentContainer>
          <Detail.Header>
            <Detail.Title ref={titleRef}>{post.title}</Detail.Title>

            <span
              title={publishedAt.raw}
              className="flex text-tertiary align-top leading-snug font-mono"
            >
              {publishedAt.formatted}
            </span>
          </Detail.Header>
          <div className="prose xl:prose-lg dark:prose-dark lg:max-w-3xl mt-8">
            {children}
          </div>
          {/* bottom padding to give space between post content and comments */}
          <div className="py-6" />
        </Detail.ContentContainer>
        <ClientOnly>
          <Comments refId={post.id} type={CommentType.Post} />
        </ClientOnly>
      </Detail.Container>
    </>
  )
}
