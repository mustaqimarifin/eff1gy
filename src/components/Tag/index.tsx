import { XCircleIcon } from "lucide-react"
import type { Tag as TTag } from "~/gql/typeSlut"
import { cx } from "~/lib/transformers"

type TagProps = {
	tags: TTag[]
}
export function Tags({ tags }: TagProps) {
	if (!tags || tags.length === 0) return null

	return (
		<div className="flex flex-wrap space-x-2">
			{tags.map(tag => (
				<Tag key={tag.name} name={tag.name} />
			))}
		</div>
	)
}

export function Tag({ name }: TTag) {
	const baseClasses = cx(
		"flex-none justify-center flex items-center space-x-2 cursor-pointer self-start border uppercase rounded-full hover:bg-opacity-10 dark:hover:bg-opacity-30 px-3 py-0.5 text-xs font-semibold leading-5 tracking-wide border-opacity-50 dark:border-opacity-10",
	)

	let specificClasses = ""
	if (name) {
		switch (name?.toLowerCase()) {
			case "web": {
				specificClasses =
					"border-purple-200 text-purple-600 dark:text-purple-300 bg-purple-500 bg-opacity-5 dark:bg-opacity-10"
				break
			}
			case "portfolio": {
				specificClasses =
					"border-green-200 text-green-600 dark:text-green-200  bg-green-500 bg-opacity-5 dark:bg-opacity-10"
				break
			}
			case "lol": {
				specificClasses =
					"border-blue-200 text-blue-600 dark:text-blue-200 bg-blue-500 bg-opacity-5 dark:bg-opacity-10"
				break
			}
			case "software": {
				specificClasses =
					"border-red-200 text-red-600 dark:text-red-200 bg-red-500 bg-opacity-5 dark:bg-opacity-10"
				break
			}

			case "plugins": {
				specificClasses =
					"border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40"
				break
			}
			case "gear": {
				specificClasses =
					"border-orange-200 text-orange-600 dark:text-orange-300 bg-orange-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40"
				break
			}
			case "art": {
				specificClasses =
					"border-pink-200 text-pink-600 dark:text-pink-300 bg-pink-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40"
				break
			}
			case "music": {
				specificClasses =
					"border-indigo-200 text-indigo-600 dark:text-indigo-300 bg-indigo-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40"
				break
			}

			case "__clear_tag_picker": {
				specificClasses =
					"border-gray-200 text-gray-600 dark:text-gray-300 bg-gray-200 bg-opacity-30 dark:bg-opacity-10 hover:bg-opacity-40"
				break
			}
		}
	}
	return (
		<span className={`${baseClasses} ${specificClasses}`}>
			{name === "__clear_tag_picker" ? (
				<>
					<XCircleIcon />
					<span>Clear tag</span>
				</>
			) : (
				name
			)}
		</span>
	)
}
