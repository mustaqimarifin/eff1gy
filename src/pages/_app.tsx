import '~/styles/custom-styles.css'
import '~/styles/prose-styles.css'
import '~/styles/code.css'

import Head from 'next/head'
import * as React from 'react'

import { SiteLayout } from '~/components/Layouts'
import { LoginErrorToast } from '~/components/LoginErrorToast'
import { Providers } from '~/components/MarkdownRenderer/Providers'

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />{' '}
        </Head>
        <Providers pageProps={pageProps}>
          <LoginErrorToast />
          <SiteLayout>{page}</SiteLayout>
        </Providers>
      </>
    ))

  return getLayout(<Component {...pageProps} />)
}
