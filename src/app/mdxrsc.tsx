import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc"
import type { JSX } from "react"

import { MLKComponents } from "~/components/MDX"
// import meta2 from "~/components/MDX/Meta2";
// import imageMetadata from "~/components/MDX/image-size";

export default async function Mdx(props: JSX.IntrinsicAttributes & MDXRemoteProps) {
	const { components } = props
	return (
		<div className="prose prose-neutral dark:prose-invert mt-8">
			<MDXRemote
				{...props}
				options={{
					mdxOptions: {
						rehypePlugins: [],
					},
				}}
				components={{ ...MLKComponents, ...(components || {}) }}
			/>
		</div>
	)
}
