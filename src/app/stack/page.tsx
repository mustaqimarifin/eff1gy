import * as React from 'react'

import { ListDetailView } from '~/components/Layouts'
import { getClient } from '~/components/Provider/ApolloClient'
import { StackList } from '~/components/Stack/StackList'
import { GET_STACKS } from '~/graphql/queries/stack'
import { GET_VIEWER } from '~/graphql/queries/viewer'

//export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'Stack',
}
export default async function StackIndex() {
  const client = getClient()
  await Promise.allSettled([
    client.query({ query: GET_VIEWER }),
    client.query({ query: GET_STACKS }),
  ])
  return <ListDetailView list={<StackList />} hasDetail={false} detail={null} />
}
