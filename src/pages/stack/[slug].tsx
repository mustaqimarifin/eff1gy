import * as React from 'react'

import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { withProviders } from '~/components/MarkdownRenderer/Providers/withProviders'
import { StackDetail } from '~/components/Stack/StackDetail'
import { StackList } from '~/components/Stack/StackList'
import { getContext } from '~/graphql/context'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_STACK, GET_STACKS } from '~/graphql/queries/stack'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import { CommentType } from '~/graphql/types.generated'
import { addApolloState, initApolloClient } from '~/lib/apollo'

function StackDetailPage({ slug }) {
  return <StackDetail slug={slug} />
}

export async function getServerSideProps({ params: { slug }, req, res }) {
  const context = await getContext(req, res)
  const client = initApolloClient({ context })

  const { data } = await client.query({
    query: GET_STACK,
    variables: { slug },
  })

  await Promise.all([
    client.query({ query: GET_VIEWER }),

    client.query({
      query: GET_STACKS,
    }),

    data?.stack &&
      client.query({
        query: GET_COMMENTS,
        variables: { refId: data.stack.id, type: CommentType.Stack },
      }),
  ])

  return addApolloState(client, {
    props: {
      slug,
    },
  })
}

StackDetailPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<StackList />} hasDetail detail={page} />
    </SiteLayout>
  )
})

export default StackDetailPage
