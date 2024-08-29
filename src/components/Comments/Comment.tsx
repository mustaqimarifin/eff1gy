import Link from "next/link"
import { memo, useState } from "react"

import { Avatar } from "~/components/Avatar"
import Button, { PrimaryButton } from "~/components/Button"
import { Textarea } from "~/components/Input"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { useDeleteCommentMutation, useEditCommentMutation } from "~/gql/typeSlut"
import type { Comment as CommentProp, CommentType } from "~/gql/typeSlut"
import { realTime } from "~/lib/transformers"
import { MarkdownRenderer } from "../MarkdownRenderer"

interface Props {
	comment: CommentProp
	refId: string
	type: CommentType
}

export const Comment = memo(({ comment }: Props) => {
	const [isEditing, setIsEditing] = useState(false)
	const [editText, setEditText] = useState(comment.text)
	const [isSavingEdit, setIsSavingEdit] = useState(false)

	const [deleteComment] = useDeleteCommentMutation({
		variables: { id: comment.id },
		onError(error) {},
	})

	const [editComment] = useEditCommentMutation({
		variables: { id: comment.id, text: editText },
		onError(error) {},
		onCompleted() {
			setIsSavingEdit(false)
			setIsEditing(false)
		},
	})

	function handleDelete() {
		deleteComment()
	}

	function handleEdit() {
		setIsEditing(true)
	}

	function onKeyDown(e: { keyCode: number; metaKey: any; key: string }) {
		if (e.keyCode === 13 && e.metaKey) {
			if (editText.trim().length === 0 || isSavingEdit) return
			return handleSaveEdit()
		}
		if (e.keyCode === 27 || e.key === "Escape") {
			setIsEditing(false)
			setEditText(comment.text)
		}
	}

	function handleSaveEdit() {
		setIsSavingEdit(true)
		editComment()
	}

	const createdAt = realTime({
		month: "short",
		timestamp: comment.createdAt,
	})

	return (
		<div className="group flex flex-col space-y-0">
			<div className="flex items-center justify-between space-x-4">
				<div className="flex items-center space-x-4">
					<Link href={`/u/${comment.author.username}`} className="inline-flex">
						<Avatar
							user={comment.author}
							src={comment.author.image}
							width={32}
							height={32}
							quality={100}
							className="rounded-full"
						/>
					</Link>

					<div className="flex space-x-1 text-sm">
						<Link
							href={`/u/${comment.author.username}`}
							className="text-primary font-semibold leading-snug"
						>
							<div className="line-clamp-1 flex break-all">{comment.author.name}</div>
						</Link>
						<div className="text-quaternary leading-snug">·</div>
						<div
							className="text-quaternary line-clamp-1 leading-snug"
							title={createdAt.raw}
						>
							{createdAt.formatted}
						</div>
						<div className="text-quaternary flex flex-row items-center leading-snug text-gray-500 dark:text-gray-200">
							{comment.viewerCanEdit && (
								<button
									className="border-none hover:text-lime-400 hover:dark:text-lime-300"
									onClick={handleEdit}
									aria-label="Edit"
								>
									&nbsp;edit
								</button>
							)}
							{comment.viewerCanDelete && (
								<button
									className="border-none hover:text-pink-400 hover:dark:text-pink-300"
									onClick={handleDelete}
									aria-label={`Delete comment by ${comment.author.name}`}
								>
									&nbsp;del
								</button>
							)}
						</div>
					</div>
				</div>
			</div>

			{isEditing ? (
				<div className="flex flex-col space-y-2 pl-14">
					<Textarea
						onChange={e => setEditText(e.target.value)}
						value={editText}
						onKeyDown={onKeyDown}
					/>
					<div className="flex justify-between">
						<Button onClick={() => setIsEditing(false)}>Cancel</Button>
						<PrimaryButton
							disabled={editText.trim().length === 0 || isSavingEdit}
							onClick={handleSaveEdit}
						>
							{isSavingEdit ? <LoadingSpinner /> : "Save"}
						</PrimaryButton>
					</div>
				</div>
			) : (
				<MarkdownRenderer
					children={comment.text}
					className="comment prose prose-neutral flex-grow pl-12 text-sm dark:prose-invert"
					variant="comment"
				/>
			)}
		</div>
	)
})
