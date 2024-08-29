import { useEffect, useState } from "react"

import { useQuery } from "@apollo/client"
import { CommentButton } from "~/components/Button"
import { Textarea } from "~/components/Input"
import type { CommentType } from "~/gql/typeSlut"
import { ViewerDocument, useAddCommentMutation } from "~/gql/typeSlut"

import { useDebounce } from "~/hooks"
import { Nuts } from "../Provider/Toaster"

interface Props {
	refId: string
	type: CommentType
	openModal: () => void
}

export function CommentForm({ refId, type, openModal }: Props) {
	const { data } = useQuery(ViewerDocument)
	const [text, setText] = useState("")
	const [error, setError] = useState(null)

	const [handleAddComment] = useAddCommentMutation()

	function onSubmit(e) {
		e.preventDefault()
		if (!data?.viewer) {
			localStorage.setItem(refId, text)
			return openModal()
		}

		setText("")
		localStorage.removeItem(refId)
		return handleAddComment({
			variables: { refId, type, text },
		})
	}

	function onKeyDown(e) {
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

	function handleChange(e) {
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
