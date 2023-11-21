'use client'
import { Suspense } from 'react'

import { ListDetailView } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { PostsList } from '~/components/Writing/PostsList'
import { useViewerQuery } from '~/graphql/typeSlut'

export const dynamic = 'force-dynamic'

export default function EditPage({ params: { slug } }) {
  const { data } = useViewerQuery()
  if (!data?.viewer?.isAdmin) return <Detail.Null />
  return (
    <ListDetailView
      list={<PostsList />}
      hasDetail
      detail={
        <Suspense fallback={<LoadingSpinner />}>
          <PostEditor slug={slug} />
        </Suspense>
      }
    />
  )
}
