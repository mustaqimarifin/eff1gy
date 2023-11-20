'use client'
import { Suspense } from 'react'

import { Detail } from '~/components/ListDetail/Detail'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { useViewerQuery } from '~/graphql/typeSlut'

export const dynamic = 'force-dynamic'

export default function EditPage({ params: { slug } }) {
  const { data } = useViewerQuery()
  if (!data?.viewer?.isAdmin) return <Detail.Null />
  return (
    <Suspense fallback={<Detail.Loading />}>
      <PostEditor slug={slug} />
    </Suspense>
  )
}
