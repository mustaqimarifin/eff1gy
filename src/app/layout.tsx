import "~/app/style.css"

import type { Metadata, Viewport } from "next"

import type { ReactNode } from "react"

import { SiteLayout } from "~/components/Layouts"
import { Providers } from "~/components/Provider"
import { Toast } from "~/components/Provider/Toaster"
import { CLIENT_URL } from "~/graphql/constants"
import { cx } from "~/lib/transformers"
import { GSans, Imp, Mono, Quad } from "./fonts"

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
}

export const metadata: Metadata = {
	metadataBase: new URL(CLIENT_URL),
	title: {
		default: "Mustaqim Arifin",
		template: "%s | Mustaqim Arifin",
	},
	description: "Developer, writer, and musician.",
	openGraph: {
		title: "Mustaqim Arifin",
		description: "Developer, writer, and musician.",
		url: CLIENT_URL,
		siteName: "Mustaqim Arifin",
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "Mustaqim Arifin",
		card: "summary_large_image",
	},
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={cx(Quad.variable, GSans.variable, Mono.variable, Imp.variable)}
		>
			<body>
				<span className="text-tertiary absolute flex -translate-y-full transform space-x-1 border-b border-gray-150 bg-white p-2 focus-within:relative focus-within:translate-y-0 dark:border-gray-800 dark:bg-gray-900">
					<a className="text-primary font-semibold" href="#main">
						Skip to content
					</a>
					<span>(if available)</span>
					<span>or</span>
					<a className="text-primary font-semibold" href="#list">
						jump to list
					</a>
					<span>(if available)</span>
				</span>
				<main>
					<Toast />
					<Providers>
						<SiteLayout>{children}</SiteLayout>
					</Providers>
				</main>
			</body>
		</html>
	)
}
