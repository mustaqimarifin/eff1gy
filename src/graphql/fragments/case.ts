import { gql } from "@apollo/client"

export const CaseCoreFrag = gql`
  fragment CaseCore on Case {
    __typename
    id
    title
    date
    slug
    count
  }
`

export const CaseListItemFrag = gql`
  fragment CaseListItem on Case {
    ...CaseCore
  }
  ${CaseCoreFrag}
`

export const CaseDetailFrag = gql`
  fragment CaseDetail on Case {
    ...CaseCore
    reactionCount
    viewerHasReacted
  }
  ${CaseCoreFrag}
`
