import { gql } from "@apollo/client"

import { CommentInfoFrag } from "~/graphql/fragments/comment"

export const ADD_COMMENT = gql`
  mutation addComment($refId: ID!, $parentId: String, $type: CommentType!, $text: String!) {
    addComment(refId: $refId, parentId: $parentId, type: $type, text: $text) {
      ...CommentInfo
    }
  }
  ${CommentInfoFrag}
`

export const EDIT_COMMENT = gql`
  mutation editComment($id: ID!, $text: String!) {
    editComment(id: $id, text: $text) {
      ...CommentInfo
    }
  }
  ${CommentInfoFrag}
`

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(id: $id)
  }
`
