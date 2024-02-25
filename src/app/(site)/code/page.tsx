import { CaseList } from "~/components/Case/CaseList";
import { ListDetailView } from "~/components/Layouts";
import { getAllCases } from "~/lib/sanity/client";

export const revalidate = 3600;

export default async function CaseIndex() {
	const cases = await getAllCases();
	return <ListDetailView list={<CaseList cases={cases} />} hasDetail={false} detail={null} />;
}
