import { gql } from "@apollo/client"

import { CommentInfoFrag } from "~/graphql/fragments/comment"

export const GET_COMMENTS = gql`
  query getComments($refId: ID!, $type: CommentType!) {
    comments(refId: $refId, type: $type) {
      ...CommentInfo
    }
  }
  ${CommentInfoFrag}
`
