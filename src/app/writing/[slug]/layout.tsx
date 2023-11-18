import { ListDetailView } from '~/components/Layouts'
import { PostsList } from '~/components/Writing/PostsList'

export default function Layout({ children }) {
  return <ListDetailView list={<PostsList />} hasDetail detail={children} />
}
