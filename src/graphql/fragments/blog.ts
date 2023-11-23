import { gql } from '@apollo/client'

export const BlogCoreFragment = gql`
  fragment BlogCore on Blog {
    __typename
    id
    title
    date
    slug
  }
`

export const BlogListItemFragment = gql`
  fragment BlogListItem on Blog {
    ...BlogCore
  }
  ${BlogCoreFragment}
`

export const BlogDetailFragment = gql`
  fragment BlogDetail on Blog {
    ...BlogCore
    reactionCount

    viewerHasReacted
  }
  ${BlogCoreFragment}
`
