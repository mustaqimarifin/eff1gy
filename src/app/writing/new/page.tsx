'use client'

import { ListDetailView } from '~/components/Layouts'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { PostsList } from '~/components/Writing/PostsList'

export const dynamic = 'force-dynamic'

export default function NewPostPage() {
  return (
    <ListDetailView list={<PostsList />} hasDetail detail={<PostEditor />} />
  )
}
