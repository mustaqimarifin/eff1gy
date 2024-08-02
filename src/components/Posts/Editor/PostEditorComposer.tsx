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

	function handleTitleChange(e: { target: { value: any } }) {
		setDraftState((draft: any) => ({ ...draft, title: e.target.value }))
	}
	function handleTextChange(e: { target: { value: any } }) {
		setDraftState((draft: any) => ({ ...draft, text: e.target.value }))
	}
	function onUploadComplete(url: string) {
		const image = `![](${url})`
		setDraftState((draft: { text: string }) => ({
			...draft,
			text: draft.text.replace(uploadingImagePlaceholder, image),
		}))
	}

	function onUploadFailed() {
		setDraftState((draft: { text: string }) => ({
			...draft,
			text: draft.text.replace(uploadingImagePlaceholder, ""),
		}))
	}

	function onUploadStarted() {
		setDraftState((draft: { text: string }) => ({
			...draft,
			// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
			text: (draft.text += uploadingImagePlaceholder),
		}))
	}

	return (
		<Dropzone onUploadStarted={onUploadStarted} onUploadComplete={onUploadComplete} onUploadFailed={onUploadFailed}>
			<Detail.ContentContainer>
				<Detail.Header>
					<Textarea
						rows={1}
						value={draftState.title}
						onChange={handleTitleChange}
						placeholder="Post title"
						className="composer block w-full border bg-neutral-100 p-0 text-2xl font-bold text-slate-700 focus:border-0 focus:outline-none focus:ring-0 md:text-3xl dark:bg-zinc-700 dark:text-slate-50"
					/>
					<Textarea
						rows={80}
						value={draftState.text}
						onChange={handleTextChange}
						placeholder="Write a post..."
						style={{ height: "100%" }}
						className="composer block w-full border bg-neutral-100 p-0 pt-5 text-lg font-normal text-slate-700 focus:border-0 focus:outline-none focus:ring-0 dark:bg-zinc-700 dark:text-slate-50"
					/>
				</Detail.Header>
			</Detail.ContentContainer>
		</Dropzone>
	)
}
