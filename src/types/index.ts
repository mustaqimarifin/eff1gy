/* import { TrackEvent } from '~/lib/umami'

export {}

declare global {
  interface Window {
    umami: any
  }
}
 */
export type Comment = {
    id: string
    text: string
    slug: string
    createdAt: Date
    parentId: string | null
    author: {
        id: string
        name: string
        image: string
    }
    likeCount: number
    likedByMe: boolean
    commentId?: string
    highlight?: boolean
    isDeleted?: boolean
    replies?: Comment[]
}
