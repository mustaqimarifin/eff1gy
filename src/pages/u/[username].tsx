import * as React from 'react'

import { ListDetailView } from '~/components/Layouts'
import { UserDetail } from '~/components/UserProfile/UserDetail'

export default function UserPage({ id }) {
  return (
    <ListDetailView list={null} hasDetail detail={<UserDetail id={id} />} />
  )
}

export async function getServerSideProps({ params: { username } }) {
  return {
    props: {
      username,
    },
  }
}
