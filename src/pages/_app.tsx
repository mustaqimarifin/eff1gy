import '~/styles/custom-styles.css'
import '~/styles/material-lighter.css'
import '~/styles/prose-styles.css'

import { Inter } from '@next/font/google'
import localFont from '@next/font/local'
import * as React from 'react'

import { SiteLayout } from '~/components/Layouts'
import { LoginErrorToast } from '~/components/LoginErrorToast'
import { Providers } from '~/components/Providers'

const inter = Inter({ subsets: ['latin'] })
const sfMono = localFont({ src: '../assets/fonts/SFMono.woff2' })
const myFonts = { inter, sfMono }

export default function App({ Component, pageProps }) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Providers pageProps={pageProps}>
        <LoginErrorToast />
        <main className={`${myFonts}.className`}>
          <SiteLayout>{page}</SiteLayout>
        </main>
      </Providers>
    ))

  return getLayout(<Component {...pageProps} />)
}
