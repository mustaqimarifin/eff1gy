import Image from "next/image"
import { useEffect, useState } from "react"

export function Avatar({ user, src, ...props }) {
	const fallbackUrl = "/static/img/fallback-avatar.png"
	const [srcState, setSrcState] = useState(src || fallbackUrl)

	// forces avatars to update if the component is in the same place between
	// page loads, e.g. changing between AMA questions, the header avatar should
	// update
	useEffect(() => {
		if (src) setSrcState(src)
	}, [src])

	return (
		<Image
			alt={`${user?.name || user?.name}'s profile photo`}
			src={srcState}
			width={24}
			height={24}
			{...props}
			onError={() => {
				setSrcState(fallbackUrl)
			}}
		/>
	)
}
