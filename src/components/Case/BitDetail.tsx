"use client"

import Image from "next/image"
import type { ReactNode } from "react"
import { useRef } from "react"

import dynamic from "next/dynamic"
import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import { formatDate, realTime } from "~/lib/transformers"

import { useQuery } from "@apollo/client"
import { CommentType, GetCaseDocument } from "~/gql/typeSlut"
import type { LilBits } from "~/lib/sanity/client"

interface Props {
	children: ReactNode
	bit: LilBits
	slug: string
}

export function BitDetail({ bit, children, slug }: Props) {
	const scrollContainerRef = useRef(null)
	const titleRef = useRef(null)
	const { data, loading, error } = useQuery(GetCaseDocument, {
		variables: { slug },
	})
	if (loading) {
		return <Detail.Loading />
	}

	if (!data?.case || error) {
		return <Detail.Null />
	}
	const kase = data?.case

	const date = realTime({ timestamp: bit?.date })
	const Comments = dynamic(
		() => import("src/components/Comments").then(x => x.Comments),
		{
			ssr: false,
		},
	)

	const BitAction = dynamic(() => import("./BitAction").then(x => x.BitAction), {
		ssr: false,
	})

	return (
		<Detail.Container data-cy="bit-detail" ref={scrollContainerRef}>
			<TitleBar
				backButton
				globalMenu={false}
				backButtonHref="/code"
				magicTitle
				title={bit?.title}
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				trailingAccessory={<BitAction x={kase} />}
			/>

			<Detail.ContentContainer>
				<Detail.Header>
					<div className="flex items-center space-x-6">
						<Image
							src={bit?.caption}
							width={80}
							height={80}
							alt={`${bit?.title} icon`}
							className="rounded-2xl"
						/>
						<div>
							<Detail.Title ref={titleRef}>{bit?.title}</Detail.Title>
							<div
								title={bit?.date}
								className="text-tertiary font-semibold text-xs inline-block leading-snug"
							>
								{`${formatDate(bit?.date)} • ${kase?.count} views`}
							</div>
						</div>
					</div>
				</Detail.Header>

				<div className="space-y-12">
					<div className="pt-12">{children}</div>

					{/*           {bit.details.map((detail, i) => (
            <DesignDetailMedia detail={detail} key={`${detail.title}-${i}`} />
          ))} */}
				</div>
				<div className="py-6" />
				<Comments refId={kase?.id} type={CommentType.Case} />
			</Detail.ContentContainer>
		</Detail.Container>
	)
}
