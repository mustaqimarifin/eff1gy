import { Hash } from "lucide-react"
import React, { type ReactNode } from "react"
import { slugify } from "~/lib/functions"

/* export function createHeading(level) {
	return ({ children }) => {
		const slug = slugify(children)
		return React.createElement(
			`h${level}`,
			{ id: slug },
			[
				React.createElement("a", {
					href: `#${slug}`,
					key: `link-${slug}`,
					className: "anchor",
				}),
			],
			children,
		)
	}
}
 */

type HeadingProps = {
	id?: string
	children?: ReactNode
}

export const heading = (As: "h1" | "h2" | "h3" | "h4" | "h5" | "h6") => {
	const Heading = ({ id, children }: HeadingProps) => (
		<a href={`#${id}`} className="group relative no-underline focus-visible:ring-0">
			<Hash
				className="text-primary-500 dark:text-primary-400 absolute -left-5 hidden h-full p-1 group-hover:block group-focus-visible:block sm:-left-6"
				strokeWidth="3"
			/>
			<As
				id={id}
				className="group-focus-visible:decoration-primary-500 group-focus-visible:underline group-focus-visible:decoration-2"
			>
				{children}
			</As>
		</a>
	)
	Heading.displayName = As
	return Heading
}
