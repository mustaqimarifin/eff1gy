import { EventList } from '~/components/Events/EventList'
import { ListDetailView } from '~/components/Layouts'

export const dynamic = 'force-dynamic'

export default async function EventIndex() {
  return <ListDetailView list={<EventList />} hasDetail={false} detail={null} />
}
