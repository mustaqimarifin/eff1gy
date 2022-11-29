/* eslint-disable @typescript-eslint/no-var-requires */
/* const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
}) */

module.exports = {
  swcMinify: true,
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'pbs.twimg.com',
      'abs.twimg.com',
      'overthought.ghost.io',
      'imagedelivery.net',
      'res.cloudinary.com',
      'ik.imagekit.io',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
    ],
  },
  /*   async redirects() {
    return [
      {
        source: '/uses',
        destination: '/stack',
        permanent: true,
      },
      {
        source: '/design-details',
        destination: '/app-dissection',
        permanent: true,
      },
      {
        source: '/design-details/:slug',
        destination: '/app-dissection/:slug',
        permanent: true,
      },
      {
        source: '/journal',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/overthought',
        destination: '/writing',
        permanent: true,
      },
      {
        source: '/overthought/:slug',
        destination: '/writing/:slug',
        permanent: true,
      },
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
    ]
  }, */
}
