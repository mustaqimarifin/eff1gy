import * as React from 'react'

import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { Post } from '~/components/Posts/BlogDetail'
import { PostsList } from '~/components/Posts/PostsList'
import { indexQuery } from '~/lib/sanity/queries'
import { getClient } from '~/lib/sanity/server'

/* AppDissectionsPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView
        list={<AppDissectionList />}
        hasDetail={false}
        detail={page}
      />
    </SiteLayout>
  )
})
 */
export default async function BlogIndex() {
    const posts: Post[] = await getClient().fetch(indexQuery)

    if (!posts) {
        return { notFound: true }
    }

    return (
        <ListDetailView
            list={<PostsList posts={posts} />}
            hasDetail={false}
            detail={null}
        />
    )
}
