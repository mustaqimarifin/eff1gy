import '~/styles/custom-styles.css'
import '~/styles/prose-styles.css'
import '~/styles/code.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import { NextPage } from 'next/types'
import * as React from 'react'

import { SiteLayout } from '~/components/Layouts'
import { LoginErrorToast } from '~/components/LoginErrorToast'
import { Providers } from '~/components/Providers'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
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
