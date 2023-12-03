import Mdx from '~/app/mdxrsc'
import { CaseDetail } from '~/components/Case/CaseDetail'
import { CaseList } from '~/components/Case/CaseList'
import { ListDetailView } from '~/components/Layouts'
import { HiddenCounter } from '~/lib/actions'
import { getCase, getCases } from '~/lib/sanity/server'

export const revalidate = 3600

export async function generateStaticParams() {
  const cases = await getCases()

  return cases.map((post) => ({
    slug: post.slug,
  }))
}

export default async function CaseStudy({ params: { slug } }) {
  const casestudy = await getCase(slug)

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
          <Mdx source={casestudy?.content} />
        </CaseDetail>
      }
    />
  )
}
