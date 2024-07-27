import type { ReactNode } from "react"

interface Props {
	children: ReactNode
}

export default function PageTitle({ children }: Props) {
	return (
		<div className=" flex tracking-tighter  text-2xl font-bold leading-9  text-gray-600 dark:text-slate-50 sm:text-3xl sm:leading-10 justify-end">
			{children}
		</div>
	)
}
