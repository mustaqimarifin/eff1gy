import Mdx from '~/app/mdxrsc'
import { AppDissectionDetail } from '~/components/AppDissection/AppDissectionDetail'
import { AppDissectionList } from '~/components/AppDissection/AppDissectionList'
import { ListDetailView } from '~/components/Layouts'
import { CaseStudy } from '~/components/Posts/BlogDetail'
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
  //const { mdx } = await mdxToCode(casestudy.content)

  return (
    <ListDetailView
      list={<AppDissectionList cases={cases} />}
      hasDetail
      detail={
        <AppDissectionDetail casestudy={casestudy}>
          <Mdx source={casestudy.content} />{' '}
        </AppDissectionDetail>
      }
    />
  )
}
