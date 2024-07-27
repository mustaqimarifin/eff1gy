import { gql } from "@apollo/client"

export const PostCoreFrag = gql`
  fragment PostCore on Post {
    __typename
    id
    publishedAt
    title
    slug
    excerpt
  }
`

export const PostListItemFrag = gql`
  fragment PostListItem on Post {
    ...PostCore
  }
  ${PostCoreFrag}
`

export const PostDetailFrag = gql`
  fragment PostDetail on Post {
    ...PostCore
    text
    featureImage
    reactionCount
    hitRate
    viewerHasReacted
  }
  ${PostCoreFrag}
`
