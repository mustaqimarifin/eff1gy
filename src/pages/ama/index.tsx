import * as React from "react"
import { QuestionsList } from "~/components/AMA/QuestionsList"
import { ListDetailView, SiteLayout } from "~/components/Layouts"
import { withProviders } from "~/components/Providers/withProviders"
import routes from "~/config/routes"
import { getContext } from "~/graphql/context"
import { GET_QUESTIONS } from "~/graphql/queries/questions"
import { GET_VIEWER } from "~/graphql/queries/viewer"
import { QuestionStatus } from "~/graphql/typeSlut"
import { addApolloState, initApolloClient } from "~/lib/apollo"
import { NextSeo } from "next-seo"

function AmaPage() {
  return (
    <NextSeo
      title={routes.ama.seo.title}
      description={routes.ama.seo.description}
      openGraph={routes.ama.seo.openGraph}
    />
  )
}

export async function getServerSideProps({ req, res }) {
  const context = await getContext(req, res)
  const client = initApolloClient({ context })

  await Promise.all([
    client.query({ query: GET_VIEWER }),

    client.query({
      query: GET_QUESTIONS,
      variables: {
        filter: { status: QuestionStatus.Answered },
      },
    }),
  ])

  return addApolloState(client, {
    props: {},
  })
}

AmaPage.getLayout = withProviders(function getLayout(page) {
  return (
    <SiteLayout>
      <ListDetailView
        list={<QuestionsList />}
        hasDetail={false}
        detail={page}
      />
    </SiteLayout>
  )
})

export default AmaPage
