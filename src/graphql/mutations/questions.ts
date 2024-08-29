import { gql } from "@apollo/client"

import { QuestionDetailFrag } from "../fragments/question"

export const EDIT_QUESTION = gql`
  mutation editQuestion($id: ID!, $data: EditQuestionInput!) {
    editQuestion(id: $id, data: $data) {
      ...QuestionDetail
    }
  }
  ${QuestionDetailFrag}
`

export const DELETE_QUESTION = gql`
  mutation deleteQuestion($id: ID!) {
    deleteQuestion(id: $id)
  }
`

export const ADD_QUESTION = gql`
  mutation addQuestion($data: AddQuestionInput!) {
    addQuestion(data: $data) {
      ...QuestionDetail
    }
  }
  ${QuestionDetailFrag}
`
