import { gql } from '@apollo/client'
import {
  BlogDetailFragment,
  BlogListItemFragment,
} from '~/graphql/fragments/blog'

export const GET_BLOGS = gql`
  query getBlogs {
    blogs {
      ...BlogListItem
    }
  }
  ${BlogListItemFragment}
`

export const GET_BLOG = gql`
  query getBlog($slug: String!) {
    blog(slug: $slug) {
      ...BlogDetail
    }
  }
  ${BlogDetailFragment}
`
