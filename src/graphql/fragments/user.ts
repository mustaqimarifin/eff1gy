import { gql } from '@apollo/client'

export const UserInfoFragment = gql`
  fragment UserInfo on User {
    __typename
    id
    username
    image
    name
    role
    isViewer
    isAdmin
  }
`

export const UserSettingsFragment = gql`
  fragment UserSettings on User {
    email
    pendingEmail
  }
`
