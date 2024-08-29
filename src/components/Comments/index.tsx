"use client"

import { useRef } from "react"

import { LoadingSpinner } from "~/components/LoadingSpinner"
import { SignInDialog } from "~/components/SignInDialog"
import { type CommentType, useGetCommentsQuery } from "~/gql/typeSlut"
import { useWindowFocus } from "~/hooks"
import { FireIcon } from "../Icon"
import { Comment } from "./Comment"
import { CommentForm } from "./CommentForm"

interface Props {
	refId: string
	type: CommentType
}

export function Comments({ refId, type }: Props) {
	const messagesEndRef = useRef(null)

	const { data, loading, error, refetch } = useGetCommentsQuery({
		variables: {
			refId,
			type,
		},
	})

	useWindowFocus({ onFocus: refetch })

	if (loading) {
		return (
			<div className="relative flex flex-1 flex-col border-t border-gray-150 dark:border-gray-800">
				<div className="mx-auto flex w-full max-w-3xl flex-1 flex-col space-y-3 px-4 py-8 md:px-8">
					<div className="flex flex-col items-center justify-center space-y-6">
						<LoadingSpinner />
					</div>
				</div>
			</div>
		)
	}

	if (error) return <div>Error loading comments...</div>

	const { comments } = data

	return (
		<div className="relative flex flex-1 flex-col border-t border-gray-150 dark:border-gray-800">
			<div className="text-quaternary absolute left-1/2 -top-5 -translate-x-1/2 transform bg-white px-8 py-2 dark:bg-black">
				<FireIcon className="w-8 h-8 text-2xl font-bold" />
			</div>
			<div className="mx-auto flex w-full max-w-3xl flex-1 flex-col space-y-3 px-4 pt-8 pb-4 md:px-8">
				<div className="flex flex-col space-y-3">
					{comments?.length > 0 &&
						comments.map(comment => (
							<Comment key={comment.id} refId={refId} type={type} comment={comment} />
						))}
					{comments?.length === 0 && (
						<div className="text-quaternary block pt-12 pb-16 text-center">
							No comments yet...
						</div>
					)}
				</div>
			</div>
			<div ref={messagesEndRef} />
			<SignInDialog>
				{({ openModal }) => (
					<CommentForm refId={refId} type={type} openModal={openModal} />
				)}
			</SignInDialog>
		</div>
	)
}
