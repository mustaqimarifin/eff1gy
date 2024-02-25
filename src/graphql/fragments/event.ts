import { gql } from "@apollo/client";

export const EventCoreFragment = gql`
  fragment EventCore on Event {
    __typename
    id
    count
  }
`;

export const EventListItemFragment = gql`
  fragment EventListItem on Event {
    ...EventCore
  }
  ${EventCoreFragment}
`;

export const EventDetailFragment = gql`
  fragment EventDetail on Event {
    ...EventCore
    reactionCount
    viewerHasReacted
  }
  ${EventCoreFragment}
`;
