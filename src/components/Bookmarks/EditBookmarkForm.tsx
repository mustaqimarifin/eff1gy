"use client"
import { Link2Icon } from "lucide-react"
import Link from "next/link"
import { useReducer } from "react"

import Button, { DeleteButton } from "~/components/Button"
import { Input, Textarea } from "~/components/Input"
import { TagPicker } from "~/components/Tag/TagPicker"
import {
	GetBookmarkDocument,
	GetBookmarksDocument,
	type GetBookmarksQueryVariables,
	useDeleteBookmarkMutation,
	useEditBookmarkMutation,
} from "~/gql/typeSlut"
import type { GetBookmarksQuery } from "~/gql/typeSlut"

export function EditBookmarkForm({ closeModal, bookmark }) {
	const initialState = {
		error: "",
		title: bookmark.title || bookmark.url,
		description: bookmark.description || "",
		tag: bookmark.tags[0]?.name || "reading",
		faviconUrl: bookmark.faviconUrl,
	}

	function reducer(state, action) {
		switch (action.type) {
			case "edit-title": {
				return {
					...state,
					error: "",
					title: action.value,
				}
			}
			case "edit-favicon": {
				return {
					...state,
					error: "",
					faviconUrl: action.value,
				}
			}
			case "edit-description": {
				return {
					...state,
					error: "",
					description: action.value,
				}
			}
			case "edit-tag": {
				return {
					...state,
					error: "",
					tag: action.value,
				}
			}
			case "error": {
				return {
					...state,
					error: action.value,
				}
			}
			default:
				throw new Error()
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)

	const [editBookmark] = useEditBookmarkMutation({
		variables: {
			id: bookmark.id,
			data: {
				title: state.title,
				description: state.description,
				tag: state.tag,
				faviconUrl: state.faviconUrl,
			},
		},
		optimisticResponse: {
			__typename: "Mutation",
			editBookmark: {
				__typename: "Bookmark",
				...bookmark,
				title: state.title,
				description: state.description,
				tags: [{ name: state.tag }],
				faviconUrl: state.faviconUrl,
			},
		},
		onError({ message }) {
			const value = message.replace("GraphQL error:", "")
			dispatch({ type: "error", value })
		},
	})

	const [handleDelete] = useDeleteBookmarkMutation({
		variables: { id: bookmark.id },
		optimisticResponse: {
			__typename: "Mutation",
			deleteBookmark: true,
		},
		update(cache) {
			const { bookmarks } = cache.readQuery<
				GetBookmarksQuery,
				GetBookmarksQueryVariables
			>({
				query: GetBookmarkDocument,
			})

			cache.writeQuery({
				query: GetBookmarkDocument,
				variables: { id: bookmark.id },
				data: {
					bookmark: null,
					__typename: "Query",
				},
			})

			if (bookmarks) {
				cache.writeQuery({
					query: GetBookmarksDocument,
					data: {
						__typename: "Query",
						bookmarks: {
							...bookmarks,
							edges: bookmarks.edges.filter(o => o.node.id !== bookmark.id),
						},
					},
				})
			}
		},
	})

	function handleSave(e: { preventDefault: () => void }) {
		e.preventDefault()

		if (!state.title || state.title.length === 0) {
			return dispatch({
				type: "error",
				value: "Bookmark must have a title",
			})
		}

		editBookmark()
		return closeModal()
	}

	function onTitleChange(e: { target: { value: any } }) {
		return dispatch({ type: "edit-title", value: e.target.value })
	}

	function onFaviconChange(e: { target: { value: any } }) {
		return dispatch({ type: "edit-favicon", value: e.target.value })
	}

	function onKeyDown(e) {
		if (e.keyCode === 13 && e.metaKey) {
			return handleSave(e)
		}
	}

	function onDescriptionChange(e) {
		return dispatch({ type: "edit-description", value: e.target.value })
	}

	function onTagChange(val) {
		dispatch({ type: "edit-tag", value: val })
	}

	const tagFilter = t => {
		const allowedBookmarkTags = ["website", "reading", "portfolio"]
		return allowedBookmarkTags.includes(t.name)
	}

	return (
		<div className="p-4">
			<form className="space-y-3" onSubmit={handleSave}>
				<Input
					placeholder="Title"
					defaultValue={state.title}
					onChange={onTitleChange}
					onKeyDown={onKeyDown}
				/>
				{state.error && <p className="text-red-500">{state.error}</p>}
				<Link
					passHref
					href={bookmark.url}
					target="_blank"
					rel="noopener noreferrer"
					className="text-secondary inline-flex items-center space-x-2 pb-2 text-sm opacity-70 hover:opacity-100"
				>
					<Link2Icon className="flex-none" />
					<span className="line-clamp-1">{bookmark.url}</span>
				</Link>

				<TagPicker
					filter={tagFilter}
					defaultValue={initialState.tag}
					onChange={onTagChange}
				/>

				<Textarea
					rows={4}
					defaultValue={bookmark.description}
					onChange={onDescriptionChange}
					onKeyDown={onKeyDown}
					placeholder="Description..."
				/>

				<Input
					placeholder="Favicon URL"
					defaultValue={state.faviconUrl}
					onChange={onFaviconChange}
					onKeyDown={onKeyDown}
				/>
			</form>
			<div className="flex justify-between pt-24">
				<DeleteButton
					onClick={() => {
						closeModal()
						handleDelete()
					}}
				>
					Delete
				</DeleteButton>
				<div className="flex space-x-3">
					<Button onClick={handleSave}>Save</Button>
				</div>
			</div>
		</div>
	)
}
