'use client'
import * as React from 'react'

import { QuestionsList } from '~/components/AMA/QuestionsList'
import { ListDetailView } from '~/components/Layouts'

export const dynamic = 'force-dynamic'

export default function QuestionIndex() {
  return (
    <ListDetailView list={<QuestionsList />} hasDetail={false} detail={null} />
  )
}
