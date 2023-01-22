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
import { blockDomainMeta } from '~/lib/functions/env'
import { getFromLocalStorage } from '~/lib/functions/helpers'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  React.useEffect(() => {
    // Don't increment views if not on main domain
    if (window.location.host !== 'eff1gy.vercel.app' && blockDomainMeta) {
      if (getFromLocalStorage('incrementMetaFlag') !== 'false') {
        localStorage.setItem('incrementMetaFlag', 'false')
        // reload page to make changes
        window.location.reload()
      }
    }
  }, [])
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
