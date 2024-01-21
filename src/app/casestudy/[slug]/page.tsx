import { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { CaseDetail } from '~/components/Case/CaseDetail'
import { CaseList } from '~/components/Case/CaseList'
import { ListDetailView } from '~/components/Layouts'
import type { CaseStudy } from '~/components/Posts/PostDetail'
import { ViewType } from '~/graphql/typeSlut'
import { HiddenCounter } from '~/lib/actions'
import { getAllCases, getCase } from '~/lib/sanity/client'

//export const revalidate = 3600

export async function generateStaticParams() {
  const cases = await getAllCases()

  return cases.map((post) => ({
    slug: post.slug,
  }))
}

export default async function CaseStudyPage({ params: { slug } }) {
  const casestudy: CaseStudy = await getCase(slug)

  if (!casestudy) {
    return { notFound: true }
  }

  return (
    <ListDetailView
      list={<CaseList />}
      hasDetail
      detail={
        <CaseDetail casestudy={casestudy}>
          <HiddenCounter refId={casestudy?.slug} type={ViewType.Case} />
          <Suspense>
            {' '}
            <Mdx source={casestudy?.content} />
          </Suspense>
        </CaseDetail>
      }
    />
  )
}
