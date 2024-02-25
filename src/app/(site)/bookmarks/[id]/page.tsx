import { Suspense } from 'react'

import { BookmarkDetail } from '~/components/Bookmarks/BookmarkDetail'
import { BookmarksList } from '~/components/Bookmarks/BookmarksList'
import { ListDetailView } from '~/components/Layouts'
import { LoadingSpinner } from '~/components/LoadingSpinner'

import { ViewType } from '~/graphql/typeSlut'

import { HiddenCounter } from '~/lib/actions'

//export const dynamic = 'force-dynamic'

export default function BookmarkPage({ params: { id } }) {

/*   await Promise.allSettled([
    client.query({ query: GET_VIEWER }),
    client.query({
      query: GET_BOOKMARKS,
    }),
    client.query({ query: GET_TAGS }),

    client.query({
      query: GET_BOOKMARK,
      variables: { id },
      context: { fetchOptions: { cache: 'no-store' } },
    }),

    client.query({
      query: GET_COMMENTS,
      variables: { refId: id, type: CommentType.Bookmark },
      context: { fetchOptions: { cache: 'no-store' } },
    }),
  ])
 */
  return (
    <ListDetailView
      list={<BookmarksList />}
      hasDetail
      detail={
        <Suspense fallback={<LoadingSpinner />}>
          <BookmarkDetail id={id}>
            <HiddenCounter refId={id} type={ViewType.Bookmark} />
          </BookmarkDetail>
        </Suspense>
      }
    />
  )
}
