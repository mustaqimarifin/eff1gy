/* eslint-disable @typescript-eslint/no-var-requires */
//const CompressionPlugin = require('compression-webpack-plugin')
//const zlib = require('zlib')
//const { ESBuildMinifyPlugin, ESBuildPlugin } = require('esbuild-loader')

//const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    esmExternals: 'loose',
    optimizeCss: true,
    legacyBrowsers: false,
    nextScriptWorkers: true,

    //transpilePackages: ['shiki'],

    //urlImports: ['https://cdn.jsdelivr.net/'],
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
      'github.githubassets.com',
      'lh3.googleusercontent.com',
      'wallpaperaccess.com',
    ],
  },
})
/* module.exports = {
  // output: 'standalone',
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    //outputFileTracingRoot: path.join(__dirname, '../../'),
    legacyBrowsers: false,
    esmExternals: true,
    nextScriptWorkers: true,
    //transpilePackages: ['shiki'],

    //urlImports: ['https://cdn.jsdelivr.net/'],
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
      'github.githubassets.com',
      'lh3.googleusercontent.com',
      'wallpaperaccess.com',
    ],
  }, */
/* webpack: (config, { dev, isServer, webpack }) => {
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
          minRatio: 0.7,
          deleteOriginalAssets: false,
        }),
        new ESBuildPlugin(),
        new webpack.ProvidePlugin({
          React: 'react',
        })
      )
      const terserIndex = config.optimization.minimizer.findIndex(
        (minimizer) => minimizer.constructor.name === 'TerserPlugin'
      )
      if (terserIndex > -1) {
        config.optimization.minimizer.splice(
          terserIndex,
          1,
          new ESBuildMinifyPlugin()
        )
      }

      const jsLoader = config.module.rules.find(
        (rule) => rule.test && rule.test.test('.tsx')
      )
      if (jsLoader) {
        jsLoader.use.loader = 'esbuild-loader'
        jsLoader.use.options = {
          loader: 'tsx',
          target: 'esnext',
        }
      }
      const terserIndex = config.optimization.minimizer.findIndex(
        (minimizer) => minimizer.constructor.name === 'TerserPlugin'
      )
      if (terserIndex > -1) {
        config.optimization.minimizer.splice(
          terserIndex,
          1,
          new ESBuildMinifyPlugin()
        )
      }

      const jsLoader = config.module.rules.find(
        (rule) => rule.test && rule.test.test('.tsx')
      )
      if (jsLoader) {
        jsLoader.use.loader = 'esbuild-loader'
        jsLoader.use.options = {
          loader: 'tsx',
          target: 'esnext',
        }
      }
    }

    // Important: return the modified config
    return config
  }, */
