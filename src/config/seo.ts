//export const CLIENT_URL =
//  process.env.NODE_ENV === 'production' ? 'https://eff1gy.vercel.app' : ''
import { CLIENT_URL } from '~/graphql/constants'
export const baseUrl = 'https://eff1gy.vercel.app'
export const devUrl = 'https://localhost:3000'

export const baseEmail = 'vmprmyth@gmail.com'

export const defaultSEO = {
  title: 'Mustaqim Arifin',
  description: 'Product designer, podcaster, and writer, living in KL.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: CLIENT_URL,
    site_name: 'Mustaqim Arifin',
    images: [
      {
        url: `${CLIENT_URL}/static/og/default.png`,
        alt: 'Mustaqim Arifin',
      },
    ],
  },
  twitter: {
    handle: '@vmprmyth',
    site: '@vmprmyth',
    cardType: 'summary_large_image',
  },
}

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

export function extendSEO(options: SEOProps) {
  const images = options.image
    ? [{ url: `${CLIENT_URL}/static/${options.image}` }]
    : defaultSEO.openGraph.images

  return {
    ...defaultSEO,
    ...options,
    url: `${CLIENT_URL}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${CLIENT_URL}/${options.url}`,
    },
  }
}
