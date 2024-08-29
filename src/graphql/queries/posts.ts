import { gql } from "@apollo/client"

import { PostDetailFrag, PostListItemFrag } from "~/graphql/fragments/post"

export const GET_POSTS = gql`
  query getPosts($filter: PostFilter) {
    posts(filter: $filter) {
      ...PostListItem
    }
  }
  ${PostListItemFrag}
`

export const GET_POST = gql`
  query getPost($slug: String!) {
    post(slug: $slug) {
      ...PostDetail
    }
  }
  ${PostDetailFrag}
`
