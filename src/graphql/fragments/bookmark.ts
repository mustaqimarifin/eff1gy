import { gql } from "@apollo/client"

export const BookmarkCoreFrag = gql`
  fragment BookmarkCore on Bookmark {
    __typename
    id
    url
    host
    title
    description
    faviconUrl
    count
  }
`

export const BookmarkListItemFrag = gql`
  fragment BookmarkListItem on Bookmark {
    ...BookmarkCore
  }
  ${BookmarkCoreFrag}
`

export const BookmarkDetailFrag = gql`
  fragment BookmarkDetail on Bookmark {
    ...BookmarkCore
    reactionCount
    viewerHasReacted
    tags {
      name
    }
  }
  ${BookmarkCoreFrag}
`

export const BookmarksConnectionFrag = gql`
  fragment BookmarksConnection on BConnection {
    pageInfo {
      hasNextPage
      totalCount
      endCursor
    }
    edges {
      cursor
      node {
        ...BookmarkListItem
      }
    }
  }
  ${BookmarkListItemFrag}
`
