import { Compass } from "lucide-react"
import type { ReactNode } from "react"
import { forwardRef } from "react"

import { LoadingSpinner } from "~/components/LoadingSpinner"
import Button from "../Button"
import { TitleBar } from "./TitleBar"

//* * ORIGINAL CONTAINER REF */
/*
function ContentContainer(props) {
	return <div className="mx-auto w-full max-w-3xl px-4 py-12 pb-10 md:px-8" {...props} />;
} */

function ContentContainer({ ...props }) {
	return (
		<div
			className="mx-auto w-full max-w-sm px-4 md:px-8 py-12 pb-10  md:max-w-2xl lg:max-w-3xl lg:px-10"
			{...props}
		/>
	)
}

interface DetailContainerProps {
	children: ReactNode
}

const Container = forwardRef<HTMLDivElement, DetailContainerProps>((props, ref) => {
	return (
		<div
			ref={ref}
			id="main"
			className="relative flex max-h-screen w-full flex-col overflow-y-auto bg-white dark:bg-black"
			{...props}
		/>
	)
})

function Header({ ...props }) {
	return <div className="space-y-3" {...props} />
}

interface TitleProps {
	children: ReactNode
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
	return (
		<h1
			ref={ref}
			className="mb-4 text-3xl font-quad tracking-tight text-primary md:text-4xl"
			{...props}
		/>
	)
})

function Loading() {
	return (
		<Container>
			<div className="flex flex-1 flex-col items-center justify-center">
				<LoadingSpinner />
			</div>
		</Container>
	)
}

function Null() {
	return (
		<Container>
			<TitleBar title="Not found" />
			<div className="flex flex-1 flex-col items-center justify-center space-y-6 px-8 text-center lg:px-16">
				<Compass className="text-secondary" size={32} />
				<div className="flex flex-col space-y-1">
					<div className="text-primary font-semibold">What you seek does not exist.</div>
					<div className="text-tertiary">
						Maybe this link is broken. Maybe something was deleted, or moved. In any case,
						there’s nothing to see here...
					</div>
				</div>
				<Button href="/">Go home</Button>
			</div>
		</Container>
	)
}

export const Detail = {
	Container,
	ContentContainer,
	Header,
	Title,
	Loading,
	Null,
}
