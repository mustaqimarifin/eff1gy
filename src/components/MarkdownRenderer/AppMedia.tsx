export function DesignDetailMedia(props) {
	const { src, detail } = props
	return (
		<div className="-mx-4 mb-4 mt-8 flex items-center justify-center rounded-none bg-gray-100 p-2 dark:bg-gray-900 md:-mx-8 md:p-4 xl:rounded-md">
			<video
				playsInline
				muted
				loop
				autoPlay
				preload="metadata"
				style={{
					minHeight: `${detail.orientation === "landscape" ? "320px" : "680px"}`,
					maxWidth: `${detail.orientation === "landscape" ? "100%" : "400px"}`,
				}}
				className="h-full w-full overflow-hidden rounded-md"
			>
				<source src={`${src}#t=0.1`} />
			</video>
		</div>
	)
}
