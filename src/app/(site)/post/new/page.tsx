"use client"
import { useQuery } from "@apollo/client"
import { Suspense } from "react"

import { ListDetailView } from "~/components/Layouts"
import { Detail } from "~/components/ListDetail/Detail"
import { LoadingSpinner } from "~/components/LoadingSpinner"
import { PostEditor } from "~/components/Posts/Editor/PostEditor"
import { PostsList } from "~/components/Posts/PostsList"
import { ViewerDocument } from "~/gql/typeSlut"

export default function NewPostPage() {
	const { data } = useQuery(ViewerDocument)
	if (!data?.viewer?.isAdmin) return <Detail.Null />
	return (
		<ListDetailView
			list={<PostsList />}
			hasDetail
			detail={
				<Suspense fallback={<LoadingSpinner />}>
					<PostEditor />
				</Suspense>
			}
		/>
	)
}

/* import * as React from 'react'

import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { withProviders } from '~/components/Providers/withProviders'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { getContext } from '~/graphql/context'
import { useViewerQuery } from '~/graphql/types.generated'
import { addApolloState, initApolloClient } from '~/lib/apollo'

function NewPostPage() {
  const { data } = useQuery(ViewerDocument)
  if (!data?.viewer?.isAdmin) return <Detail.Null />
  return <PostEditor />
}

NewPostPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={page} />
    </SiteLayout>
  )
})

export default NewPostPage */
