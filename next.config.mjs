/**
 * @type {import('next').NextConfig}
 */
export default {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false }

    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ['shiki'],

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
}
