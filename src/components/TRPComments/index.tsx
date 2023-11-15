import React, { useState } from 'react'
import { usePost } from '~/hooks/usePost'
import { api } from '~/server10/_api'
import { motion } from 'framer-motion'

import { GhostIcon } from '../Icon'
import { CommentForm } from './form'
import { CommentList } from './list'

const TRPComments = ({ id }: { id: string }) => {
  const messagesEndRef: React.RefObject<HTMLDivElement> = React.useRef(null)

  const [error, setError] = useState('')
  const { rootComments } = usePost(id)

  const utils = api.useUtils()
  const createComment = api.post.addComment.useMutation({
    async onSuccess(input) {
      await utils.post.getBySlug.invalidate({ id: input.id as string })
    },
  })

  const handleCommentCreate = async (text: string) => {
    if (text.trim().length === 0) {
      setError('You need to specify a text!')
      return
    }

    if (text.trim().length < 4) {
      setError('text is too short!')
      return
    }

    return await createComment.mutateAsync({ slug: id, text }).then(() => {
      setError('')
    })
  }

  return (
    <div className="relative flex flex-1 flex-col border-t border-gray-150 dark:border-gray-800">
      <div className="text-quaternary absolute -top-5 left-1/2 -translate-x-1/2 transform px-8 py-2 ">
        <GhostIcon />
      </div>
      <div className="mx-auto flex w-full max-w-sm flex-1 flex-col space-y-3 px-4 pb-4 pt-8 md:px-8">
        <motion.div layout className="flex flex-col space-y-3">
          {rootComments?.length === 0 && (
            <p className="text-quaternary block pb-16 pt-12 text-center">
              No comments yet...
            </p>
          )}
        </motion.div>
      </div>
      <h2 className="p-4 text-center text-xl font-bold text-gray-800">
        Comments
      </h2>

      <CommentForm onSubmit={handleCommentCreate} error={error} />
      <CommentList comments={rootComments} />

      <div ref={messagesEndRef} />
    </div>
  )
}

export default TRPComments
