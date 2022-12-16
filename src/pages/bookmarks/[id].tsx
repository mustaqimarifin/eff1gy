import * as React from 'react'

import { BookmarkDetail } from '~/components/Bookmarks/BookmarkDetail'
import { BookmarksList } from '~/components/Bookmarks/BookmarksList'
import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { withProviders } from '~/components/MarkdownRenderer/Providers/withProviders'
import { getContext } from '~/graphql/context'
import { GET_BOOKMARKS } from '~/graphql/queries/bookmarks'
import { GET_BOOKMARK } from '~/graphql/queries/bookmarks'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_TAGS } from '~/graphql/queries/tags'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import { CommentType } from '~/graphql/types.generated'
import { addApolloState, initApolloClient } from '~/lib/apollo'

function BookmarkPage({ id }) {
  return <BookmarkDetail id={id} />
}

export async function getServerSideProps({ params: { id }, req, res }) {
  const context = await getContext(req, res)
  const client = initApolloClient({ context })

  await Promise.all([
    client.query({ query: GET_VIEWER }),
    client.query({ query: GET_BOOKMARKS }),
    client.query({ query: GET_TAGS }),

    client.query({
      query: GET_BOOKMARK,
      variables: { id },
    }),

    client.query({
      query: GET_COMMENTS,
      variables: { refId: id, type: CommentType.Bookmark },
    }),
  ])

  return addApolloState(client, {
    props: {
      id,
    },
  })
}

BookmarkPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<BookmarksList />} hasDetail detail={page} />
    </SiteLayout>
  )
})

export default BookmarkPage
