"use client"
import { useSession } from "next-auth/react"
import { Suspense } from "react"

import { ListDetailView } from "~/components/Layouts"
import { Detail } from "~/components/ListDetail/Detail"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PostEditor } from "~/components/Posts/Editor/PostEditor"
import { PostsList } from "~/components/Posts/PostsList"

// export const dynamic = "force-dynamic";
interface EditProps {
	params: {
		slug: string
	}
}
export default function EditPage(props: EditProps) {
	const { slug } = props.params
	const { data: session } = useSession()
	if (!session?.isAdmin) return <ListDetailView list={<PostsList />} hasDetail detail={<Detail.Null />} />
	return (
		<ListDetailView
			list={<PostsList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<PostEditor slug={slug} />
				</Suspense>
			}
		/>
	)
}
