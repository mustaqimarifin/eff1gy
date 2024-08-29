//import lazy from "next/dynamic"
import { Suspense } from "react"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import StackList from "~/components/Stack/StackList"

export const metadata = {
	title: "Stack",
}

//const StackList = lazy(() => import("~/components/Stack/StackList"))
export default function StackIndex() {
	return (
		<Suspense fallback={<LoadingSpinner />}>
			<StackList />
		</Suspense>
	)
}
