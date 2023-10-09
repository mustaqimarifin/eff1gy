import * as React from 'react'
import { ListDetailView } from '~/components/Layouts'
import { UserSettings } from '~/components/UserSettings'
import routes from '~/config/routes'
import { NextSeo } from 'next-seo'

export default function Settings() {
  return (
    <>
      <NextSeo
        title={routes.settings.seo.title}
        description={routes.settings.seo.description}
        openGraph={routes.settings.seo.openGraph}
      />
      <ListDetailView list={null} hasDetail detail={<UserSettings />} />
    </>
  )
}
