import * as React from 'react'
import { ListDetailView, SiteLayout } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { withProviders } from '~/components/Providers/withProviders'
import { PostEditor } from '~/components/Writing/Editor/PostEditor'
import { PostDetail } from '~/components/Writing/PostDetail'
import { PostsList } from '~/components/Writing/PostsList'
import { useGetPostQuery } from '~/graphql/typeSlut'

function WritingPostPage({ slug }) {
  const { data, loading, error } = useGetPostQuery({ variables: { slug } })
  if (data?.post && !data.post.publishedAt) return <PostEditor />
  if (loading) return <Detail.Loading />
  if (!data?.post || error) {
    return <Detail.Null />
  }
  return <PostDetail slug={slug} />
}

export async function getServerSideProps({ params: { slug } }) {
  return {
    props: {
      slug,
    },
  }
}

WritingPostPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView list={<PostsList />} hasDetail detail={page} />
    </SiteLayout>
  )
})

export default WritingPostPage
