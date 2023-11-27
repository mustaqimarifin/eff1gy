import { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { ListDetailView } from '~/components/Layouts'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import { getClient } from '~/components/Provider/ApolloClient'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { PostsList } from '~/components/Writing/PostsList'
import { GET_POST } from '~/graphql/queries/posts'
import type { GetPostQuery } from '~/graphql/typeSlut'

export const dynamic = 'force-dynamic'

export default async function EditPage({ params: { slug } }) {
  const client = getClient()

  const { data, loading, error } = await client.query<GetPostQuery>({
    query: GET_POST,
    variables: { slug },
  })

  return (
    <ListDetailView
      list={<PostsList />}
      hasDetail
      detail={
        <Suspense fallback={<LoadingSpinner />}>
          <PostEditor slug={slug}>
            <Mdx source={data?.post.text} />
          </PostEditor>
        </Suspense>
      }
    />
  )
}
