import { useEffect, useRef, useState } from "react"

export function useDebounce(value: string, delay: number) {
	const [debouncedValue, setDebouncedValue] = useState(value)

	useEffect(() => {
		const timer = setTimeout(() => setDebouncedValue(value), delay)

		return () => {
			clearTimeout(timer)
		}
	}, [value, delay])

	return debouncedValue
}

type Delay = number | null
type TimerHandler = (...args: any[]) => void

export function useInterval(callback: TimerHandler, delay: Delay) {
	const savedCallbackRef = useRef<TimerHandler>()

	useEffect(() => {
		savedCallbackRef.current = callback
	}, [callback])

	useEffect(() => {
		const handler = (...args: any[]) => savedCallbackRef.current!(...args)

		if (delay !== null) {
			const intervalId = setInterval(handler, delay)
			return () => clearInterval(intervalId)
		}
	}, [delay])
}

const hasFocus = () => typeof document !== "undefined" && document.hasFocus()

export function useWindowFocus({ ...props }) {
	const [focused, setFocused] = useState(hasFocus) // Focus for first render

	useEffect(() => {
		setFocused(hasFocus()) // Focus for additional renders

		const onFocus = () => setFocused(true)
		const onBlur = () => setFocused(false)

		window.addEventListener("focus", onFocus)
		window.addEventListener("blur", onBlur)

		return () => {
			window.removeEventListener("focus", onFocus)
			window.removeEventListener("blur", onBlur)
		}
	}, [])

	return focused
}
