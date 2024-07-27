import { ListDetailView } from "~/components/Layouts"

export default function SiteLayout({ children }) {
	return <ListDetailView list={children} hasDetail={false} detail={null} />
}
