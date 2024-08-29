import { BitList } from "~/components/Case/BitList"
import { allBits } from "~/lib/sanity/client"

export const revalidate = 3600

export default async function CaseIndex() {
	return <BitList bits={allBits} />
}
