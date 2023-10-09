import * as React from 'react'
import { AppDissectionDetail } from '~/components/AppDissection/AppDissectionDetail'
import { AppDissectionList } from '~/components/AppDissection/AppDissectionList'
import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { MDSEX } from '~/components/MarkdownRenderer'
import { mdxToCode } from '~/components/MarkdownRenderer/Mdx'
import { CaseStudy } from '~/components/Posts/BlogDetail'
import { withProviders } from '~/components/Providers/withProviders'
import { baseUrl } from '~/config/seo'
import designDetailsPosts, { DesignDetailsPost } from '~/data/appDissections'
import { caseSlugsQuery, designIndexQuery } from '~/lib/sanity/queries'
import { getAllCaseStudy, getCaseBySlug } from '~/lib/sanity/sanity.client'
import { sanityClient } from '~/lib/sanity/server'
import { NextSeo } from 'next-seo'
import removeMd from 'remove-markdown'

interface Props {
  casestudy: CaseStudy
}

function AppDissectionPage({ casestudy }: Props) {
  if (!casestudy) return <Detail.Null />

  if (casestudy) {
    return (
      <>
        <NextSeo
          title={`${casestudy.title} · App Dissection`}
          description={casestudy.overview}
          openGraph={{
            url: `${baseUrl}/app-dissection/${casestudy.slug}`,
            title: casestudy.title,
            description: removeMd(casestudy.overview),
            site_name: 'App Dissection',
            images: [
              {
                url: `${baseUrl}/static/og/app-dissection.png`,
                alt: 'App Dissection',
              },
            ],
          }}
        />

        <AppDissectionDetail casestudy={casestudy}>
          <MDSEX mdx={casestudy.content} />
        </AppDissectionDetail>
      </>
    )
  }

  return null
}

export async function getStaticPaths() {
  const paths = await sanityClient.fetch(caseSlugsQuery)
  return {
    paths: paths.map((slug: string) => ({ params: { slug } })) || [],
    fallback: false,
  }
}

export async function getStaticProps({ params, preview = false }) {
  const casestudy: CaseStudy = await getCaseBySlug(params.slug)

  if (!casestudy) {
    return { notFound: true }
  }

  const { mdx } = await mdxToCode(casestudy.content)

  return {
    props: {
      casestudy: {
        ...casestudy,
        content: mdx,
      },
    },
  }
}
AppDissectionPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<AppDissectionList />} hasDetail detail={page} />
    </SiteLayout>
  )
})

export default AppDissectionPage
