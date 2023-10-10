import { groq } from 'next-sanity'

const postFields = groq`
  "id": _id,
  title,
  date,
  excerpt,
  "name" : author->name,
  "tags": tags[]->title,
  "caption" : coverImage.caption,
  "slug": slug.current
`

const designFields = groq`
  "id": _id,
  title,
  date,
  overview,
  "tags": tags[]->title,
  "caption" : coverImage.caption,
  "slug": slug.current
`

const pathFields = groq`
  _id,
  title,
  date,
  "tags": tags[]->title,
  "slug": slug.current
`

export const settingsQuery = groq`*[_type == "settings"][0]`

export const indexQuery = groq`
*[_type == "post"] | order(priority desc, _updatedAt desc) {
'id': _id, title, date, 'slug': slug.current
}`

export const designIndexQuery = groq`
*[_type == "case-study"] | order(priority desc, _updatedAt desc) {
'id': _id, title, date,  "caption" : coverImage.caption,
 'slug': slug.current
}`

export const pathquery = groq`
*[_type == "post"] { 'id': _id, title, date, 'slug': slug.current,
}
`

export const postquery = groq`
*[_type == "post"] | order(_createdAt desc) {
  ...,
    "caption" : coverImage.caption,
  author->,
  tags[]->
}
`

export const postQuery = groq` 
*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ...,
    ${postFields}
  }
`

export const caseQuery = groq` 
*[_type == "case-study" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ...,
    ${designFields}
  }
`

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`

export const caseSlugsQuery = groq`
*[_type == "case-study" && defined(slug.current)][].slug.current
`

export const postBySlugQuery = groq`
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`

export const designBySlugQuery = groq`
*[_type == "case-study" && slug.current == $slug][0] {
  ${designFields}
}
`

export const postUpdatedQuery = groq`*[_type == "post" && _id == $id].slug.current`

const snippetFields = `
  _id,
  title,
  description,
  logo,
  "slug": slug.current,
`

export const allSnippetsQuery = `
*[_type == "snippet"] | order(date desc, _updatedAt desc) {
  ${snippetFields}
}`

export const snippetsQuery = groq`
{
  "snippet": *[_type == "snippet" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${snippetFields}
  }
}`

export const snippetSlugsQuery = groq`
*[_type == "snippet" && defined(slug.current)][].slug.current
`

export const snippetBySlugQuery = groq`
*[_type == "snippet" && slug.current == $slug][0] {
  ${snippetFields}
}
`

export interface Settings {
  title?: string
  description?: any[]
  ogImage?: {
    title?: string
  }
}
