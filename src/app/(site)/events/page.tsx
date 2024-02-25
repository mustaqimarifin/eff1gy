import { EventList } from "~/components/Events/EventList";
import { ListDetailView } from "~/components/Layouts";

export default function EventIndex() {
	return <ListDetailView list={<EventList />} hasDetail={false} detail={null} />;
}
