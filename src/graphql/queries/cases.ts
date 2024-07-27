import { gql } from "@apollo/client"

import { CaseDetailFrag, CaseListItemFrag } from "~/graphql/fragments/case"

export const GET_CASES = gql`
  query getCases {
    cases {
      ...CaseListItem
    }
  }
  ${CaseListItemFrag}
`

export const GET_CASE = gql`
  query getCase($slug: String!) {
    case(slug: $slug) {
      ...CaseDetail
    }
  }
  ${CaseDetailFrag}
`
