import '~/app/style1.css'
import '~/app/style2.css'

import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'

import { SiteLayout } from '~/components/Layouts'
import { Providers } from '~/components/Provider'
import { Toast } from '~/components/Provider/Toaster'
import { CLIENT_URL } from '~/graphql/constants'
import { cx } from '~/lib/transformers'

export const metadata: Metadata = {
  metadataBase: new URL(CLIENT_URL),
  title: {
    default: 'Mustaqim Arifin',
    template: '%s | Mustaqim Arifin',
  },
  description: 'Developer, writer, and musician.',
  openGraph: {
    title: 'Mustaqim Arifin',
    description: 'Developer, writer, and musician.',
    url: CLIENT_URL,
    siteName: 'Mustaqim Arifin',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Mustaqim Arifin',
    card: 'summary_large_image',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cx(GeistSans.variable, GeistMono.variable)}>
      <body>
        <span className="text-tertiary absolute flex -translate-y-full transform space-x-1 border-b border-gray-150 bg-white p-2 focus-within:relative focus-within:translate-y-0 dark:border-gray-800 dark:bg-gray-900">
          <a className="text-primary font-semibold" href="#main">
            Skip to content
          </a>
          <span>(if available)</span>
          <span>or</span>
          <a className="text-primary font-semibold" href="#list">
            jump to list
          </a>
          <span>(if available)</span>
        </span>
        <main>
          <Toast />
          <Providers>
            <SiteLayout>{children}</SiteLayout>
          </Providers>
        </main>
      </body>
    </html>
  )
}
