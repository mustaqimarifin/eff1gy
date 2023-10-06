/**
 * @type {import('next').NextConfig}
 */
export default {
  eslint: {
    ignoreDuringBuilds: true,
  },
  transpilePackages: ["react-tweet"],

  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "i.scdn.co", //$ Spotify Album Art
      "pbs.twimg.com",
      "abs.twimg.com",
      "overthought.ghost.io",
      "imagedelivery.net",
      "res.cloudinary.com",
      "ik.imagekit.io",
      "avatars.githubusercontent.com",
      "github.githubassets.com",
      "lh3.googleusercontent.com",
      "wallpaperaccess.com",
    ],
  },
}
