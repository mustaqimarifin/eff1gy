import * as React from 'react'

import { BookmarkDetail } from '~/components/Bookmarks/BookmarkDetail'
import { BookmarksList } from '~/components/Bookmarks/BookmarksList'
import { ListDetailView } from '~/components/Layouts'
import { LoadingSpinner } from '~/components/LoadingSpinner'
import { getClient } from '~/components/Provider/ApolloClient'
import { GET_BOOKMARK, GET_BOOKMARKS } from '~/graphql/queries/bookmarks'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_TAGS } from '~/graphql/queries/tags'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import type { GetBookmarkQuery } from '~/graphql/typeSlut'
import { CommentType } from '~/graphql/typeSlut'

//export const dynamic = 'force-static'

export default async function BookmarkPage({ params: { id } }) {
  const client = getClient()

  await Promise.all([
    client.query({ query: GET_VIEWER }),
    client.query({ query: GET_BOOKMARKS }),
    client.query({ query: GET_TAGS }),

    client.query<GetBookmarkQuery>({
      query: GET_BOOKMARK,
      variables: { id },
    }),

    client.query({
      query: GET_COMMENTS,
      variables: { refId: id, type: CommentType.Bookmark },
    }),
  ])

  return (
    <ListDetailView
      list={<BookmarksList />}
      hasDetail
      detail={
        <React.Suspense fallback={<LoadingSpinner />}>
          <BookmarkDetail id={id} />
        </React.Suspense>
      }
    />
  )
}
