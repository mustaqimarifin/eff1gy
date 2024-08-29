"use client"

import { useRef } from "react"

import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"

export default function TOS({ children }) {
	const scrollContainerRef = useRef(null)
	const titleRef = useRef(null)
	return (
		<Detail.Container data-cy="pp" ref={scrollContainerRef}>
			<TitleBar
				magicTitle
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				title="Terms of Service"
			/>
			{children}
		</Detail.Container>
	)
}
