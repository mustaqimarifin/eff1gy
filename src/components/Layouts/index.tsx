import type { ReactElement, ReactNode } from "react"

import { Sidebar } from "~/components/Sidebar"
import { cx } from "~/lib/transformers"

interface Props {
	list?: ReactElement | null
	detail?: ReactElement | null
	hasDetail?: boolean
}

export function ListDetailView({ list, detail, hasDetail = false }: Props) {
	return (
		<div className="flex w-full">
			{list && (
				<div
					id="list"
					className={`bg-dots ${hasDetail ? "hidden lg:flex" : "min-h-screen w-full"}`}
				>
					{list}
				</div>
			)}
			{detail}
		</div>
	)
}

export function SiteLayout({ children }: { children: ReactNode }) {
	return (
		<div className="relative flex h-full min-h-screen w-full">
			<Sidebar />
			<div className="flex flex-1">{children}</div>
		</div>
	)
}

export function FunContainer(props) {
	return (
		<div
			className={cx(
				"container px-8 mx-auto xl:px-5",
				props.large ? " max-w-screen-xl" : " max-w-screen-lg",
				!props.alt && "py-5 lg:py-8",
				props.className,
			)}
		>
			{props.children}
		</div>
	)
}
