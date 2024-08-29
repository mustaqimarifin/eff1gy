import { gql } from "@apollo/client"

import { UserInfoFrag } from "./user"

export const CommentInfoFrag = gql`
  fragment CommentInfo on Comment {
    __typename
    id
    parentId
    createdAt
    updatedAt
    text
    viewerCanEdit
    viewerCanDelete
    author {
      ...UserInfo
    }
  }
  ${UserInfoFrag}
`
