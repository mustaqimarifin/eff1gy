import { Suspense } from "react";

import { BookmarkDetail } from "~/components/Bookmarks/BookmarkDetail";
import { BookmarksList } from "~/components/Bookmarks/BookmarksList";
import { ListDetailView } from "~/components/Layouts";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { PreloadQuery, query } from "~/components/Provider/ApolloClient";
import { GET_BOOKMARK } from "~/graphql/queries/bookmarks";
import { GET_COMMENTS } from "~/graphql/queries/comments";
import { GET_TAGS } from "~/graphql/queries/tags";
import { GET_VIEWER } from "~/graphql/queries/viewer";

import { CommentType, ViewType } from "~/graphql/typeSlut";

import { HiddenCounter } from "~/lib/actions";

// export const dynamic = 'force-dynamic'
interface BkProps {
	params: {
		id: string;
	};
} /* 
export default function BookmarkPage(props: BkProps) {
  const { id } = props.params
     await Promise.allSettled([
    client.query({ query: GET_VIEWER }),
    client.query({
      query: GET_BOOKMARKS,
    }),
    client.query({ query: GET_TAGS }),

    client.query({
      query: GET_BOOKMARK,
      variables: { id },
      context: { fetchOptions: { cache: 'no-store' } },
    }),

    client.query({
      query: GET_COMMENTS,
      variables: { refId: id, type: CommentType.Bookmark },
      context: { fetchOptions: { cache: 'no-store' } },
    }),
  ])
 
  return (
    <ListDetailView
      list={<BookmarksList />}
      hasDetail
      detail={(
        <Suspense fallback={<LoadingSpinner />}>
          <BookmarkDetail id={id}>
            <HiddenCounter refId={id} type={ViewType.Bookmark} />
          </BookmarkDetail>
        </Suspense>
      )}
    />
  )
}
 */

export default async function BookmarkPage(props: BkProps) {
	const { id } = props.params;

	await Promise.all([
		query({ query: GET_VIEWER }),
		query({ query: GET_TAGS }),
		query({ query: GET_COMMENTS, variables: { refId: id, type: CommentType.Bookmark } }),
	]);
	return (
		<ListDetailView
			list={
				<PreloadQuery query={GET_BOOKMARK} variables={{ id: id }}>
					<Suspense fallback={""}>
						<BookmarkDetail id={id} />
					</Suspense>
				</PreloadQuery>
			}
			hasDetail={false}
			detail={null}
		/>
	);
}
