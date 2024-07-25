import { ListDetailView } from "~/components/Layouts";
import { StackList } from "~/components/Stack/StackList";

export const metadata = {
	title: "Stack",
};
/* export default function StackIndex() {
  return <ListDetailView list={<StackList />} hasDetail={false} detail={null} />
}
 */
export default function StackIndex() {
	return <StackList />;
}
