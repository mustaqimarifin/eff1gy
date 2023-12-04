import { ListDetailView } from '~/components/Layouts'
import { PostsList } from '~/components/Posts/PostsList'

export const dynamic = 'force-dynamic'

export default async function PostIndex() {
  return <ListDetailView list={<PostsList />} hasDetail={false} detail={null} />
}
