import * as React from 'react'

import { BookmarkDetail } from '~/components/Bookmarks/BookmarkDetail'
import { BookmarksList } from '~/components/Bookmarks/BookmarksList'
import { ListDetailView } from '~/components/Layouts'
import { getClient } from '~/components/Provider/ApolloClient'
import { GET_BOOKMARK, GET_BOOKMARKS } from '~/graphql/queries/bookmarks'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_TAGS } from '~/graphql/queries/tags'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import { getBookmark } from '~/graphql/resolvers/queries/bookmarks'
import { getTags } from '~/graphql/resolvers/queries/tags'
import type { GetBookmarkQuery } from '~/graphql/typeSlut'
import {
  CommentType,
  GetBookmarkDocument,
  GetBookmarksDocument,
  GetCommentsDocument,
  GetTagsDocument,
  GetViewerWithSettingsDocument,
} from '~/graphql/typeSlut'

export const dynamic = 'force-static'

export default async function BookmarkPage({ params: { id } }) {
  const client = getClient()

  await Promise.all([
    client.query({ query: GetViewerWithSettingsDocument }),
    client.query({ query: GetBookmarksDocument }),
    client.query({ query: GetTagsDocument }),

    client.query<GetBookmarkQuery>({
      query: GetBookmarkDocument,
      variables: { id },
    }),

    client.query({
      query: GetCommentsDocument,
      variables: { refId: id, type: CommentType.Bookmark },
    }),
  ])

  return (
    <ListDetailView
      list={<BookmarksList />}
      hasDetail
      detail={
        <React.Suspense fallback={<>Loading...</>}>
          <BookmarkDetail id={id} />
        </React.Suspense>
      }
    />
  )
}
