"use client"

import * as React from "react"

import { Dropzone } from "~/components/Dropzone"
import { Textarea } from "~/components/Input"
import { Detail } from "~/components/ListDetail/Detail"
import { PostEditorContext } from "./PostEditor"

export function PostEditorComposer() {
	const context = React.useContext(PostEditorContext)
	const { draftState, setDraftState } = context
	const uploadingImagePlaceholder = `![](Uploading...)`

	function handleTitleChange(e) {
		setDraftState(draft => ({ ...draft, title: e.target.value }))
	}

	function handleTextChange(e) {
		setDraftState(draft => ({ ...draft, text: e.target.value }))
	}

	function onUploadComplete(url) {
		const image = `![](${url})`
		setDraftState(draft => ({
			...draft,
			text: draft.text.replace(uploadingImagePlaceholder, image),
		}))
	}

	function onUploadFailed() {
		setDraftState(draft => ({
			...draft,
			text: draft.text.replace(uploadingImagePlaceholder, ""),
		}))
	}

	function onUploadStarted() {
		setDraftState(draft => ({
			...draft,
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			text: (draft.text += uploadingImagePlaceholder),
		}))
	}

	return (
		<Dropzone
			onUploadStarted={onUploadStarted}
			onUploadComplete={onUploadComplete}
			onUploadFailed={onUploadFailed}
		>
			<Detail.ContentContainer>
				<Detail.Header>
					<Textarea
						rows={1}
						value={draftState.title}
						onChange={handleTitleChange}
						placeholder="Post title"
						className="composer text-primary block w-full border-none p-0 text-2xl font-bold focus:border-0 focus:outline-none focus:ring-0 md:text-3xl dark:bg-black"
					/>
					<Textarea
						rows={80}
						//maxRows={2000}
						value={draftState.text}
						onChange={handleTextChange}
						placeholder="Write a post..."
						className="composer text-primary prose block w-full border-none p-0 pt-5 text-lg font-normal focus:border-0 focus:outline-none focus:ring-0 dark:bg-black"
					/>
				</Detail.Header>
			</Detail.ContentContainer>
		</Dropzone>
	)
}
