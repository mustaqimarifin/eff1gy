import * as React from 'react'

import { ListDetailView } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { Mdx } from '~/components/MDX'
import { mdxToCode } from '~/components/MDX/Mdx'
import { getClient } from '~/components/Provider/ApolloClient'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { PostDetail } from '~/components/Writing/PostDetail'
import { PostsList } from '~/components/Writing/PostsList'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_POST, GET_POSTS } from '~/graphql/queries/posts'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import { CommentType, GetPostQuery } from '~/graphql/typeSlut'

export const dynamic = 'force-static'

export default async function PostPage({ params: { slug } }) {
    const client = getClient()

    const { data, loading, error } = await client.query<GetPostQuery>({
        query: GET_POST,
        variables: { slug },
    })

    await Promise.all([
        client.query({ query: GET_VIEWER }),
        client.query({ query: GET_POSTS }),

        data?.post?.id &&
            client.query({
                query: GET_COMMENTS,
                variables: { refId: data.post.id, type: CommentType.Post },
            }),
    ])

    if (loading) {
        return <Detail.Loading />
    }

    if (!data?.post || error) {
        return <Detail.Null />
    }
    const { post } = data
    const { mdx } = await mdxToCode(post.text)

    if (data?.post && !post.publishedAt)
        return (
            <ListDetailView
                list={<PostsList />}
                hasDetail
                detail={
                    <React.Suspense>
                        <PostEditor slug={slug} />
                    </React.Suspense>
                }
            />
        )
    return (
        <ListDetailView
            list={<PostsList />}
            hasDetail
            detail={
                <PostDetail post={post}>
                    <React.Suspense>
                        <Mdx code={mdx} />
                    </React.Suspense>
                </PostDetail>
            }
        />
    )
}
