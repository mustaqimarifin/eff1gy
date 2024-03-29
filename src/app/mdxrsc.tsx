import { MDXRemote } from "next-mdx-remote/rsc";

//import linkifyRegex from 'remark-linkify-regex'
import { components } from "~/components/MDX";
//import meta2 from "~/components/MDX/Meta2";
//import imageMetadata from "~/components/MDX/image-size";

export default async function Mdx(props) {
	return (
		<div className="prose prose-neutral dark:prose-invert mt-8">
			<MDXRemote
				{...props}
				options={{
					mdxOptions: {
						rehypePlugins: [],
					},
				}}
				components={{ ...components, ...(props.components || {}) }}
			/>
		</div>
	);
}
