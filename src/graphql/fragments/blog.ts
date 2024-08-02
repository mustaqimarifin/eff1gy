import { gql } from "@apollo/client"

//import { graphql as gql } from "gql.tada"

export const BlogCoreFrag = gql(`
  fragment BlogCore on Blog {
    __typename
    id
    title
    date
    slug
    count
  }
`)

export const BlogListItemFrag = gql`
  fragment BlogListItem on Blog {
    ...BlogCore
  }
  ${BlogCoreFrag}
`

export const BlogDetailFrag = gql`
  fragment BlogDetail on Blog {
    ...BlogCore
    reactionCount
    viewerHasReacted
  }
  ${BlogCoreFrag}
`
