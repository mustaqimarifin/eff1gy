/** @type {import('next').NextConfig} */
const config = {
	reactStrictMode: false,
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: [
			{
				protocol: "https",
				hostname: "*.twimg.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.postimg.cc",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.scdn.co",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
				pathname: "/mstqmarfn/**",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				pathname: "/**",
			},
		],
		dangerouslyAllowSVG: true,
	},
}
module.exports = config
