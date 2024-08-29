import "tippy.js/dist/tippy.css"

import Tippy from "@tippyjs/react"

interface Props {
	content: string
	style?: object
	children: any
}

export function Tooltip(props: Props) {
	const { style, content, ...rest } = props

	return (
		<Tippy
			placement="top"
			touch={false}
			arrow
			hideOnClick={false}
			content={
				<span className="text-sm font-medium" style={{ ...style }}>
					{content}
				</span>
			}
			popperOptions={{
				modifiers: [
					{
						name: "preventOverflow",
						options: {
							boundariesElement: "window",
						},
					},
				],
			}}
			{...rest}
		/>
	)
}
