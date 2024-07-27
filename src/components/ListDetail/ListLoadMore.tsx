"use client"
import type { Dispatch } from "react"
import { InView, useInView } from "react-intersection-observer"
import { LoadingSpinner } from "../LoadingSpinner"
//import { useState } from 'react'

export function ListLoadMore({ setIsVisible }: { setIsVisible: Dispatch<boolean> }) {
	const { ref } = useInView({
		threshold: 0.8,
	})
	return (
		<div id="load-more" ref={ref}>
			<InView as="div" onChange={(visible: boolean) => setIsVisible(visible)}>
				<div className="flex w-full items-center justify-center p-4">
					<LoadingSpinner />
				</div>
			</InView>
		</div>
	)
}
