'use client'

import * as React from 'react'

import { Detail } from '~/components/ListDetail/Detail'

//import { MarkdownRenderer } from '~/components/MarkdownRenderer'
import { PostEditorContext } from './PostEditor'

export function PostEditorPreview({
  children,
}: {
  children?: React.ReactNode
}) {
  const context = React.useContext(PostEditorContext)
  const { draftState } = context
  const { title, text } = draftState

  return (
    <Detail.ContentContainer>
      <Detail.Header>
        <Detail.Title>{title}</Detail.Title>
      </Detail.Header>
      <div
        className="mt-8 xl:prose-md lg:max-w-3xl"
        //children={text}
      >
        {children}
      </div>
      {/*  <MarkdownRenderer
        children={text}
        className=" mt-8 xl:prose-md lg:max-w-3xl"
      />
 */}
      {/* bottom padding to give space between post content and comments */}
      <div className="py-6" />
    </Detail.ContentContainer>
  )
}
