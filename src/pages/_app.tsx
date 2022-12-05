import '~/styles/custom-styles.css'
//import '~/styles/material-lighter.css'
import '~/styles/prose-styles.css'

import { Inter } from '@next/font/google'
import localFont from '@next/font/local'
import Head from 'next/head'
import * as React from 'react'

import { SiteLayout } from '~/components/Layouts'
import { LoginErrorToast } from '~/components/LoginErrorToast'
import { Providers } from '~/components/Providers'
const inter = Inter({ subsets: ['latin'] })
const sfMono = localFont({ src: '../assets/fonts/SFMono.woff2' })
const sohn = localFont({ src: '../assets/fonts/sohn.woff2' })

const franklin = localFont({
  src: [
    {
      path: '../assets/fonts/franklin-300.woff2',
      weight: '400',

      style: 'normal',
    },
    {
      path: '../assets/fonts/franklin-600.woff2',
      weight: '500',

      style: 'normal',
    },
  ],
})

const myFonts = { franklin, sohn, inter, sfMono }

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
          <main className={`${myFonts}.className`}>
            <SiteLayout>{page}</SiteLayout>
          </main>
        </Providers>
      </>
    ))

  return getLayout(<Component {...pageProps} />)
}
