import * as React from 'react'
import { ListDetailView } from '~/components/Layouts'
import { SecurityChecklist } from '~/components/SecurityChecklist'
import routes from '~/config/routes'
import { NextSeo } from 'next-seo'

export default function SecurityChecklistPage() {
  return (
    <>
      <NextSeo
        title={routes.security.seo.title}
        description={routes.security.seo.description}
        openGraph={routes.security.seo.openGraph}
      />

      <ListDetailView list={null} hasDetail detail={<SecurityChecklist />} />
    </>
  )
}
