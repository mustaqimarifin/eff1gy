import { gql } from "@apollo/client"

import { UserInfoFrag } from "./user"

export const QuestionCoreFrag = gql`
  fragment QuestionCore on Question {
    __typename
    id
    title
    audioUrl
    waveform
    count
    createdAt
    author {
      ...UserInfo
    }
  }
  ${UserInfoFrag}
`

export const QuestionListItemFrag = gql`
  fragment QuestionListItem on Question {
    ...QuestionCore
  }
  ${QuestionCoreFrag}
`

export const QuestionDetailFrag = gql`
  fragment QuestionDetail on Question {
    ...QuestionCore
    description
    status
    viewerCanEdit
    viewerCanComment
    reactionCount

    viewerHasReacted
  }
  ${QuestionCoreFrag}
  ${UserInfoFrag}
`

export const QuestionsConnectionFrag = gql`
  fragment QuestionsConnection on QConnection {
    pageInfo {
      hasNextPage
      totalCount
      endCursor
    }
    edges {
      cursor
      node {
        ...QuestionListItem
      }
    }
  }
  ${QuestionListItemFrag}
`
