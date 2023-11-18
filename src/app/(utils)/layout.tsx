import { ListDetailView } from '~/components/Layouts'

export default function Layout({ children }) {
    return <ListDetailView list={null} hasDetail detail={children} />
}
