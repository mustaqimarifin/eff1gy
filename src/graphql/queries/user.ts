import { gql } from "@apollo/client"

import { UserInfoFrag } from "~/graphql/fragments/user"

export const GET_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      ...UserInfo
    }
  }
  ${UserInfoFrag}
`
