"use client";

import { InView } from "react-intersection-observer";

import { LoadingSpinner } from "../LoadingSpinner";

export function ListLoadMore({ setIsVisible }) {
	return (
		<InView as="div" onChange={(visible: boolean) => setIsVisible(visible)}>
			<div className="flex w-full items-center justify-center p-4">
				<LoadingSpinner />
			</div>
		</InView>
	);
}
