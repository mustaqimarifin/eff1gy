import { AppDissectionList } from '~/components/AppDissection/AppDissectionList'
import { ListDetailView } from '~/components/Layouts'
import { CaseStudy } from '~/components/Posts/BlogDetail'
import { getAllCaseStudy } from '~/lib/sanity/sanity.client'

export default async function CaseIndex() {
  const cases: CaseStudy[] = await getAllCaseStudy()

  if (!cases) {
    return { notFound: true }
  }

  return (
    <ListDetailView
      list={<AppDissectionList cases={cases} />}
      hasDetail={false}
      detail={null}
    />
  )
}
