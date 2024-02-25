import { useMutation } from "@apollo/client";

import { EditBookmarkDialog } from "~/components/Bookmarks/EditBookmarkDialog";
import Button from "~/components/Button";
import { TOGGLE_REACTION } from "~/graphql/mutations/reactions";
import { ADD_VIEW } from "~/graphql/mutations/view";
import { GET_BOOKMARK } from "~/graphql/queries/bookmarks";
import type { Bookmark } from "~/graphql/typeSlut";
import { ReactionType, ViewType, useToggleReactionMutation, useViewerQuery } from "~/graphql/typeSlut";

import { ReactionButton } from "../Button/ReactionButton";
/* function getBookmarkView(bookmark: Bookmark) {
	const [addView, { loading }] = useMutation(ADD_VIEW);

	function handleClick() {
		if (loading) return;

		addView({
			variables: {
				refId: bookmark.id,
				type: ViewType.Bookmark,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Bookmark",
					...bookmark,
					count: bookmark.count + 1,
				},
			},
			update(cache, { data: { addView } }) {
				cache.writeQuery({
					query: GET_BOOKMARK,
					variables: { id: bookmark.id },
					data: {
						bookmark: {
							...bookmark,
							...addView,
						},
					},
				});
			},
		});
	}

	return <Button id={bookmark.id} loading={loading} count={bookmark.count} onClick={handleClick} />;
}
 */
function getReactionButton(bookmark: Bookmark) {
	const [toggleReaction, { loading }] = useMutation(TOGGLE_REACTION);

	function handleClick() {
		if (loading) return;

		toggleReaction({
			variables: {
				refId: bookmark.id,
				type: ReactionType.Bookmark,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleReaction: {
					__typename: "Bookmark",
					...bookmark,
					reactionCount: bookmark.viewerHasReacted ? bookmark.reactionCount - 1 : bookmark.reactionCount + 1,
					viewerHasReacted: !bookmark.viewerHasReacted,
				},
			},
			update(cache, { data: { toggleReaction } }) {
				cache.writeQuery({
					query: GET_BOOKMARK,
					variables: { id: bookmark.id },
					data: {
						bookmark: {
							...bookmark,
							...toggleReaction,
						},
					},
				});
			},
		});
	}

	return (
		<ReactionButton
			id={bookmark.id}
			loading={loading}
			count={bookmark.reactionCount}
			hasReacted={bookmark.viewerHasReacted}
			onClick={handleClick}
		/>
	);
}

export function BookmarkActions({ bookmark }) {
	const { data } = useViewerQuery();
	return (
		<div className="flex items-center space-x-2">
			{getReactionButton(bookmark)}
			

			{data?.viewer?.isAdmin && (
				<>
					<EditBookmarkDialog bookmark={bookmark} trigger={<Button data-cy="open-edit-bookmark-dialog">Edit</Button>} />
				</>
			)}
		</div>
	);
}
