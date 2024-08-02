//import TextareaAutosize from 'react-textarea-autosize'
import { type InputProps, type TextareaProps, Textarea as Titty } from "@headlessui/react"

const styles = cx(
	`w-full rounded-md text-primary px-4 py-2 bg-gray-900/5 dark:bg-white/5  hover border-gray-200 dark:border-gray-700`,
)

export function OGInput({ ...props }) {
	return <input className={styles} {...props} />
}
import { Input as HInput } from "@headlessui/react"
import { cx } from "~/lib/transformers"

export function Input(props: InputProps) {
	return (
		<HInput
			{...props}
			className={cx(
				"block w-full rounded-md border text-slate-800 dark:bg-white/5 py-1.5 px-3 text-sm/6 dark:text-white",
				"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
			)}
		/>
	)
}
/*  export function Textarea({ maxRows = 8, rows = 1, ...props }) {
	return (
		<TextareaAutosize cacheMeasurements maxRows={maxRows} rows={rows} className={`${styles} block`} {...props} />
	)
} */

/* export function Select(props) {
	return <select className={styles} {...props} />;
}
 */

export function Textarea(props: TextareaProps) {
	const { rows = 1 } = props
	return (
		<Titty
			{...props}
			className={cx(
				"mt-3 block w-full resize-none rounded-md border text-slate-800 bg-white/5 py-1.5 px-3 text-sm/6 dark:text-white",
				"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
			)}
			rows={rows}
		/>
	)
}
