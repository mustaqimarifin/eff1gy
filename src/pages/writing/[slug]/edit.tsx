import * as React from 'react'
import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { MDSEX } from '~/components/MarkdownRenderer'
import { mdxToCode } from '~/components/MarkdownRenderer/Mdx'
import { withProviders } from '~/components/Providers/withProviders'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { getContext } from '~/graphql/context'
import { GET_POST } from '~/graphql/queries/posts'
import { useViewerQuery } from '~/graphql/typeSlut'
import { addApolloState, initApolloClient } from '~/lib/apollo'

function EditPostPage({ slug }) {
  const { data } = useViewerQuery()
  if (!data?.viewer?.isAdmin) return <Detail.Null />
  return <PostEditor slug={slug} />
}
export async function getServerSideProps({ params: { slug } }) {
  return {
    props: { slug },
  }
}

EditPostPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={page} />
    </SiteLayout>
  )
})

export default EditPostPage
