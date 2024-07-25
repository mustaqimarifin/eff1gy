import { ListDetailView } from "~/components/Layouts";
import { StackDetail } from "~/components/Stack/StackDetail";
import { StackList } from "~/components/Stack/StackList";

interface StackProps {
	params: {
		slug: string;
	};
}
export default function StackPage(props: StackProps) {
	const { slug } = props.params;

	return <ListDetailView list={<StackList />} hasDetail detail={<StackDetail slug={slug} />} />;
}
