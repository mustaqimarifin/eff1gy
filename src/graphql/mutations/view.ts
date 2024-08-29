import { gql } from "@apollo/client"

export const ADD_VIEW = gql`
  mutation addView($refId: ID!, $type: ViewType!) {
    addView(refId: $refId, type: $type) {
      ... on Stack {
        id
        count
      }
      ... on Bookmark {
        id
        count
      }
      ... on Question {
        id
        count
      }
      ... on Blog {
        id
        count
      }
    }
  }
`
