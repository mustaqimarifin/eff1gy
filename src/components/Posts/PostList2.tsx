'use client'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { Detail } from '../ListDetail/Detail'
import { TitleBar } from '../ListDetail/TitleBar'

export default function PostList2({ posts, children }) {
  const scrollContainerRef = useRef(null)
  const titleRef = useRef(null)
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts =
    posts &&
    posts
      .sort((a, b) => Number(new Date(b.date)) - Number(new Date(b.date)))
      .filter((post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase())
      )

  return (
    <Detail.Container data-cy="post-list-2" ref={scrollContainerRef}>
      <TitleBar
        backButton
        globalMenu={false}
        backButtonHref={'/post'}
        magicTitle
        title="Posts"
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
        trailingAccessory={null}
      />

      <Detail.ContentContainer>
        {/*         <Detail.Header>
          <div className="flex items-center space-x-6">
            <div>
              <Detail.Title ref={titleRef}>Posts</Detail.Title>
            </div>
          </div>
        </Detail.Header> */}
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            Posts
          </h1>
          <p className="mb-4 text-gray-600 dark:text-gray-400">
            {`I've been writing online since 2014, mostly about web development and tech careers.
            In total, I've written ${posts?.length} articles on this site.
            Use the search below to filter by title.`}
          </p>
          <div className="relative w-full mb-4"></div>
          {/*         {!searchValue && (
          <>
            <h3 className="mt-8 mb-4 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
              Most Popular
            </h3>
            <BlogPost
              title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
              summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
              slug="style-guides-component-libraries-design-systems"
            />
            <BlogPost
              title="How Stripe Designs Beautiful Websites"
              summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
              slug="how-stripe-designs-beautiful-websites"
            />
            <BlogPost
              title="Creating a Monorepo with Lerna & Yarn Workspaces"
              summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
              slug="monorepo-lerna-yarn-workspaces"
            />
          </>
        )} */}

          {children}
        </div>
        <div className="py-6" />
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
/* 
export default async function PostIndex() {
  let allBlogs = getPosts()

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/post/${post.slug}`}>
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.title}
              </p>
              <Views slug={post.slug} />
            </div>
          </Link>
        ))}
    </section>
  )
}

async function Views({ slug }: { slug: string }) {
  const views = await api.viewsBySlug.query({ slug })

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="text-xs">{`${views && views.count} views`}</div>
    </Suspense>
  )
}
 */
