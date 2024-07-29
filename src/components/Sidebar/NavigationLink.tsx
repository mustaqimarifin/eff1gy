import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { type ReactElement, memo, useContext, useMemo } from "react"

import { GlobalNavigationContext } from "~/components/Provider"

type Item = {
	href: string
	label: string
	icon: any
	trailingAccessory?: any
	trailingAction?: any
	isActive: boolean
	isExternal: boolean
}
type NavLinkProps = {
	item: Item
}
export const NavigationLink = memo<NavLinkProps>(({ item }) => {
	/* const value = useMemo(() => {
		return item
	}, [item]) */
	const { href, label, icon, trailingAccessory, trailingAction, isActive, isExternal } = item
	let Icon = icon
	let Accessory = trailingAccessory
	let Action = trailingAction
	const { setIsOpen } = useContext(GlobalNavigationContext)

	return (
		<li key={href} className="flex items-stretch space-x-1" onClick={() => setIsOpen(false)}>
			<Link
				href={href}
				target={isExternal ? "_blank" : undefined}
				rel={isExternal ? "noopener noreferrer" : undefined}
				className={`flex flex-1 items-center space-x-3 rounded-md px-2 py-1.5 text-sm font-medium  ${
					isActive
						? "bg-black text-white hover:bg-black hover:text-white dark:bg-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
						: "text-gray-700 dark:text-gray-200 sm:hover:bg-gray-200 sm:hover:text-gray-900 sm:dark:hover:bg-gray-700 sm:dark:hover:text-gray-200"
				}`}
			>
				<span className="flex w-4 items-center justify-center">
					<Icon />
				</span>
				<span className="flex-1">{label}</span>
				{Accessory && (
					<span className="flex w-4 items-center justify-center text-black text-opacity-40 dark:text-white">
						<Accessory />
					</span>
				)}
			</Link>
			{Action && <Action />}
		</li>
	)
})
