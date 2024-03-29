import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import Button from "~/components/Button";
import { Input } from "~/components/Input";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { TagPicker } from "~/components/Tag/TagPicker";
import { GET_BOOKMARKS } from "~/graphql/queries/bookmarks";
import type { GetBookmarksQuery } from "~/graphql/typeSlut";
import { useAddBookmarkMutation, useGetBookmarksQuery } from "~/graphql/typeSlut";

import { nuts } from "../Provider/Toaster";

export function AddBookmarkForm({ closeModal }) {
	const [url, setUrl] = useState("");
	const [tag, setTag] = useState("web");
	const router = useRouter();
	const path = usePathname();

	const query = GET_BOOKMARKS;

	const [addBookmark, { loading }] = useAddBookmarkMutation();

	// fetch all bookmarks in the background so that we can update the cache
	// immediately when the bookmark is saved
	const _ = useGetBookmarksQuery();

	function onSubmit(e) {
		e.preventDefault();

		addBookmark({
			variables: { data: { url, tag } },
			update(cache, { data: { addBookmark } }) {
				const { bookmarks } = cache.readQuery<GetBookmarksQuery>({
					query,
				});
				return cache.writeQuery({
					query,
					data: {
						bookmarks: {
							...bookmarks,
							edges: [
								{
									__typename: "BookmarkEdge",
									cursor: addBookmark.id,
									node: addBookmark,
								},
								...bookmarks.edges,
							],
						},
					},
				});
			},
			onError(error) {
				// eslint-disable-next-line prettier/prettier
				error;
			},
		}).then(
			({
				data: {
					addBookmark: { id },
				},
			}) => {
				closeModal();
				// if I'm already viewing bookmarks, push me to the one I just created.
				// otherwise, this was triggered from the sidebar shortcut and
				// don't redirect
				if (path.indexOf("/bookmarks") >= 0) {
					return router.push(`/bookmarks/${id}`);
				}
				nuts.success("Bookmark created!", {
					icon: "🙀 ",
				});
			},
		);
	}

	function onUrlChange(e) {
		return setUrl(e.target.value);
	}

	function onKeyDown(e) {
		if (e.keyCode === 13 && e.metaKey) {
			return onSubmit(e);
		}
	}

	const tagFilter = (t) => {
		const allowedBookmarkTags = ["web", "lol", "portfolio"];
		return allowedBookmarkTags.indexOf(t.name) >= 0;
	};

	return (
		<form className="space-y-3 p-4" onSubmit={onSubmit}>
			<Input type="text" placeholder="Add a url..." value={url} onChange={onUrlChange} onKeyDown={onKeyDown} />

			<TagPicker filter={tagFilter} defaultValue={tag} onChange={setTag} />

			<div className="flex justify-end pt-24">
				<Button disabled={!url || loading} onClick={onSubmit}>
					{loading ? <LoadingSpinner /> : "Save"}
				</Button>
			</div>
		</form>
	);
}
