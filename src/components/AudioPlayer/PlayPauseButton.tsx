export default function PlayPauseButton({ isPlaying, onClick }) {
	return (
		<button
			onClick={onClick}
			className="flex h-12 w-12 flex-none cursor-pointer items-center justify-center rounded-md border border-black bg-black hover:border-blue-600 hover:bg-blue-500 focus:border-blue-600 focus:bg-blue-500 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-600 dark:hover:border-blue-400 dark:focus:border-blue-400 dark:focus:bg-blue-500"
		>
			{!isPlaying ? (
				<svg
					width="11"
					height="14"
					viewBox="0 0 11 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="relative left-0.5"
				>
					<path
						d="M0.333008 1.53551C0.333008 0.736812 1.22315 0.260422 1.88771 0.703459L10.0874 6.16994C10.6812 6.56576 10.6812 7.43822 10.0874 7.83404L1.88771 13.3005C1.22315 13.7436 0.333008 13.2672 0.333008 12.4685V1.53551Z"
						fill="currentColor"
					/>
				</svg>
			) : (
				<svg
					width="9"
					height="14"
					viewBox="0 0 9 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<rect width="3" height="14" rx="1.5" fill="currentColor" />
					<rect x="6" width="3" height="14" rx="1.5" fill="currentColor" />
				</svg>
			)}
		</button>
	)
}
