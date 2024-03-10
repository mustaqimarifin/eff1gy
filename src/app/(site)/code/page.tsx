import { BitList } from "~/components/Case/BitList";
import { ListDetailView } from "~/components/Layouts";
import { allBits } from "~/lib/sanity/client";

//export const revalidate = 3600;

export default async function CaseIndex() {
	return <ListDetailView list={<BitList bits={allBits} />} hasDetail={false} detail={null} />;
}
