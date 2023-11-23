import type { Metadata } from 'next'
import React from 'react'

import { QuestionDetail } from '~/components/AMA/QuestionDetail'
import { QuestionsList } from '~/components/AMA/QuestionsList'
import { ListDetailView } from '~/components/Layouts'
import { LoadingSpinner } from '~/components/LoadingSpinner'

export default async function QuestionPage({ params: { id } }) {
  return (
    <ListDetailView
      list={<QuestionsList />}
      hasDetail
      detail={
        <React.Suspense fallback={<LoadingSpinner />}>
          <QuestionDetail id={id} />
        </React.Suspense>
      }
    />
  )
}
