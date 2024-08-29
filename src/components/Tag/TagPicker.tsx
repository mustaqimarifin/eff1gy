"use client"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react"
import { ChevronDown } from "lucide-react"
import React from "react"
import { useGetTagsQuery } from "~/gql/typeSlut"
import { Tag } from "."

export function TagPicker({ filter, onChange, defaultValue = undefined }) {
	const { data, loading, error } = useGetTagsQuery()
	const [selected, setSelected] = React.useState(defaultValue)

	if (loading) return null

	function handleChange(val) {
		setSelected(val)
		onChange(val)
	}
	/* 	"block w-full rounded-md border text-slate-800 dark:bg-white/5 py-1.5 px-3 text-sm/6 dark:text-white",
		"focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25", */
	return (
		<Listbox value={selected} onChange={handleChange}>
			<div className="relative z-10 mt-1 text-sm/6 focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25">
				<ListboxButton
					className={`relative w-full cursor-pointer opacity-70 rounded-md border  dark:text-white border-gray-200 dark:bg-white/5 py-1.5 px-3  pl-4 pr-10 text-left shadow-sm dark:border-gray-700  ${
						selected ? "text-primary" : "text-quaternary"
					}`}
				>
					{selected ? <>{selected}</> : "Choose a tag..."}
					<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
						<ChevronDown size={16} aria-hidden="true" />
					</span>
				</ListboxButton>
				<ListboxOptions className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white text-base shadow-sm dark:border-gray-700 dark:bg-gray-700">
					<div className="flex flex-wrap p-2">
						{error && <p>Oh no... {error.message}</p>}
						{data.tags
							.filter(t => (filter ? filter(t) : true))
							.map(tag => (
								<ListboxOption
									key={tag.name}
									className={`text-primary relative flex flex-none cursor-pointer select-none p-1`}
									value={tag.name}
								>
									<Tag name={tag.name} />
								</ListboxOption>
							))}
					</div>
					<div className="w-full border-t border-gray-150 p-2 dark:border-gray-600">
						<ListboxOption
							className={`text-primary relative flex flex-none cursor-pointer select-none p-1`}
							value={null}
						>
							<Tag name={"__clear_tag_picker"} />
						</ListboxOption>
					</div>
				</ListboxOptions>
			</div>
		</Listbox>
	)
}
