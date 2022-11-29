import '~/styles/custom-styles.css'
//import '~/styles/dracula.css'
//import '~/styles/nightOwl.css'
import '~/styles/material-lighter.css'
import '~/styles/prose-styles.css'

import localFont from '@next/font/local'
import * as React from 'react'

import { SiteLayout } from '~/components/Layouts'
import { LoginErrorToast } from '~/components/LoginErrorToast'
import { Providers } from '~/components/Providers'
const inter = localFont({
  src: [
    {
      path: '../assets/fonts/InterTight.woff2',
      style: 'normal',
    },
    {
      path: '../assets/fonts/InterTight-Italic.woff2',
      style: 'italic',
    },
  ],
})

const sfMono = localFont({ src: '../assets/fonts/SFMono.woff2' })

const myFonts = { inter, sfMono }

//const inter = Inter_Tight({ subsets: ['latin'] })
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Providers session={session} pageProps={pageProps}>
        <LoginErrorToast />
        <main className={`${myFonts}.className`}>
          <SiteLayout>{page}</SiteLayout>
        </main>
      </Providers>
    ))

  return getLayout(<Component session={session} {...pageProps} />)
}
