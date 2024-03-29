import { gql } from "@apollo/client";

import { UserInfoFragment } from "./user";

export const CommentInfoFragment = gql`
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
  ${UserInfoFragment}
`;
