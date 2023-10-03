import * as React from 'react'
import { ListDetailView } from '~/components/Layouts'
import { UserDetail } from '~/components/UserProfile/UserDetail'
import { getContext } from '~/graphql/context'
import { GET_USER } from '~/graphql/queries/user'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import { addApolloState, initApolloClient } from '~/lib/apollo'

export default function UserPage({ id }) {
  return (
    <ListDetailView list={null} hasDetail detail={<UserDetail id={id} />} />
  )
}

export async function getServerSideProps({ params: { id }, req, res }) {
  const context = await getContext(req, res)
  const client = initApolloClient({ context })

  await Promise.all([
    client.query({ query: GET_VIEWER }),

    client.query({
      query: GET_USER,
      variables: { id },
    }),
  ])

  return addApolloState(client, {
    props: {
      id,
    },
  })
}
