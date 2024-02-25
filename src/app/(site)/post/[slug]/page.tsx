//import { redirect } from 'next/navigation'
import { Suspense } from "react";

//import Mdx from '~/app/mdxrsc'
import { ListDetailView } from "~/components/Layouts";
import { Detail } from "~/components/ListDetail/Detail";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { PostEditor } from "~/components/Posts/Editor/PostEditor";
import { PostDetail } from "~/components/Posts/PostDetail";
import { PostsList } from "~/components/Posts/PostsList";
import { getClient } from "~/components/Provider/ApolloClient";
import { GetPostDocument, ViewType } from "~/graphql/typeSlut";

import { HiddenCounter } from "~/lib/actions";

//export const dynamic = 'force-dynamic'

export default async function PostPage({ params: { slug } }: { params: { slug: string } }) {
	//const { data } = useGetPostQuery({ variables: { slug } })
	const client = getClient();
	const { data } = await client.query({ query: GetPostDocument, variables: { slug } });
	if (data?.post && !data.post.publishedAt) return <PostEditor slug={slug} />;
	return (
		<ListDetailView
			list={<PostsList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<PostDetail slug={slug}>
						<HiddenCounter refId={data?.post?.id} type={ViewType.Post} />
					</PostDetail>
				</Suspense>
			}
		/>
	);
}
