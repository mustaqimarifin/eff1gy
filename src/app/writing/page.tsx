import { ListDetailView } from '~/components/Layouts'
import { getClient } from '~/components/Provider/ApolloClient'
import { PostsList } from '~/components/Writing/PostsList'
import { GET_POSTS } from '~/graphql/queries/posts'
import { GET_VIEWER } from '~/graphql/queries/viewer'

export const metadata = {
  title: 'Writing',
}

export default async function WritingPage() {
  const client = getClient()

  await Promise.all([
    client.query({ query: GET_VIEWER }),
    client.query({
      query: GET_POSTS,
      variables: { filter: { published: true } },
    }),
  ])

  return <ListDetailView list={<PostsList />} hasDetail={false} detail={null} />
}
