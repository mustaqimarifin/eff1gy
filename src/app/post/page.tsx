import { ListDetailView } from '~/components/Layouts'
import { PostsList } from '~/components/Posts/PostsList'

export const revalidate = 30

export default async function PostIndex() {
  return <ListDetailView list={<PostsList />} hasDetail={false} detail={null} />
}
