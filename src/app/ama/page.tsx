'use client'
import * as React from 'react'

import { QuestionsList } from '~/components/AMA/QuestionsList'
import { ListDetailView } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { getClient } from '~/components/Provider/ApolloClient'
import { GET_QUESTIONS } from '~/graphql/queries/questions'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import {
  QuestionStatus,
  useGetQuestionQuery,
  useGetQuestionsQuery,
  useViewerQuery,
} from '~/graphql/typeSlut'

export const dynamic = 'force-dynamic'

export default function QuestionIndex() {
  return (
    <ListDetailView list={<QuestionsList />} hasDetail={false} detail={null} />
  )
}
