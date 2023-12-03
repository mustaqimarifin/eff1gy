import { CaseList } from '~/components/Case/CaseList'
import { ListDetailView } from '~/components/Layouts'
import { getCases } from '~/lib/sanity/server'

export default async function CaseIndex() {
  const cases = await getCases()

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
