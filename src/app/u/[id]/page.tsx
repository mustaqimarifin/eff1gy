import * as React from 'react'

import { ListDetailView } from '~/components/Layouts'
import { getClient } from '~/components/Provider/ApolloClient'
import { UserDetail } from '~/components/UserProfile/UserDetail'
import { GET_USER } from '~/graphql/queries/user'
import { GET_VIEWER } from '~/graphql/queries/viewer'

export default async function UserPage({ params: { id } }) {
  const client = getClient()
  await Promise.allSettled([
    client.query({ query: GET_VIEWER }),

    client.query({
      query: GET_USER,
      variables: { id },
    }),
  ])

  return (
    <ListDetailView list={null} hasDetail detail={<UserDetail id={id} />} />
  )
}
