import PP from "~/components/Home/PP"
import { ListDetailView, SiteLayout } from "~/components/Layouts"
import { withProviders } from "~/components/Providers/withProviders"
import routes from "~/config/routes"
import { NextSeo } from "next-seo"

function Privacy() {
  return (
    <NextSeo
      title={routes.privacy.seo.title}
      description={routes.privacy.seo.description}
      openGraph={routes.privacy.seo.openGraph}
    />
  )
}

Privacy.getLayout = withProviders(function getLayout(
  page: React.ReactElement<any, string | React.JSXElementConstructor<any>>
) {
  return (
    <SiteLayout>
      <ListDetailView list={null} hasDetail detail={<PP />} />
    </SiteLayout>
  )
})

export default Privacy
