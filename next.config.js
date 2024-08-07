//import MillionLint from "@million/lint"
const config = {
	reactStrictMode: false,
	/* 	experimental: {
  	swcPlugins: [["@graphql-codegen/client-preset-swc-plugin", { artifactDirectory: "./src/gql", gqlTagName: "gql" }]],
  }, */
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
	webpack(config, { webpack }) {
		config.plugins.push(
			new webpack.DefinePlugin({
				"globalThis.__DEV__": false,
			}),
		)
		return config
	},
}
/* export default MillionLint.next({
	rsc: true,
})(config)
 */

export default config
