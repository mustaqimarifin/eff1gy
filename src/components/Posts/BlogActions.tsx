'use client'

import * as React from 'react'

import { ReactionButton } from '~/components/Button/ReactionButton'
import { GET_BLOG } from '~/graphql/queries/blogs'
import {
  Blog,
  ReactionType,
  useToggleReactionMutation,
  useViewerQuery,
} from '~/graphql/typeSlut'

import { PageViews } from '../Stats/ViewCounter'

function getReactionButton(blog: Blog) {
  const [toggleReaction, { loading }] = useToggleReactionMutation()
  function handleClick() {
    if (loading) return

    toggleReaction({
      variables: {
        refId: blog.id,
        type: ReactionType.Blog,
      },
      optimisticResponse: {
        __typename: 'Mutation',
        toggleReaction: {
          __typename: 'Blog',
          ...blog,
          reactionCount: blog.viewerHasReacted
            ? blog.reactionCount - 1
            : blog.reactionCount + 1,
          viewerHasReacted: !blog.viewerHasReacted,
        },
      },
      update(cache, { data: { toggleReaction } }) {
        cache.writeQuery({
          query: GET_BLOG,
          variables: { id: blog.id },
          data: {
            blog: {
              ...blog,
              ...toggleReaction,
            },
          },
        })
      },
    })
  }

  return (
    <ReactionButton
      id={blog.id}
      loading={loading}
      count={blog.reactionCount}
      hasReacted={blog.viewerHasReacted}
      onClick={handleClick}
    />
  )
}

export function BlogActions({ blog }: { blog: Blog }) {
  return (
    <div className="flex items-center space-x-2">
      <PageViews id={blog.slug} trackView />
      {getReactionButton(blog)}
    </div>
  )
}
