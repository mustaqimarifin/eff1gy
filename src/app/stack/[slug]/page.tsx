import { ListDetailView } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { getClient } from '~/components/Provider/ApolloClient'
import { StackDetail } from '~/components/Stack/StackDetail'
import { StackList } from '~/components/Stack/StackList'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_STACK, GET_STACKS } from '~/graphql/queries/stack'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import type { GetStackQuery } from '~/graphql/typeSlut'
import { CommentType } from '~/graphql/typeSlut'
import { HiddenCounter } from '~/lib/actions'

//export const dynamic = 'force-static'

export default async function StackPage({ params: { slug } }) {
  const client = getClient()
  const { data, loading, error } = await client.query<GetStackQuery>({
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
        context: { fetchOptions: { cache: 'no-store' } },
      }),
  ])

  if (loading) {
    return <Detail.Loading />
  }

  if (!data?.stack || error) {
    return <Detail.Null />
  }

  const { stack } = data

  return (
    <ListDetailView
      list={<StackList />}
      hasDetail
      detail={
        <StackDetail stack={stack}>
          <HiddenCounter id={slug} />
        </StackDetail>
      }
    />
  )
}
