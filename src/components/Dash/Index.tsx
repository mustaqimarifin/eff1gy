"use client"
import { useRef } from "react"

import { Detail } from "../ListDetail/Detail"
import { TitleBar } from "../ListDetail/TitleBar"

function SectionTitle(props: any) {
	return (
		<h4
			className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
			{...props}
		/>
	)
}

export function SectionContent(props) {
	return <div className="col-span-10" {...props} />
}

function SectionContainer(props) {
	return <div className="grid items-start grid-cols-1 gap-6 md:grid-cols-12" {...props} />
}

export function DashPage({ children }) {
	const scrollContainerRef = useRef(null)
	const titleRef = useRef(null)

	return (
		<Detail.Container data-cy="dash-detail" ref={scrollContainerRef}>
			<TitleBar
				magicTitle
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				title="Dashboard"
			/>
			{/* Keep this div to trigger the magic scroll */}
			<div className="p-4" ref={titleRef} />

			<Detail.ContentContainer>
				<div className="pb-24 space-y-8 md:space-y-16">
					<SectionContainer>
						<SectionTitle />
						{children}
					</SectionContainer>
				</div>
			</Detail.ContentContainer>
		</Detail.Container>
	)
}
