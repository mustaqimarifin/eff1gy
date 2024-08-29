import NextImage from "next/legacy/image"
import Link from "next/link"
import Markdown from "react-markdown"
import rehypeSanitize, { defaultSchema } from "rehype-sanitize"
import linkifyRegex from "remark-linkify-modifier"
import { highlight } from "sugar-high"
import { CLIENT_URL } from "~/graphql/constants"
import { deepmerge } from "~/lib/transformers/merge"
import { createHeading } from "../MDX/CreateHeading"

export function CustomLink1({ href, ...rest }: any) {
	if (href.startsWith("#")) {
		return <Link href={href} {...rest} />
	}

	if (href.startsWith("@")) {
		return <Link href={`/u/${href.slice(1)}`} {...rest} />
	}
	try {
		const url = new URL(href)
		if (url.origin === CLIENT_URL) {
			return <Link href={href} {...rest} />
		}
		return <a target="_blank" rel="noopener" href={href} {...rest} />
	} catch (e) {
		console.error(e)
		return <a target="_blank" rel="noopener" href={href} {...rest} />
	}
}

function Code({ children, ...props }) {
	const codeHTML = highlight(children)
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function getComponentsForVariant(variant) {
	// Blog posts
	switch (variant) {
		case "longform": {
			return {
				a: CustomLink1,
				h1: createHeading(1),
				h2: createHeading(2),
				h3: createHeading(3),
				h4: createHeading(4),
				h5: createHeading(5),
				h6: createHeading(6),
				Callout,
				code: Code,
			}
		}
		// Questions, comments, descriptions on bookmarks, etc.
		case "comment": {
			return {
				a: CustomLink1,
				h1: "p",
				h2: "p",
				h3: "p",
				h4: "p",
				h5: "p",
				h6: "p",
				code: Code,
			}
		}
	}
}
function Image(props) {
	return <NextImage {...props} quality={75} className="mdx-image rounded-md" />
}

const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

function triplet(e1: number, e2: number, e3: number) {
	return (
		keyStr.charAt(e1 >> 2) +
		keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
		keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
		keyStr.charAt(e3 & 63)
	)
}

function rgbDataURL(r: number, g: number, b: number) {
	return `data:image/gif;base64,R0lGODlhAQABAPAA${
		triplet(0, r, g) + triplet(b, 255, 255)
	}/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`
}

function MDXImage(paragraph: { children?: boolean; node?: any }) {
	const { node } = paragraph

	if (node.children[0].tagName === "img") {
		const image = node.children[0]
		const metastring = image.properties.alt
		const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
		const metaWidth = metastring.match(/\{([^}]+)x/)
		const metaHeight = metastring.match(/x([^}]+)\}/)
		const width = metaWidth ? metaWidth[1] : "768"
		const height = metaHeight ? metaHeight[1] : "432"
		const isPriority = metastring?.toLowerCase().match("{priority}")
		const hasCaption = metastring?.toLowerCase().includes("{caption:")
		const caption = metastring?.match(/\{caption: (.*?)\}/)?.pop()

		return (
			<div className="postImgWrapper">
				<Image
					src={image.properties.src}
					width={width}
					height={height}
					className="postImg"
					alt={alt}
					priority={isPriority}
				/>
				{hasCaption ? (
					<div className="caption" aria-label={caption}>
						{caption}
					</div>
				) : null}
			</div>
		)
	}
	return <p>{paragraph.children}</p>
}

function Callout(props) {
	return (
		<div className="mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
			<div className="mr-4 flex w-4 items-center">{props.emoji}</div>
			<div className="callout w-full">{props.children}</div>
		</div>
	)
}

export function MarkdownRenderer(props) {
	const { children, variant = "longform", ...rest } = props

	const schema = deepmerge(defaultSchema, {
		tagNames: [...defaultSchema.tagNames, "sup", "sub", "section"],
		attributes: {
			"*": ["className"],
		},
		clobberPrefix: "",
		clobber: ["name", "id"],
	})

	const components = getComponentsForVariant(variant)

	return (
		<Markdown
			{...rest}
			remarkPlugins={[linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)]}
			rehypePlugins={[[rehypeSanitize, schema]]}
			components={components}
		>
			{children}
		</Markdown>
	)
}
