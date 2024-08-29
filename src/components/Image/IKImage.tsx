"use client"

import Image from "next/image"
import { Suspense } from "react"
import { Fade } from "./fade"

function imageKitLoader({
	src,
	width,
	quality,
}: {
	src: string
	width: number
	quality?: number
}) {
	if (src[0] === "/") src = src.slice(1)
	const params = [`w-${width}`]
	if (quality) {
		params.push(`q-${quality}`)
	}
	const paramsString = params.join(",")
	let urlEndpoint = "https://ik.imagekit.io/mstqmarfn"
	if (urlEndpoint[urlEndpoint.length - 1] === "/")
		urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1)
	return `${urlEndpoint}/${src}?tr=${paramsString}`
}

function IKImage(props) {
	return (
		<Suspense>
			<Fade>
				<Image
					{...props}
					loader={imageKitLoader}
					// src='default-image.jpg'
					alt="Default image"
					width={400}
					height={400}
				/>
			</Fade>
		</Suspense>
	)
}

export default IKImage
