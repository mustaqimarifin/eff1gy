"use client"
import { Sidebar } from "lucide-react"
import { useRouter } from "next/navigation"
import * as React from "react"

import Button from "~/components/Button"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PostEditorContext } from "./PostEditor"
import { PostEditorAutoSave } from "./PostEditorAutoSave"

import { Nuts } from "~/components/Provider/Toaster"
import { useAddPostMutation, useEditPostMutation } from "~/gql/typeSlut"
import { slugify } from "~/lib/functions"

export function PostEditorActions() {
	const router = useRouter()
	// const path = usePathname();
	const context = React.useContext(PostEditorContext)
	const { draftState, existingPost, sidebarIsOpen, setSidebarIsOpen } = context

	const [addPost, { loading: creatingPost }] = useAddPostMutation({
		onCompleted({ addPost }) {
			Nuts.success("Draft created")
			router.push(`/post/${addPost?.slug}/edit`)
			// router.push(`/post/${path}/edit`);
		},
	})

	const [editPost, { loading: editingPost }] = useEditPostMutation()

	function handleEditOrCreate() {
		if (existingPost?.id) {
			return editPost({
				variables: {
					id: existingPost?.id,
					data: draftState,
				},
			})
		}

		return addPost({
			variables: {
				data: {
					...draftState,
					slug: draftState.slug || slugify(draftState.title),
				},
			},
		})
	}

	const isSavingDraft = editingPost || creatingPost

	return (
		<div className="flex items-center space-x-2">
			<Button disabled={isSavingDraft} onClick={handleEditOrCreate}>
				{isSavingDraft ? (
					<LoadingSpinner />
				) : (
					<>
						<PostEditorAutoSave />{" "}
						<span>{existingPost?.publishedAt ? "Update" : "Save draft"}</span>
					</>
				)}
			</Button>
			<Button onClick={() => setSidebarIsOpen(!sidebarIsOpen)}>
				<Sidebar size={16} />
			</Button>
		</div>
	)
}
