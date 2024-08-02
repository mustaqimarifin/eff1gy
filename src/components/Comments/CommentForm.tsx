import { type SetStateAction, useEffect, useState } from "react"

import { CommentButton } from "~/components/Button"
import { Textarea } from "~/components/Input"
import type { GetCommentsQuery } from "~/gql/gql"

import { useSession } from "next-auth/react"
import { type CommentType, GetCommentsDocument, useAddCommentMutation } from "~/gql/gql"
import { useDebounce } from "~/hooks"
import { nanoid } from "~/lib/functions"
import { realTime } from "~/lib/transformers"
import { Nuts } from "../Provider/Toaster"

interface Props {
	refId: string
	type: CommentType
	openModal: () => void
}

export function CommentForm({ refId, type, openModal }: Props) {
	//const genId = () => useId()
	//const { data } = useQuery(ViewerDocument)
	const { data: session } = useSession()
	const [text, setText] = useState("")
	const [error, setError] = useState(null)

	const [handleAddComment] = useAddCommentMutation({
		optimisticResponse: {
			__typename: "Mutation",
			addComment: {
				__typename: "Comment",
				id: nanoid(),
				text,
				createdAt: realTime({ month: "short" }).formatted,
				updatedAt: realTime({ month: "short" }).formatted,
				viewerCanDelete: false,
				viewerCanEdit: false,
				author: {
					__typename: "User",
					id: nanoid(),
					username: session?.user?.username,
					image: session?.user?.image,
					name: session?.user?.name,
					role: session?.user?.role,
					isViewer: true,
				},
			},
		},
		update(cache, { data: { addComment } }) {
			const { comments } = cache.readQuery<GetCommentsQuery>({
				query: GetCommentsDocument,
				variables: { refId, type },
			})

			cache.writeQuery({
				query: GetCommentsDocument,
				variables: { refId, type },
				data: {
					comments: [...comments, addComment],
					__typename: "Query",
				},
			})
		},
	})

	function onSubmit(e: { preventDefault: () => void }) {
		e.preventDefault()

		// not signed in, save to localstorage
		if (!session?.user) {
			// persist everything to local storage so we don't lose it
			localStorage.setItem(refId, text)
			// pop the sign in modal
			return openModal()
		}

		setText("")
		localStorage.removeItem(refId)
		return handleAddComment({
			variables: { refId, type, text },
		})
	}

	function onKeyDown(e: any) {
		if (e.keyCode === 13 && e.metaKey) {
			return onSubmit(e)
		}
	}

	useEffect(() => {
		const localText = localStorage.getItem(refId)
		if (localText) {
			setText(localText)
		}
	}, [refId])

	const debouncedText = useDebounce(text, 500)

	useEffect(() => {
		localStorage.setItem(refId, debouncedText)
	}, [debouncedText, refId])

	function handleChange(e: { target: { value: SetStateAction<string> } }) {
		return setText(e.target.value)
	}

	return (
		<div className="filter-blur sticky bottom-0 flex flex-col rounded-lg border-t border-gray-150 bg-white bg-opacity-90 pb-10 sm:pb-0 dark:border-gray-800 dark:bg-gray-900">
			<form
				className="mx-auto flex w-full max-w-3xl flex-none items-center space-x-4 px-4 py-4 md:px-6"
				onSubmit={onSubmit}
			>
				<div className="relative flex w-full flex-none">
					<Textarea
						data-cy="comment-form-textarea"
						placeholder="Write a comment..."
						value={text}
						onChange={handleChange}
						onKeyDown={onKeyDown}
						style={{ paddingRight: "48px" }}
					/>

					<div className="absolute bottom-1 right-1">
						<CommentButton
							data-cy="submit-comment-button"
							type="submit"
							disabled={text.trim().length === 0}
							size="small-square"
						>
							↑
						</CommentButton>
					</div>
				</div>
				{error && Nuts.error(error)}
			</form>
		</div>
	)
}
