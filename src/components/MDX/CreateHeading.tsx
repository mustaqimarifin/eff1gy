/* eslint-disable style/no-mixed-spaces-and-tabs */
import React from "react"
import { slugify } from "~/lib/functions"

export function createHeading(level) {
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
