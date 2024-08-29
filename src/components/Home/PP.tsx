"use client"

import { useRef } from "react"

import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"

export default function PP({ children }) {
	const scrollContainerRef = useRef(null)
	const titleRef = useRef(null)
	// const data = JSON.parse(props.data)

	return (
		<Detail.Container data-cy="pp" ref={scrollContainerRef}>
			<TitleBar
				magicTitle
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				title="Privacy Policy"
			/>
			<Detail.Title ref={titleRef}>Privacy Policy</Detail.Title>

			{children}
		</Detail.Container>
	)
}
