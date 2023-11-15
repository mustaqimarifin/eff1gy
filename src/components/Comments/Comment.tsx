import * as React from 'react'
import Link from 'next/link'
import { Avatar } from '~/components/Avatar'
import Button, { PrimaryButton } from '~/components/Button'
import { Textarea } from '~/components/Input'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import {
  Comment as CommentProp,
  CommentType,
  GetCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
  useViewerQuery,
} from '~/graphql/typeSlut'
import { genId } from '~/lib/nanoid'
import { cx, timestampToCleanTime } from '~/lib/transformers'

import Comments from '.'
import { MarkdownRenderer } from '../MarkdownRenderer'
import { CommentForm } from './CommentForm'
import { CommentMenu } from './CommentMenu'

interface Props {
  comment: CommentProp
  parentId?: string
  refId: string
  type: CommentType
}

export const Comment = React.memo(function MemoComment({
  comment,
  parentId,
  refId,
  type,
}: Props) {
  const [isEditing, setIsEditing] = React.useState(false)
  const [editText, setEditText] = React.useState(comment.text)
  const [isSavingEdit, setIsSavingEdit] = React.useState(false)
  const [showReplyForm, setShowReplyForm] = React.useState(false)
  const replyId = comment.parentId ? comment.parentId : comment.id
  const [hidden, setHidden] = React.useState(false)
  const { data } = useViewerQuery()
  const [text, setText] = React.useState('')

  const [handleAddReply] = useAddCommentMutation({
    optimisticResponse: {
      __typename: 'Mutation',
      addComment: {
        __typename: 'Comment',
        id: genId(),
        text,
        parentId: comment.id,
        createdAt: timestampToCleanTime({ month: 'short' }).formatted,
        updatedAt: timestampToCleanTime({ month: 'short' }).formatted,
        viewerCanDelete: false,
        viewerCanEdit: false,
        author: {
          __typename: 'User',
          id: genId(),
          name: data?.viewer?.name,
          image: data?.viewer?.image,
          isViewer: true,
        },
      },
    },
    update(cache, { data: { addComment } }) {
      const { comments } = cache.readQuery<GetCommentsQuery>({
        query: GET_COMMENTS,
        variables: { refId, type, parentId },
      })

      cache.writeQuery({
        query: GET_COMMENTS,
        variables: { refId, type, parentId },
        data: {
          comments: [...comments, addComment],
        },
      })
    },
  })

  const [deleteComment] = useDeleteCommentMutation({
    variables: { id: comment.id },
    optimisticResponse: {
      __typename: 'Mutation',
      deleteComment: true,
    },
    update(cache) {
      const { comments } = cache.readQuery<GetCommentsQuery>({
        query: GET_COMMENTS,
        variables: { refId, type },
      })

      cache.writeQuery({
        query: GET_COMMENTS,
        variables: { refId, type },
        data: {
          comments: comments.filter((o) => o.id !== comment.id),
        },
      })
    },
    onError(error) {},
  })

  const [editComment] = useEditCommentMutation({
    variables: { id: comment.id, text: editText },
    optimisticResponse: {
      __typename: 'Mutation',
      editComment: {
        __typename: 'Comment',
        ...comment,
        text: editText,
        author: {
          ...comment.author,
          __typename: 'User',
        },
      },
    },
    onError(error) {},
    onCompleted() {
      setIsSavingEdit(false)
      setIsEditing(false)
    },
  })

  function handleDelete() {
    deleteComment()
  }

  function handleEdit() {
    setIsEditing(true)
  }

  function handleReply() {
    handleAddReply()
    setShowReplyForm(false)
  }

  function onKeyDown(e) {
    if (e.keyCode === 13 && e.metaKey) {
      if (editText.trim().length === 0 || isSavingEdit) return
      return handleSaveEdit()
    }
    if (e.keyCode === 27 || e.key === 'Escape') {
      setIsEditing(false)
      setEditText(comment.text)
    }
  }

  function handleSaveEdit() {
    setIsSavingEdit(true)
    editComment()
  }

  const createdAt = timestampToCleanTime({
    month: 'short',
    timestamp: comment.createdAt,
  })

  return (
    <>
      <div className="group flex flex-col space-y-0">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Link href={`/u/${comment.author.name}`} className="inline-flex">
              <Avatar
                user={comment.author}
                src={comment.author.image}
                width={40}
                height={40}
                quality={100}
                className="rounded-full"
              />
            </Link>

            <div className="flex space-x-1">
              <Link
                href={`/u/${comment.author.name}`}
                className="text-primary font-semibold leading-snug"
              >
                <div className="line-clamp-1 flex break-all">
                  {comment.author.name}
                </div>
              </Link>
              <p className="text-quaternary leading-snug">·</p>
              <p
                className="text-quaternary line-clamp-1 leading-snug"
                title={createdAt.raw}
              >
                {createdAt.formatted}
              </p>
            </div>
          </div>

          {(comment.viewerCanDelete || comment.viewerCanEdit) && (
            <CommentMenu
              comment={comment}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )}
        </div>

        {isEditing ? (
          <div className="flex flex-col space-y-3 pl-14">
            <Textarea
              onChange={(e) => setEditText(e.target.value)}
              value={editText}
              onKeyDown={onKeyDown}
            />
            <div className="flex justify-between">
              <Button onClick={() => setIsEditing(false)}>Cancel</Button>
              <PrimaryButton
                disabled={editText.trim().length === 0 || isSavingEdit}
                onClick={handleSaveEdit}
              >
                {isSavingEdit ? <LoadingSpinner /> : 'Save'}
              </PrimaryButton>
            </div>
          </div>
        ) : (
          <MarkdownRenderer
            children={comment.text}
            className="comment prose flex-grow pl-14 leading-normal"
            variant="comment"
          />
        )}
        {data?.viewer && (
          <div className="grid transform auto-cols-min grid-flow-col justify-start gap-x-3">
            <span
              className="flex items-center border-none text-xs text-gray-600 dark:text-gray-100"
              onClick={() => setShowReplyForm(!showReplyForm)}
              aria-label={
                showReplyForm
                  ? `Hide reply form`
                  : `Reply to comment by ${comment.author}`
              }
            >
              {showReplyForm ? (
                <button className="text-gray-500 hover:text-red-300 dark:text-gray-200">
                  Cancel&nbsp;&nbsp;
                </button>
              ) : (
                <button className="text-gray-500 hover:text-indigo-300 dark:text-gray-200">
                  Reply&nbsp;&nbsp;
                </button>
              )}
            </span>
          </div>
        )}
      </div>
      <div
        className={cx(
          'row-span-2 row-start-4 -mr-2 -translate-x-2 transform rounded-md',
          {
            hidden,
          }
        )}
      >
        {showReplyForm && (
          <div className="divide-pink-200 ">
            <CommentForm
              autoFocus
              submitLabel="Reply"
              onSubmit={handleReply}
              parentId={replyId}
              handleResetCallback={() => setShowReplyForm(false)}
            />
          </div>
        )}
        {comment.replies &&
          comment.replies.sort(
            (a, b) =>
              new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          ) &&
          comment.replies?.length > 0 && (
            <div className={cx('space-y-5 pt-2')}>
              <Comment comment={comment} refId={refId} type={type} />
            </div>
          )}
      </div>
    </>
  )
})
