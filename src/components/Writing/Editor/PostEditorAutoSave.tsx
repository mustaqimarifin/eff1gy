'use client'

import { useContext } from 'react'

import { LoadingSpinner } from '~/components/LoadingSpinner'
import { useEditPostMutation } from '~/graphql/typeSlut'
import { useInterval } from '~/hooks'

import { PostEditorContext } from './PostEditor'

export function PostEditorAutoSave() {
  const context = useContext(PostEditorContext)
  const { draftState, existingPost } = context
  const { title, text, slug, excerpt } = draftState
  const [editPost, { loading }] = useEditPostMutation()

  // auto save every 30 seconds
  useInterval(() => {
    if (!existingPost?.id) return

    editPost({
      variables: {
        id: existingPost.id,
        data: { title, text, slug, excerpt },
      },
    })
  }, 30000)

  return <>{loading && <LoadingSpinner />}</>
}
