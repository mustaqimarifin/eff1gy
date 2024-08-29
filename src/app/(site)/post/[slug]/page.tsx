import { Suspense } from "react"

import { ListDetailView } from "~/components/Layouts"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PostEditor } from "~/components/Posts/Editor/PostEditor"
import { PostDetail } from "~/components/Posts/PostDetail"
import { PostsList } from "~/components/Posts/PostsList"
import { query } from "~/components/Provider/ApolloClient"
import { GetPostDocument, ViewType } from "~/gql/typeSlut"
import { HiddenCounter } from "~/lib/actions"

export default async function PostPage({
	params: { slug },
}: { params: { slug: string } }) {
	const { data } = await query({ query: GetPostDocument, variables: { slug } })
	if (data?.post && !data.post.publishedAt)
		return (
			<Suspense fallback={<LoadingSpinner />}>
				<PostEditor slug={slug} />
			</Suspense>
		)
	return (
		<ListDetailView
			list={<PostsList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<PostDetail slug={slug} />
					<HiddenCounter refId={data?.post?.id} type={ViewType.Post} />
				</Suspense>
			}
		/>
	)
}
