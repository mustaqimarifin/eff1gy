import Mdx from '~/app/mdxrsc'
import { CaseDetail } from '~/components/Case/CaseDetail'
import { CaseList } from '~/components/Case/CaseList'
import { ListDetailView } from '~/components/Layouts'
import type { CaseStudy } from '~/components/Posts/BlogDetail'
import { HiddenCounter } from '~/lib/actions'
import { getAllCaseStudy, getCaseBySlug } from '~/lib/sanity/sanity.client'

export const dynamic = 'force-static'

export async function generateStaticParams() {
  const cases: CaseStudy[] = await getAllCaseStudy()

  return cases.map((post) => ({
    slug: post.slug,
  }))
}

export default async function CaseStudy({ params: { slug } }) {
  const cases: CaseStudy[] = await getAllCaseStudy()

  const casestudy: CaseStudy = await getCaseBySlug(slug)

  if (!casestudy) {
    return { notFound: true }
  }

  return (
    <ListDetailView
      list={<CaseList cases={cases} />}
      hasDetail
      detail={
        <CaseDetail casestudy={casestudy}>
          <HiddenCounter id={casestudy.id} />
          <Mdx source={casestudy.content} />{' '}
        </CaseDetail>
      }
    />
  )
}
