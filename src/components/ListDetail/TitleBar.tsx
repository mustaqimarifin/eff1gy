"use client"
import { ArrowLeft, Menu, X } from "lucide-react"
import Link from "next/link"
import {
	type MutableRefObject,
	type ReactNode,
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react"
import { GlobalNavigationContext } from "../Provider"

interface Props {
	title: string
	globalMenu?: boolean
	backButton?: boolean
	backButtonHref?: string
	magicTitle?: boolean
	titleRef?: MutableRefObject<HTMLParagraphElement>
	scrollContainerRef?: MutableRefObject<HTMLDivElement>
	children?: ReactNode
	leadingAccessory?: ReactNode
	trailingAccessory?: ReactNode
}

export function TitleBar({
	title,
	globalMenu = true,
	backButton = false,
	backButtonHref,
	magicTitle = false,
	titleRef,
	scrollContainerRef,
	leadingAccessory,
	trailingAccessory,
	children,
}: Props) {
	const { isOpen, setIsOpen } = useContext(GlobalNavigationContext)
	const [darkMode, setDarkMode] = useState(false)
	const [offset, setOffset] = useState(200)
	const [opacity, _setOpacity] = useState(0)
	const [currentScrollOffset, _setCurrentScrollOffset] = useState(0)

	const [initialTitleOffsets, _setInitialTitleOffsets] = useState({
		top: 0,
		bottom: 0,
	})

	const initialTitleOffsetsRef = useRef(initialTitleOffsets)
	const setInitialTitleOffsets = data => {
		initialTitleOffsetsRef.current = data
		_setInitialTitleOffsets(data)
	}

	const opacityRef = useRef(opacity)
	const setOpacity = data => {
		opacityRef.current = data
		_setOpacity(data)
	}

	const currentScrollOffsetRef = useRef(currentScrollOffset)
	const setCurrentScrollOffset = data => {
		currentScrollOffsetRef.current = data
		_setCurrentScrollOffset(data)
	}

	const handler = useCallback(() => {
		const shadowOpacity = scrollContainerRef!.current.scrollTop / 200
		setCurrentScrollOffset(shadowOpacity > 0.12 ? 0.12 : shadowOpacity)

		if (!titleRef?.current || !initialTitleOffsetsRef?.current) return

		const titleTop = titleRef.current.getBoundingClientRect().top - 48
		const titleBottom = titleRef.current.getBoundingClientRect().bottom - 56
		const initialOffsets = initialTitleOffsetsRef.current

		const offsetAmount =
			Number.parseFloat((titleBottom / initialOffsets.bottom).toFixed(2)) * 100

		const opacityOffset =
			Number.parseFloat((titleTop / initialOffsets.top).toFixed(2)) * -1

		setOffset(Math.min(Math.max(offsetAmount, 0), 100))
		setOpacity(opacityOffset)
	}, [title, titleRef, scrollContainerRef])

	useEffect(() => {
		scrollContainerRef?.current?.addEventListener("scroll", handler)
		return () => scrollContainerRef?.current?.removeEventListener("scroll", handler)
	}, [title, titleRef, scrollContainerRef])

	useEffect(() => {
		if (!titleRef?.current || !scrollContainerRef?.current) return
		scrollContainerRef.current.scrollTop = 0
		setOpacity(0)
		setInitialTitleOffsets({
			bottom: titleRef.current.getBoundingClientRect().bottom - 56,
			top: titleRef.current.getBoundingClientRect().top - 48,
		})
	}, [title, titleRef, scrollContainerRef])

	useEffect(() => {
		const isDarkMode =
			// biome-ignore lint/complexity/useOptionalChain: <explanation>
			window?.matchMedia && window?.matchMedia("(prefers-color-scheme: dark)").matches
		if (isDarkMode) setDarkMode(true)
		/* 		if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
		localStorage.theme = 'light'
		localStorage.theme = 'dark'
		localStorage.removeItem('theme') */
	}, [])

	return (
		<>
			<div
				style={{
					background: `rgba(${darkMode ? "50,50,50" : "255,255,255"},${
						currentScrollOffset === 0
							? currentScrollOffset
							: darkMode
								? currentScrollOffset + 0.5
								: currentScrollOffset + 0.8
					})`,
					boxShadow: `0 1px 3px rgba(0,0,0,${currentScrollOffset})`,
					minHeight: "48px",
				}}
				className="filter-blur sticky top-0 z-10 flex flex-col justify-center px-3 py-2 dark:border-b dark:border-gray-900"
			>
				<div className="flex flex-none items-center justify-between">
					<span className="flex items-center space-x-3">
						{globalMenu && (
							<span
								onClick={() => setIsOpen(!isOpen)}
								className="flex cursor-pointer items-center justify-center rounded-md p-2 hover:bg-gray-200 lg:hidden dark:hover:bg-gray-800"
							>
								{isOpen ? (
									<X size={16} className="text-primary" />
								) : (
									<Menu size={16} className="text-primary" />
								)}
							</span>
						)}

						{backButton && (
							<Link
								href={backButtonHref!}
								className="text-primary flex items-center justify-center rounded-md p-2 hover:bg-gray-200 lg:hidden dark:hover:bg-gray-800"
							>
								<ArrowLeft size={16} className="text-primary" />
							</Link>
						)}
						{leadingAccessory}
						<h2
							style={
								magicTitle
									? {
											transform: `translateY(${offset}%)`,
											opacity: `${opacity}`,
										}
									: {}
							}
							className="text-primary line-clamp-1 transform text-sm font-bold"
						>
							{title}
						</h2>
					</span>

					{trailingAccessory}
				</div>

				<div>{children}</div>
			</div>
		</>
	)
}
