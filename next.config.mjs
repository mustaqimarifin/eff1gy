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
      "i.postimg.cc",
      "abs.twimg.com",
      "overthought.ghost.io",
      "imagedelivery.net",
      "res.cloudinary.com",
      "ik.imagekit.io",
      "avatars.githubusercontent.com",
      "github.githubassets.com",
      "lh3.googleusercontent.com",
      "wallpaperaccess.com",
      "cdn.sanity.io",
      "m.media-amazon.com",
      "i.ytimg.com",
    ],
    dangerouslyAllowSVG: true,
  },
}
