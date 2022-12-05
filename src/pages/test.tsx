import * as React from 'react'

import Test from '~/components/Home/Test'
import { ListDetailView } from '~/components/Layouts'

export default function Home() {
  return <ListDetailView list={null} hasDetail detail={<Test />} />
}
