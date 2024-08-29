export const baseUrl =
	process.env.NODE_ENV === "production" ? "https://eff1gy.vercel.app" : ""
export const baseEmail = "mstmarfn@gmail.com"

export const defaultSEO = {
	title: "Mustaqim Arifin",
	description: "Product designer, podcaster, and writer, living in Kuala Lumpur.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: baseUrl,
		site_name: "Mustaqim Arifin",
		images: [
			{
				url: `${baseUrl}/static/og/default.png`,
				alt: "Mustaqim Arifin",
			},
		],
	},
	twitter: {
		handle: "@vmprmyth",
		site: "@vmprmyth",
		cardType: "summary_large_image",
	},
}

interface SEOProps {
	title?: string
	description?: string
	image?: string
	url?: string
}

export function extendSEO(options: SEOProps) {
	const images = options.image
		? [{ url: `${baseUrl}/static/${options.image}` }]
		: defaultSEO.openGraph.images

	return {
		...defaultSEO,
		...options,
		url: `${baseUrl}/${options.url}`,
		openGraph: {
			...defaultSEO.openGraph,
			images,
			url: `${baseUrl}/${options.url}`,
		},
	}
}
