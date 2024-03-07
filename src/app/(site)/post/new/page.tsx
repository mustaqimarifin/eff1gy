"use client";
import { Suspense } from "react";
import { useViewerQuery } from "~/graphql/typeSlut";

import { ListDetailView } from "~/components/Layouts";
import { Detail } from "~/components/ListDetail/Detail";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { PostEditor } from "~/components/Posts/Editor/PostEditor";
import { PostsList } from "~/components/Posts/PostsList";

export const dynamic = "force-dynamic";

export default function NewPostPage() {
	const { data } = useViewerQuery();
	if (!data?.viewer.isAdmin) return <Detail.Null />;
	return (
		<ListDetailView
			list={<PostsList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<PostEditor />
				</Suspense>
			}
		/>
	);
}
