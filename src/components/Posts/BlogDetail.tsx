import * as React from 'react'
import dynamic from 'next/dynamic'
import { CommentType } from '~/graphql/typeSlut'
import { timestampToCleanTime } from '~/lib/transformers'

import { CoverImage } from '../Image'
import { Detail } from '../ListDetail/Detail'
import { TitleBar } from '../ListDetail/TitleBar'
import { LoadingSpinner } from '../LoadingSpinner'
import { BlogActions } from './BlogActions'
import PageTitle from './PageTitle'
import { PostSEO } from './PostSEO'

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
  children: React.ReactNode
  post: Post
}

const Comments = dynamic(() => import('../Comments'), {
  ssr: false,
})
export function BlogDetail({ children, post }: Props) {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)
  //if (error) return <div>failed to load</div>;
  // if (!post) return <div>loading...</div>;
  /*   React.useEffect(() => {
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
  const publishedAt = timestampToCleanTime({ timestamp: post.date })

  return (
    <>
      <PostSEO post={post} />

      <Detail.Container data-cy="blog-detail" ref={scrollContainerRef}>
        <TitleBar
          backButton
          globalMenu={false}
          backButtonHref={'/blog'}
          magicTitle
          title={post.title}
          //@ts-ignore
          titleRef={titleRef}
          //@ts-ignore
          scrollContainerRef={scrollContainerRef}
          trailingAccessory={<BlogActions blog={post} />}
        />

        <Detail.ContentContainer>
          <Detail.Header>
            <CoverImage src={post.caption} />

            <Detail.Title ref={titleRef}>
              <PageTitle>{post.title}</PageTitle>
            </Detail.Title>
          </Detail.Header>

          <div className="mb-16 mt-2 flex w-full flex-col items-start justify-between  text-center font-semibold uppercase md:flex-row md:items-center">
            <div className="mt-2 flex  items-center gap-2 text-sm text-gray-600 dark:text-gray-400  md:mt-0">
              {publishedAt.formatted}
              {` • `}
              {/*                 <ViewCounter slug={post.slug} />
               */}{' '}
              {` • `}
              <div className="flex space-x-2">
                {post.tags?.length &&
                  post.tags
                    .slice(0)
                    .map((tag: any, index: any) => (
                      <div key={index}>{tag}</div>
                    ))}
              </div>
            </div>
          </div>

          <div className="dark:prose-dark mx-auto mt-8 w-full max-w-4xl lg:prose lg:text-lg ">
            {children}
          </div>

          <div className="py-6" />
          <React.Suspense fallback={<LoadingSpinner />}>
            <Comments refId={post.id} type={CommentType.Blog} />
          </React.Suspense>
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  )
}
