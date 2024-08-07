import { gql } from "@apollo/client"

export const TOGGLE_REACTION = gql`
  mutation toggleReaction($refId: ID!, $type: ReactionType!) {
    toggleReaction(refId: $refId, type: $type) {
      ... on Stack {
        id
        reactionCount
        viewerHasReacted
      }
      ... on Bookmark {
        id
        url
        reactionCount
        viewerHasReacted
      }
      ... on Question {
        id
        reactionCount
        viewerHasReacted
      }
      ... on Blog {
        id
        reactionCount
        viewerHasReacted
      }
      ... on Event {
        id
        reactionCount
        viewerHasReacted
      }
      ... on Case {
        id
        reactionCount
        viewerHasReacted
      }
    }
  }
`
