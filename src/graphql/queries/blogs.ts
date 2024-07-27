import { gql } from "@apollo/client"
import { BlogDetailFrag, BlogListItemFrag } from "../fragments/blog"

export const GET_BLOGS = gql`
  query getBlogs {
    blogs {
      ...BlogListItem
    }
  }
  ${BlogListItemFrag}
`

export const GET_BLOG = gql`
  query getBlog($slug: String!) {
    blog(slug: $slug) {
      ...BlogDetail
    }
  }
  ${BlogDetailFrag}
`
