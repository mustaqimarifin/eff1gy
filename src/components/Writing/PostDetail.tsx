'use client'

import * as React from 'react'

import Comments from '~/components/Comments'
import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { CommentType, Post, useGetPostQuery } from '~/graphql/typeSlut'
import { timestampToCleanTime } from '~/lib/transformers'

import { PostActions } from './PostActions'

interface PD {
    children?: React.ReactNode
    //slug: string
    post: Post
}
export function PostDetail({ children, post }: PD) {
    const scrollContainerRef = React.useRef(null)
    const titleRef = React.useRef(null)
    //const { data, error, loading } = useGetPostQuery({ variables: { slug } })

    const publishedAt = timestampToCleanTime({ timestamp: post.publishedAt })
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
                            className="text-tertiary inline-block leading-snug"
                        >
                            {publishedAt.formatted}
                        </span>
                    </Detail.Header>
                    <div className="mt-8 xl:prose-lg lg:max-w-3xl">
                        {children}
                    </div>
                    {/*           <MarkdownRenderer
            children={post.text}
            className="mt-8 xl:prose-lg lg:max-w-3xl"
          /> */}

                    {/* bottom padding to give space between post content and comments */}
                    <div className="py-6" />
                </Detail.ContentContainer>

                <Comments refId={post.id} type={CommentType.Post} />
            </Detail.Container>
        </>
    )
}
