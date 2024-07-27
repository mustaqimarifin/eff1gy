import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

import { useMutation, useQuery } from "@apollo/client"
import Button from "~/components/Button"
import { Input } from "~/components/Input"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { TagPicker } from "~/components/Tag/TagPicker"
import { AddBookmarkDocument, GetBookmarkDocument, GetBookmarksDocument, type GetBookmarksQuery } from "~/gql/typeSlut"
import { Nuts } from "../Provider/Toaster"

export function AddBookmarkForm({ closeModal }) {
	const [url, setUrl] = useState("")
	const [tag, setTag] = useState("web")
	const router = useRouter()
	const path = usePathname()

	const query = GetBookmarksDocument

	const [addBookmark, { loading }] = useMutation(AddBookmarkDocument)
	const _ = useQuery(GetBookmarkDocument)

	function onSubmit(e) {
		e.preventDefault()

		addBookmark({
			variables: { data: { url, tag } },
			update(cache, { data: { addBookmark } }) {
				const { bookmarks } = cache.readQuery<GetBookmarksQuery>({
					query,
				})
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
						__typename: "Query",
					},
				})
			},
			onError(error) {
				error
			},
		}).then(
			({
				data: {
					addBookmark: { id },
				},
			}) => {
				closeModal()
				// if I'm already viewing bookmarks, push me to the one I just created.
				// otherwise, this was triggered from the sidebar shortcut and
				// don't redirect
				if (path.includes("/bookmarks")) {
					return router.push(`/bookmarks/${id}`)
				}
				Nuts.success("Bookmark created!", {
					icon: "🙀 ",
				})
			},
		)
	}

	function onUrlChange(e) {
		return setUrl(e.target.value)
	}

	function onKeyDown(e) {
		if (e.keyCode === 13 && e.metaKey) {
			return onSubmit(e)
		}
	}

	const tagFilter = t => {
		const allowedBookmarkTags = ["web", "lol", "portfolio"]
		return allowedBookmarkTags.includes(t.name)
	}

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
	)
}
