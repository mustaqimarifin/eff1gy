"use client"
import Image from "next/image"
import React, { useState } from "react"
import { InView } from "react-intersection-observer"

import { cx } from "~/lib/transformers"

export function DickPics({ src }) {
	const [isLoading, setLoading] = useState(true)
	const [isVisible, setIsVisible] = useState(false)

	return (
		<InView as="div" onChange={(visible: boolean) => !isVisible && setIsVisible(visible)}>
			<div className="mb-6 max-w-3xl content-center justify-center  md:rounded-lg">
				<Image
					src={src}
					alt=""
					width={1307}
					height={560}
					style={{
						width: "100%",
						height: "auto",
					}}
					className={cx(
						" mx-auto flex  w-full items-center justify-center object-cover object-top duration-700 ease-in-out group-hover:opacity-75 lg:max-w-7xl",
						isLoading && isVisible
							? "scale-110 blur-2xl grayscale"
							: "scale-100  grayscale-0",
					)}
					onLoad={() => setLoading(false)}
					// blurDataURL={blurDataUrl}
				/>
				{/*       <figcaption className="text-center ">
        {caption && (
          <span className="text-sm italic text-gray-600 dark:text-gray-400">
            {caption}
          </span>
        )}
      </figcaption> */}
			</div>
		</InView>
	)
}

export function DickArray({ src }) {
	return (
		<>
			<DickPics src={src} />
			<DickPics src={src} />
			<DickPics src={src} />
			<DickPics src={src} />
			<DickPics src={src} />
			<DickPics src={src} />
		</>
	)
}
