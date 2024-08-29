import { Suspense } from "react"
import { ListDetailView } from "~/components/Layouts"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { StackDetail } from "~/components/Stack/StackDetail"
import StackList from "~/components/Stack/StackList"
import { ViewType } from "~/gql/typeSlut"
import { HiddenCounter } from "~/lib/actions"

interface StackProps {
	params: {
		slug: string
	}
}

export default function StackPage(props: StackProps) {
	const { slug } = props.params
	return (
		<ListDetailView
			list={<StackList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<StackDetail slug={slug} />
					<HiddenCounter refId={slug} type={ViewType.Stack} />
				</Suspense>
			}
		/>
	)
}
