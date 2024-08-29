import NextImage from "next/image"
import { Suspense, cache } from "react"

import { Fade } from "./fade"

function GhostImage(props) {
	return (
		<Suspense>
			<Fade>
				<NextImage {...props} className="rounded-lg" />
			</Fade>
		</Suspense>
	)
}

export default cache(GhostImage)
