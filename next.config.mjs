import withPlaiceholder from '@plaiceholder/next'

const config = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  /*   experimental: {
    swcPlugins: [
      [
        '@graphql-codegen/client-preset-swc-plugin',
        { artifactDirectory: './src/gql', gqlTagName: 'gql' },
      ],
    ],
  }, */
  transpilePackages: ['react-tweet'],
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: '*.twimg.com', pathname: '/**' },
      { protocol: 'https', hostname: 'i.postimg.cc', pathname: '/**' },
      { protocol: 'https', hostname: 'cdn.sanity.io', pathname: '/**' },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
}

export default withPlaiceholder(config)
