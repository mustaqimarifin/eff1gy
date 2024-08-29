import Link from "next/link"
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react"
import { forwardRef } from "react"

interface BaseButtonProps {
	[key: string]: unknown
	href?: string | null
	as?: string | null
	size: string
	disabled?: boolean
}

type ButtonAsButton = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

type ButtonAsLink = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>

type ButtonProps = ButtonAsButton | ButtonAsLink

function BaseButton({ href, as, forwardedRef = null, ...rest }) {
	if (href?.startsWith("/")) {
		return <Link href={href} as={as} {...rest} />
	}
	if (href) {
		return <a ref={forwardedRef} href={href} {...rest} />
	}
	return <button ref={forwardedRef} {...rest} />
}

const baseClasses =
	"flex space-x-2 flex-none items-center justify-center cursor-pointer leading-none transition-all font-semibold"

function getSize(size = null) {
	switch (size) {
		case "large": {
			return "px-4 py-3 text-sm"
		}
		case "small": {
			return "px-2.5 py-1.5 text-xs"
		}
		case "small-square": {
			return "p-2 text-sm"
		}
		default: {
			return "px-4 py-2 text-sm"
		}
	}
}

function getOpacity(disabled = false) {
	return disabled ? "opacity-50 cursor-not-allowed" : "opacity-100"
}

function getRadius(size = null) {
	switch (size) {
		case "large": {
			return "rounded-lg"
		}
		case "small": {
			return "rounded"
		}
		default: {
			return "rounded-md"
		}
	}
}

const composer = {
	getSize,
	getOpacity,
	getRadius,
}

export const Button = forwardRef((props: ButtonProps, ref) => {
	const classes = `text-gray-700 hover:text-gray-1000 shadow-xs bg-white border border-gray-400 border-opacity-30 dark:border-gray-700 dark:hover:border-gray-600 dark:bg-white dark:bg-opacity-10 dark:text-gray-200 dark:hover:text-white hover:border-opacity-50 hover:shadow-sm`
	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			forwardedRef={ref}
			className={composed}
			{...props}
		/>
	)
})
export const ViewButton = forwardRef((props: ButtonProps, ref) => {
	const classes = `text-gray-700  shadow-xs bg-white border border-gray-400 border-opacity-30 dark:border-gray-700  dark:bg-white dark:bg-opacity-10 dark:text-gray-200 dark:hover:text-white select-none hover:shadow-sm`
	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			forwardedRef={ref}
			className={composed}
			{...props}
		/>
	)
})

export default Button

export const PrimaryButton = forwardRef((props: ButtonProps, ref) => {
	const classes = `text-white hover:text-white shadow-xs bg-blue-500 border border-blue-600 dark:border-blue-400 dark:border-opacity-50 hover:shadow-sm`
	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			forwardedRef={ref}
			className={composed}
			{...props}
		/>
	)
})

export const DeleteButton = forwardRef((props: ButtonProps, ref) => {
	const classes = `bg-white border border-gray-200 dark:border-red-500 dark:hover:border-red-500  dark:bg-red-500 dark:border-opacity-20 dark:bg-opacity-10 text-red-500 hover:border-red-500 hover:text-white hover:bg-red-600 focus:bg-red-600 dark:focus:text-white`

	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			forwardedRef={ref}
			className={composed}
			{...props}
		/>
	)
})

export const RecordingButton = forwardRef((props: ButtonProps, ref) => {
	const classes = `bg-green-500 border border-green-600 dark:border-green-500 dark:hover:border-green-500 dark:bg-green-500 dark:border-opacity-20 dark:bg-opacity-10  text-white hover:bg-green-600`
	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			forwardedRef={ref}
			className={composed}
			{...props}
		/>
	)
})

export const GhostButton = forwardRef((props: ButtonProps, ref) => {
	const classes = `text-gray-700 hover:text-gray-1000 bg-gray-200 bg-opacity-0 hover:bg-opacity-100 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-white`
	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			forwardedRef={ref}
			className={composed}
			{...props}
		/>
	)
})

export const CommentButton = forwardRef((props: ButtonProps, ref) => {
	const classes = `${
		props.disabled
			? "text-gray-500 border-gray-400 bg-opacity-50 dark:border-gray-700"
			: "border-blue-600 bg-blue-500 dark:bg-opacity-100 text-gray-600 hover:bg-blue-600 dark:border-blue-400"
	} shadow-xs bg-white  border border-opacity-30 dark:bg-opacity-10 hover:text-gray-100 hover:border-opacity-50 hover:shadow-sm w-8 rounded`
	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			className={composed}
			forwardedRef={ref}
			{...props}
		/>
	)
})

export const TwitterButton = forwardRef((props: ButtonProps, ref) => {
	const classes = `bg-twitter text-white space-x-4 items-center`
	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			forwardedRef={ref}
			className={composed}
			{...props}
		/>
	)
})

export const GoogleButton = forwardRef((props: ButtonProps, ref) => {
	const classes = `bg-pink-600 text-white space-x-4 items-center`
	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			forwardedRef={ref}
			className={composed}
			{...props}
		/>
	)
})

export const GithubButton = forwardRef((props: ButtonProps, ref) => {
	const classes = `bg-accent text-white space-x-4 items-center`
	const size = composer.getSize(props.size)
	const opacity = composer.getOpacity(props.disabled)
	const radius = composer.getRadius(props.size)
	const composed = `${baseClasses} ${size} ${opacity} ${radius} ${classes}`
	return (
		<BaseButton
			href={props.href}
			as={props.as}
			forwardedRef={ref}
			className={composed}
			{...props}
		/>
	)
})
