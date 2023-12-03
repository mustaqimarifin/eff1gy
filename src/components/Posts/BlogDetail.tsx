'use client'

import Image from 'next/image'
import type { ReactNode } from 'react'
import { Suspense, useRef } from 'react'

import { CommentType, useGetBlogQuery } from '~/graphql/typeSlut'

import { Comments } from '../Comments'
import { Detail } from '../ListDetail/Detail'
import { TitleBar } from '../ListDetail/TitleBar'
import { LoadingSpinner } from '../LoadingSpinner'
import { BlogActions } from './BlogActions'
import PageTitle from './PageTitle'
import { CoverImage } from '../Image'

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
  children: ReactNode
  post: Post
  slug: string
}

/* const Comments = dynamic(
  () => import('../Comments/index').then((x) => x.Comments),
  {
    ssr: false,
  }
) */
export function BlogDetail({ children, post, slug }: Props) {
  const scrollContainerRef = useRef(null)
  const titleRef = useRef(null)
  const { data, error, loading } = useGetBlogQuery({ variables: { slug } })

  if (loading) {
    return <Detail.Loading />
  }

  if (!data?.blog || error) {
    return <Detail.Null />
  }
  const { blog } = data
  //if (error) return <div>failed to load</div>;
  // if (!post) return <div>loading...</div>;
  /*  useEffect(() => {
    async function fetchPost() {
      const response =  await fetch(`/api/blog/${post.slug}`;
      const fetchedPost = await response.json();
      setPost(fetchedPost);
    }
    fetchPost();
  }, []); */
  /*   if (loading) {
    return <Detail.Loading />;
  }

  if (!data?.post || error) {
    return <Detail.Null />;
  } */
  // const { post } = data;
  //  const publishedAt = timestampToCleanTime({ timestamp: post.publishedAt });
  //const publishedAt = timestampToCleanTime({ timestamp: post.date })

  return (
    <>
      <Detail.Container data-cy="blog-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={'/blog'}
          magicTitle
          title={post.title}
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
          trailingAccessory={<BlogActions blog={blog} />}
        />

        <Detail.ContentContainer>
          <Detail.Header>
            <CoverImage src={post.caption} />
            <div className="text-3xl font-bold capitalize text-black dark:text-white">
              {post.title}
            </div>
          </Detail.Header>
          {children}
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  )
}
