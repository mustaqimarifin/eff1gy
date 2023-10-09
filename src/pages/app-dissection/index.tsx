import * as React from 'react'
import { AppDissectionList } from '~/components/AppDissection/AppDissectionList'
import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { CaseStudy } from '~/components/Posts/BlogDetail'
import { withProviders } from '~/components/Providers/withProviders'
import routes from '~/config/routes'
import { designIndexQuery } from '~/lib/sanity/queries'
import { getClient } from '~/lib/sanity/server'
import { NextSeo } from 'next-seo'

function AppDissectionsPage() {
  return (
    <NextSeo
      title={routes.appDissection.seo.title}
      description={routes.appDissection.seo.description}
      openGraph={routes.appDissection.seo.openGraph}
    />
  )
}

AppDissectionsPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView
        list={<AppDissectionList />}
        hasDetail={false}
        detail={page}
      />
    </SiteLayout>
  )
})

export async function getStaticProps({ preview = false }) {
  const cases: CaseStudy[] = await getClient(preview).fetch(designIndexQuery)

  return { props: { cases } }
}

export default AppDissectionsPage
