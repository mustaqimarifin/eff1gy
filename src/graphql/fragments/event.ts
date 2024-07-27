import { gql } from "@apollo/client"

export const EventCoreFrag = gql`
  fragment EventCore on Event {
    __typename
    id
    count
  }
`
export const EventListItemFrag = gql`
  fragment EventListItem on Event {
    ...EventCore
  }
  ${EventCoreFrag}
`

export const EventDetailFrag = gql`
  fragment EventDetail on Event {
    ...EventCore
    reactionCount
    viewerHasReacted
  }
  ${EventCoreFrag}
`
