'use client'

import type { ReactNode } from 'react'
import { Suspense, useRef } from 'react'

import type { Blog } from '~/graphql/typeSlut'
import { CommentType, useGetBlogQuery } from '~/graphql/typeSlut'
import { formatDate } from '~/lib/transformers'

import { Comments } from '../Comments'
import { CoverImage } from '../Image'
import { Image } from '../Image/NextImage'
import { Detail } from '../ListDetail/Detail'
import { TitleBar } from '../ListDetail/TitleBar'
import { LoadingSpinner } from '../LoadingSpinner'
import PageTitle from './PageTitle'
import { PostAction } from './PostAction'

export type Post = {
  id: string
  slug: string
  name: string
  content: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  caption?: string
  readingTime?: string
  tweets: any[]
  tags?: string[]
}

export type CaseStudy = {
  id: string
  slug: string
  name: string
  content: string
  title: string
  date: string
  caption: string
  overview: string
  coverImage: string
  orientation?: 'landscape'
}

type Props = {
  children?: ReactNode
  post?: Post
  blog?: Blog
  slug?: string
}

/* const Comments = dynamic(
  () => import('../Comments/index').then((x) => x.Comments),
  {
    ssr: false,
  }
) */
export function PostDetail({ children, post, slug }: Props) {
  const scrollContainerRef = useRef(null)
  const titleRef = useRef(null)

  const { data, loading, error } = useGetBlogQuery({
    variables: { slug },
  })

  //if (error) return <div>failed to load</div>;
  // if (!post) return <div>loading...</div>;
  /*  useEffect(() => {
    async function fetchPost() {
      const response =  await fetch(`/api/post/${post.slug}`;
      const fetchedPost = await response.json();
      setPost(fetchedPost);
    }
    fetchPost();
  }, []); */
  if (loading) {
    return <Detail.Loading />
  }

  if (!data?.blog || error) {
    return <Detail.Null />
  }
  const { blog } = data
  //  const publishedAt = realTime({ timestamp: post.publishedAt });
  //const publishedAt = realTime({ timestamp: post.date })

  return (
    <>
      <Detail.Container data-cy="post-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={'/post'}
          magicTitle
          title={post?.title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
          trailingAccessory={null}
        />

        <Detail.ContentContainer>
          <Detail.Header>
            <div className="flex items-center space-x-6">
              <div>
                <Detail.Title ref={titleRef}>{post?.title}</Detail.Title>
              </div>
            </div>
          </Detail.Header>
          <div className="mb-16 flex flex-col uppercase text-center font-semibold justify-between w-full mt-2 md:flex-row md:items-center">
            <div className="flex gap-x-1 content-center items-center mt-2 text-xs text-gray-600 dark:text-gray-400  md:mt-0">
              {formatDate(post?.date)}
              {` • `}
              {blog?.count}
            </div>
          </div>
          {children}
          <div className="py-6" />
          <Suspense fallback={<LoadingSpinner />}>
            <Comments refId={blog?.slug} type={CommentType.Blog} />
          </Suspense>
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  )
}
