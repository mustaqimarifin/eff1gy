"use client"

import * as React from "react"

import { useMutation } from "@apollo/client"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { EditPostDocument } from "~/gql/typeSlut"
import { useInterval } from "~/hooks"
import { PostEditorContext } from "./PostEditor"

export function PostEditorAutoSave() {
	const context = React.useContext(PostEditorContext)
	const { draftState, existingPost } = context
	const { title, text, slug, excerpt } = draftState
	const [editPost, { loading }] = useMutation(EditPostDocument)

	// auto save every 30 seconds
	useInterval(() => {
		if (!existingPost?.id) return

		editPost({
			variables: {
				id: existingPost.id,
				data: { title, text, slug, excerpt },
			},
		})
	}, 30000)

	return <>{loading && <LoadingSpinner />}</>
}
