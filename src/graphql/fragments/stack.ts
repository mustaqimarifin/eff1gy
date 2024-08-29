import { gql } from "@apollo/client"

import { UserInfoFrag } from "./user"

export const StackCoreFrag = gql`
  fragment StackCore on Stack {
    __typename
    id
    name
    image
    url
    slug
    count
  }
`

export const StackListItemFrag = gql`
  fragment StackListItem on Stack {
    ...StackCore
  }
  ${StackCoreFrag}
`

export const StackDetailFrag = gql`
  fragment StackDetail on Stack {
    ...StackCore
    createdAt
    description
    reactionCount

    viewerHasReacted
    usedByViewer
    usedBy {
      ...UserInfo
    }
    tags {
      name
    }
  }
  ${StackCoreFrag}
  ${UserInfoFrag}
`

export const StacksConnectionFrag = gql`
  fragment StacksConnection on SConnection {
    pageInfo {
      hasNextPage
      totalCount
      endCursor
    }
    edges {
      cursor
      node {
        ...StackListItem
      }
    }
  }
  ${StackListItemFrag}
`
