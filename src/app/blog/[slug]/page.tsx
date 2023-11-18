import * as React from 'react'

import { ListDetailView } from '~/components/Layouts'
import { Mdx } from '~/components/MDX'
import { mdxToCode } from '~/components/MDX/Mdx'
import { BlogDetail, CaseStudy, Post } from '~/components/Posts/BlogDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { indexQuery } from '~/lib/sanity/queries'
import { getPostBySlug } from '~/lib/sanity/sanity.client'
import { sanityClient } from '~/lib/sanity/server'

export const dynamic = 'force-static'

export async function generateStaticParams() {
    const posts = await sanityClient.fetch(indexQuery)

    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function Blog({ params: { slug } }) {
    const posts = await sanityClient.fetch(indexQuery)

    const post: Post = await getPostBySlug(slug)

    if (!post) {
        return { notFound: true }
    }

    const { mdx } = await mdxToCode(post.content)

    return (
        <ListDetailView
            list={<PostsList posts={posts} />}
            hasDetail
            detail={
                <BlogDetail post={post} slug={slug}>
                    <React.Suspense>
                        <Mdx code={mdx} />
                    </React.Suspense>
                </BlogDetail>
            }
        />
    )
}
