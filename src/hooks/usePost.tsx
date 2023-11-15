import { useMemo } from 'react'
import { api } from '~/server10/_api'
import { type Comment } from 'src/types'

export interface PostProps {
  id: string
}

export const usePost = (id: string) => {
  const { data: post } = api.post.getBySlug.useQuery({ id })

  const commentsByParentId = useMemo(() => {
    if (post?.comments === null) return null

    const group: { [key: string]: Comment[] } = {}

    post?.comments?.forEach((comment: Comment) => {
      group[comment.parentId] ||= []
      group[comment?.parentId]?.push(comment)
    })

    return group
  }, [post?.comments])

  const getReplies = (parentId: string): Comment[] => {
    return commentsByParentId?.[parentId] || []
  }

  return {
    post,
    rootComments: commentsByParentId?.['null'] || [],
    getReplies,
  }
}
