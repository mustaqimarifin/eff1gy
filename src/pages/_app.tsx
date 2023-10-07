import "~/styles/custom-styles.css"
import "~/styles/prose-styles.css"
import "@code-hike/mdx/dist/index.css"

import * as React from "react"
import Head from "next/head"
import { SiteLayout } from "~/components/Layouts"
import { LoginErrorToast } from "~/components/LoginErrorToast"
import { Providers } from "~/components/Providers"

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />{" "}
        </Head>
        <Providers pageProps={pageProps}>
          <LoginErrorToast />
          <SiteLayout>{page}</SiteLayout>
        </Providers>
      </>
    ))

  return getLayout(<Component {...pageProps} />)
}
