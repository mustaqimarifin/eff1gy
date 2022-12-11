/* eslint-disable @typescript-eslint/no-var-requires */
const CompressionPlugin = require('compression-webpack-plugin')
const zlib = require('zlib')

module.exports = {
  output: 'standalone',
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
    legacyBrowsers: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'i.scdn.co', //$ Spotify Album Art
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
  webpack: (config, { dev, isServer }) => {
    // Note: we provide webpack above so you should not `require` it
    if (!dev && !isServer) {
      config.plugins.push(
        new CompressionPlugin({
          filename: '[path][base].br',
          algorithm: 'brotliCompress',
          test: /\.(js|css|html|svg)$/,
          compressionOptions: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
          threshold: 10240,
          minRatio: 0.8,
          deleteOriginalAssets: false,
        })
      )
    }

    // Important: return the modified config
    return config
  },
}
