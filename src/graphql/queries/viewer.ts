import { gql } from "@apollo/client"

import { UserInfoFrag } from "~/graphql/fragments/user"
import { UserSettingsFrag } from "../fragments/user"

export const GET_VIEWER = gql`
  query viewer {
    viewer {
      ...UserInfo
    }
  }
  ${UserInfoFrag}
`

export const GET_VIEWER_SETTINGS = gql`
  query getViewerWithSettings {
    viewer {
      ...UserInfo
      ...UserSettings
    }
  }
  ${UserInfoFrag}
  ${UserSettingsFrag}
`
