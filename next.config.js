module.exports = {
  swcMinify: true,
  resolve: {
    fallback: {
      fs: false,
    },
  },
  /*   webpack: (config, { isServer }) => {
    // If client-side, don't polyfill `fs`
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      }
    }

    return config
  }, */
  images: {
    domains: [
      'pbs.twimg.com',
      'abs.twimg.com',
      'overthought.ghost.io',
      'imagedelivery.net',
      'res.cloudinary.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/uses',
        destination: '/stack',
        permanent: true,
      },

      {
        source: '/journal',
        destination: '/writing',
        permanent: true,
      },

      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
