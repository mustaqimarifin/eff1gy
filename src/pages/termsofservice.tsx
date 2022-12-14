import { NextSeo } from 'next-seo'
import * as React from 'react'

import TOS from '~/components/Home/TOS'
import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { withProviders } from '~/components/MarkdownRenderer/Providers/withProviders'
import routes from '~/config/routes'

function Terms() {
  return (
    <NextSeo
      title={routes.terms.seo.title}
      description={routes.terms.seo.description}
      openGraph={routes.terms.seo.openGraph}
    />
  )
}

Terms.getLayout = withProviders(function getLayout(
  page: React.ReactElement<any, string | React.JSXElementConstructor<any>>
) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={<TOS />} />
    </SiteLayout>
  )
})

export default Terms
