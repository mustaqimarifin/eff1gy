import * as React from 'react'

import { getContext } from '~/graphql/context'
import { GET_POSTS } from '~/graphql/queries/posts'
import { initApolloClient } from '~/lib/apollo'
import { generateRSS } from '~/lib/rss'
const RSSFeed: React.FC = () => null

export async function getServerSideProps({ req, res }) {
  const context = await getContext(req, res)
  const client = initApolloClient({ context })
  const {
    data: { posts },
  } = await client.query({
    query: GET_POSTS,
    variables: { filter: { published: true } },
  })
  const { rss } = await generateRSS(posts)

  if (res) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(rss)
    res.end()
  }

  return {
    props: {},
  }
}

export default RSSFeed
