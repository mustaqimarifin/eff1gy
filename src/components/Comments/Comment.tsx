import Link from "next/link";
import { memo, useState } from "react";

import { Avatar } from "~/components/Avatar";
import Button, { PrimaryButton } from "~/components/Button";
import { Textarea } from "~/components/Input";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import { GET_COMMENTS } from "~/graphql/queries/comments";
import type { Comment as CommentProp, CommentType, GetCommentsQuery } from "~/graphql/typeSlut";
import { useDeleteCommentMutation, useEditCommentMutation } from "~/graphql/typeSlut";
import { realTime } from "~/lib/transformers";

import { MarkdownRenderer } from "../MarkdownRenderer";

interface Props {
	comment: CommentProp;
	refId: string;
	type: CommentType;
}

export const Comment = memo(function MemoComment({ comment, refId, type }: Props) {
	const [isEditing, setIsEditing] = useState(false);
	const [editText, setEditText] = useState(comment.text);
	const [isSavingEdit, setIsSavingEdit] = useState(false);

	const [deleteComment] = useDeleteCommentMutation({
		variables: { id: comment.id },
		optimisticResponse: {
			__typename: "Mutation",
			deleteComment: true,
		},
		update(cache) {
			const { comments } = cache.readQuery<GetCommentsQuery>({
				query: GET_COMMENTS,
				variables: { refId, type },
			});

			cache.writeQuery({
				query: GET_COMMENTS,
				variables: { refId, type },
				data: {
					comments: comments.filter((o) => o.id !== comment.id),
				},
			});
		},
		onError(error) {},
	});

	const [editComment] = useEditCommentMutation({
		variables: { id: comment.id, text: editText },
		optimisticResponse: {
			__typename: "Mutation",
			editComment: {
				__typename: "Comment",
				...comment,
				text: editText,
				author: {
					...comment.author,
					__typename: "User",
				},
			},
		},
		onError(error) {},
		onCompleted() {
			setIsSavingEdit(false);
			setIsEditing(false);
		},
	});

	function handleDelete() {
		deleteComment();
	}

	function handleEdit() {
		setIsEditing(true);
	}

	function onKeyDown(e) {
		if (e.keyCode === 13 && e.metaKey) {
			if (editText.trim().length === 0 || isSavingEdit) return;
			return handleSaveEdit();
		}
		if (e.keyCode === 27 || e.key === "Escape") {
			setIsEditing(false);
			setEditText(comment.text);
		}
	}

	function handleSaveEdit() {
		setIsSavingEdit(true);
		editComment();
	}

	const createdAt = realTime({
		month: "short",
		timestamp: comment.createdAt,
	});

	return (
		<div className="group flex flex-col space-y-0">
			<div className="flex items-center justify-between space-x-4">
				<div className="flex items-center space-x-4">
					<Link href={`/u/${comment.author.username}`} className="inline-flex">
						<Avatar
							user={comment.author}
							src={comment.author.image}
							width={40}
							height={40}
							quality={100}
							className="rounded-full"
						/>
					</Link>

					<div className="flex space-x-1">
						<Link href={`/u/${comment.author.username}`} className="text-primary font-semibold leading-snug">
							<div className="flex break-all line-clamp-1">{comment.author.name}</div>
						</Link>
						<div className="text-quaternary leading-snug">·</div>
						<div className="text-quaternary leading-snug line-clamp-1" title={createdAt.raw}>
							{createdAt.formatted}
						</div>
						<div className="text-quaternary leading-snug text-xs flex flex-row items-center text-gray-500 dark:text-gray-200">
							{comment.viewerCanEdit && (
								<button
									className=" hover:text-lime-400 hover:dark:text-lime-300 border-none"
									onClick={handleEdit}
									aria-label="Edit"
								>
									&nbsp;edit
								</button>
							)}
							{comment.viewerCanDelete && (
								<button
									className=" hover:text-pink-400 hover:dark:text-pink-300 border-none"
									onClick={handleDelete}
									aria-label={`Delete comment by ${comment.author.name}`}
								>
									&nbsp;del
								</button>
							)}
						</div>
					</div>
				</div>

				{/*         {(comment.viewerCanDelete || comment.viewerCanEdit) && (
          <CommentMenu
            comment={comment}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )} */}
			</div>

			{isEditing ? (
				<div className="flex flex-col space-y-3 pl-14">
					<Textarea onChange={(e) => setEditText(e.target.value)} value={editText} onKeyDown={onKeyDown} />
					<div className="flex justify-between">
						<Button onClick={() => setIsEditing(false)}>Cancel</Button>
						<PrimaryButton disabled={editText.trim().length === 0 || isSavingEdit} onClick={handleSaveEdit}>
							{isSavingEdit ? <LoadingSpinner /> : "Save"}
						</PrimaryButton>
					</div>
				</div>
			) : (
				<MarkdownRenderer
					children={comment.text}
					className="comment flex-grow pl-14 leading-normal"
					variant="comment"
				/>
			)}
		</div>
	);
});
