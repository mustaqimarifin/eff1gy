import { gql } from "@apollo/client"

export const UserInfoFrag = gql`
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

export const UserSettingsFrag = gql`
  fragment UserSettings on User {
    email
    pendingEmail
  }
`
