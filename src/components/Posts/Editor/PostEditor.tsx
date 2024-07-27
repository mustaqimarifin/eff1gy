"use client"
/* eslint-disable react/no-unstable-context-value */

import * as React from "react"

import { useQuery } from "@apollo/client"
import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import { GetPostDocument } from "~/gql/typeSlut"
import { PostEditorActions } from "./PostEditorActions"
import { PostEditorComposer } from "./PostEditorComposer"
import { PostEditorMetaSidebar } from "./PostEditorMetaSidebar"
import { PostEditorPreview } from "./PostEditorPreview"
import { PreviewSwitch } from "./PreviewSwitch"

export const PostEditorContext = React.createContext({
	draftState: {
		title: "",
		text: "",
		slug: "",
		excerpt: "",
	},
	setDraftState: (draftObj: unknown) => {},
	existingPost: null,
	sidebarIsOpen: false,
	setSidebarIsOpen: (isOpen: boolean) => {},
	isPreviewing: false,
	setIsPreviewing: (isPreviewing: boolean) => {},
})

export function PostEditor({ slug: propsSlug = "" }) {
	const scrollContainerRef = React.useRef(null)
	const { data } = useQuery(GetPostDocument, { variables: { slug: propsSlug } })

	const defaultDraftState = {
		title: data?.post?.title || "",
		text: data?.post?.text || "",
		slug: data?.post?.slug || "",
		excerpt: data?.post?.excerpt || "",
	}

	const [draftState, setDraftState] = React.useState(defaultDraftState)
	const [isPreviewing, setIsPreviewing] = React.useState(false)

	const existingPost = data?.post
	const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false)

	React.useEffect(() => {
		setDraftState(defaultDraftState)
	}, [propsSlug])

	const value = {
		existingPost,
		draftState,
		setDraftState,
		sidebarIsOpen,
		setSidebarIsOpen,
		isPreviewing,
		setIsPreviewing,
	}

	return (
		<PostEditorContext.Provider value={value}>
			<Detail.Container ref={scrollContainerRef}>
				<TitleBar
					backButton
					globalMenu={false}
					backButtonHref="/post"
					scrollContainerRef={scrollContainerRef}
					title=""
					trailingAccessory={<PostEditorActions />}
					leadingAccessory={<PreviewSwitch />}
				/>

				{isPreviewing ? <PostEditorPreview /> : <PostEditorComposer />}
			</Detail.Container>
			<PostEditorMetaSidebar />
		</PostEditorContext.Provider>
	)
}
