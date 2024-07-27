import Image from "next/image"
import { useState } from "react"

export default function TraceImage({ imgSrc, imgTrace, ...rest }) {
	const [isLoaded, setLoaded] = useState(false)

	return (
		<div
			className=" overflow-hidden "
			style={{
				position: "relative",
				overflow: "hidden",
			}}
		>
			<Image
				aria-hidden="true"
				src={imgTrace}
				fill
				/*           sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" */
				priority
				onLoad={() => setLoaded(false)}
				alt=""
				style={{
					position: "absolute",
					top: "0px",
					right: "0px",
					bottom: "0px",
					left: "0px",
					width: "100%",
					height: "100%",
					objectFit: "cover",
					objectPosition: "center",
					filter: "saturate(108%) brightness(103%) hue-rotate(3.142rad)",
					transform: "3s",
					opacity: isLoaded ? "0" : "1",
					transition: "opacity 2s ",
					transitionDelay: "2000ms",
					borderRadius: "20px",
				}}
			/>
			<div
				style={{
					opacity: isLoaded ? "1" : "0",
					transition: "opacity 5s ",
					transitionTimingFunction: "cubic-bezier(0.4, 0, 1, 1)",
				}}
			>
				<Image
					src={imgSrc}
					onLoad={() => setLoaded(true)}
					alt=""
					/*           sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw" */
					className="overflow-hidden object-cover transition ease-in-out"
					style={{
						borderRadius: "20px",
					}}
					{...rest}
					//
				/>
			</div>
		</div>
	)
}
