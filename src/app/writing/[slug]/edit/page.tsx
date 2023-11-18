'use client'

import * as React from 'react'

import { PostEditor } from '~/components/Writing/Editor/PostEditor'

export default function EditPage({
  params: { slug },
}: {
  params: {
    slug: string
  }
}) {
  return <PostEditor slug={slug} />
}
