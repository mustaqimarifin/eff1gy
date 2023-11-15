import { useAutoAnimate } from '@formkit/auto-animate/react'
import type { Comment } from 'src/types'

import { TRPCComment } from './comment'

interface CommentListProps {
  comments: Comment[]
}

export const CommentList = ({ comments }: CommentListProps) => {
  const [parent] = useAutoAnimate<HTMLDivElement>()

  return (
    <div ref={parent}>
      {comments?.map((comment: Comment) => (
        <div key={comment.id} className="my-2 last:mb-0">
          <TRPCComment comment={comment} />
        </div>
      ))}
    </div>
  )
}
