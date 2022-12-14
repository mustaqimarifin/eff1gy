import { gql } from '@apollo/client'

import { UserInfoFragment } from '~/graphql/fragments/user'

export const GET_USER = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      ...UserInfo
    }
  }
  ${UserInfoFragment}
`
