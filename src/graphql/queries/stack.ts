import { gql } from "@apollo/client"

import { UserInfoFrag } from "~/graphql/fragments/user"
import { StackDetailFrag, StacksConnectionFrag } from "../fragments/stack"

export const GET_STACKS = gql`
  query getStacks($first: Int, $after: String) {
    stacks(first: $first, after: $after) {
      ...StacksConnection
    }
  }
  ${StacksConnectionFrag}
`

export const GET_STACK = gql`
  query getStack($slug: String!) {
    stack(slug: $slug) {
      ...StackDetail
    }
  }
  ${StackDetailFrag}
  ${UserInfoFrag}
`
