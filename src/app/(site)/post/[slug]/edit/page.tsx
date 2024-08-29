"use client"
import { useQuery } from "@apollo/client"
import { Suspense } from "react"

import { ListDetailView } from "~/components/Layouts"
import { Detail } from "~/components/ListDetail/Detail"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PostEditor } from "~/components/Posts/Editor/PostEditor"
import { PostsList } from "~/components/Posts/PostsList"
import { ViewerDocument } from "~/gql/typeSlut"

// export const dynamic = "force-dynamic";
interface EditProps {
	params: {
		slug: string
	}
}
export default function EditPage(props: EditProps) {
	const { slug } = props.params
	const { data } = useQuery(ViewerDocument)
	if (!data?.viewer?.isAdmin)
		return <ListDetailView list={<PostsList />} hasDetail detail={<Detail.Null />} />
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
