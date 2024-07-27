import Image from "next/image"

import avatar from "~/app/avatar2.webp"

export function Globe() {
	return (
		<div className=" m-4 w-[120px] sm:w-[190px] ease-out hover:duration-1000 ">
			<Image
				alt=""
				className=" grayscale filter transition  rounded-full  hover:transition-all hover:grayscale-0"
				src={avatar}
				placeholder="blur"
				width={100}
				height={100}
			/>
		</div>
	)
}
