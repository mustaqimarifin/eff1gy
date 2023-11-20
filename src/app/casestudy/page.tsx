import { CaseList } from '~/components/Case/CaseList'
import { ListDetailView } from '~/components/Layouts'
import type { CaseStudy } from '~/components/Posts/BlogDetail'
import { getAllCaseStudy } from '~/lib/sanity/sanity.client'

export default async function CaseIndex() {
  const cases: CaseStudy[] = await getAllCaseStudy()

  if (!cases) {
    return { notFound: true }
  }

  return (
    <ListDetailView
      list={<CaseList cases={cases} />}
      hasDetail={false}
      detail={null}
    />
  )
}
