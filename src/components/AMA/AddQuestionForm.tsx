import { useRouter } from "next/navigation"
import { useState } from "react"

import { PrimaryButton } from "~/components/Button"
import { Textarea } from "~/components/Input"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { useAddQuestionMutation, useViewerQuery } from "~/gql/typeSlut"

import { Avatar } from "../Avatar"
import { Nuts } from "../Provider/Toaster"

export function AddQuestionForm({ closeModal }) {
	const { data } = useViewerQuery()

	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [, setError] = useState("")
	const router = useRouter()

	const [handleAddQuestion, { loading, error }] = useAddQuestionMutation({
		onCompleted: ({ addQuestion: { id } }) => {
			closeModal()
			return router.push(`/ama/${id}`)
		},
		onError({ message }) {
			const clean = message.replace("GraphQL error:", "")
			Nuts.error(clean)
		},
	})

	function onSubmit(e) {
		e.preventDefault()
		if (title.trim().length === 0) {
			setError("Question can’t be blank")
			return
		}

		return handleAddQuestion({
			variables: {
				data: {
					title,
					description,
				},
			},
		})
	}

	function onTitleChange(e) {
		error && setError("")
		return setTitle(e.target.value)
	}

	function onDescriptionChange(e) {
		error && setError("")
		return setDescription(e.target.value)
	}

	function onKeyDown(e) {
		if (e.keyCode === 13 && e.metaKey) {
			return onSubmit(e)
		}
	}

	const { viewer } = data

	return (
		<form className="items-stretch space-y-4 p-4" onSubmit={onSubmit}>
			<div className="flex items-start space-x-3">
				<div className="pt-0.5">
					<Avatar
						user={viewer}
						src={viewer?.image}
						width={40}
						height={40}
						className="rounded-full"
					/>
				</div>
				<Textarea
					rows={1}
					value={title}
					placeholder="Ask me anything..."
					onChange={onTitleChange}
					onKeyDown={onKeyDown}
				/>
			</div>
			<div className="pl-12">
				<Textarea
					rows={4}
					value={description}
					placeholder="Optional: add a description with more details..."
					onChange={onDescriptionChange}
					onKeyDown={onKeyDown}
				/>
			</div>
			<div className="flex justify-end">
				<PrimaryButton disabled={title.trim().length === 0 || loading} onClick={onSubmit}>
					{loading ? <LoadingSpinner /> : "Ask away"}
				</PrimaryButton>
			</div>
			{error && Nuts.error("error")}
		</form>
	)
}
