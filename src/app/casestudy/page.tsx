import { CaseList } from '~/components/Case/CaseList'
import { ListDetailView } from '~/components/Layouts'

export default async function CaseIndex() {
  return <ListDetailView list={<CaseList />} hasDetail={false} detail={null} />
}
