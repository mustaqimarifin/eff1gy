import { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { CaseDetail } from '~/components/Case/CaseDetail'
import { CaseList } from '~/components/Case/CaseList'
import { ListDetailView } from '~/components/Layouts'
import type { CaseStudy } from '~/components/Posts/PostDetail'
import { HiddenCounter } from '~/lib/actions'
import { sanityFetch } from '~/lib/sanity/client'
import { caseQuery, casesQuery } from '~/lib/sanity/queries'

//export const revalidate = 3600

export async function generateStaticParams() {
  const cases = await sanityFetch<CaseStudy[]>({
    query: casesQuery,
    tags: ['case-study'],
  })

  return cases.map((post) => ({
    slug: post.slug,
  }))
}

export default async function CaseStudy({ params: { slug } }) {
  const casestudy = await sanityFetch<CaseStudy>({
    query: caseQuery,
    params: { slug },
    tags: ['case-study'],
  })

  if (!casestudy) {
    return { notFound: true }
  }

  return (
    <ListDetailView
      list={<CaseList />}
      hasDetail
      detail={
        <CaseDetail casestudy={casestudy}>
          <HiddenCounter id={casestudy?.slug} />
          <Suspense>
            {' '}
            <Mdx source={casestudy?.content} />
          </Suspense>
        </CaseDetail>
      }
    />
  )
}
