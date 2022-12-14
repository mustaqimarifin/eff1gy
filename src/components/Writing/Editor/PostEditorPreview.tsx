import * as React from 'react'

import { Detail } from '~/components/ListDetail/Detail'
import { MarkdownRenderer } from '~/components/MarkdownRenderer'

import { PostEditorContext } from './PostEditor'

export function PostEditorPreview({ children }) {
  const context = React.useContext(PostEditorContext)
  const { draftState } = context
  const { title, text } = draftState

  return (
    <Detail.ContentContainer>
      <Detail.Header>
        <Detail.Title>{title}</Detail.Title>
      </Detail.Header>

      <div className="prose mt-8">{children}</div>

      {/* bottom padding to give space between post content and comments */}
      <div className="py-6" />
    </Detail.ContentContainer>
  )
}
