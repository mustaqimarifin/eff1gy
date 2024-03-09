"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useRef } from "react";

import { Detail } from "~/components/ListDetail/Detail";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import { realTime } from "~/lib/transformers";

import type { LilBits } from "~/lib/sanity/client";
import dynamic from "next/dynamic";
import { CommentType } from "~/graphql/typeSlut";
import { BitAction } from "./BitAction";

interface Props {
	children: ReactNode;
	bit: LilBits;
}

export function BitDetail({ bit, children }: Props) {
	const scrollContainerRef = useRef(null);
	const titleRef = useRef(null);

	const date = realTime({ timestamp: bit?.date });
	const Comments = dynamic(() => import("src/components/Comments").then((x) => x.Comments), {
		ssr: false,
	});

	return (
		<Detail.Container data-cy="app-detail" ref={scrollContainerRef}>
			<TitleBar
				backButton
				globalMenu={false}
				backButtonHref={"/code"}
				magicTitle
				title={bit?.title}
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				trailingAccessory={<BitAction x={bit} />}
			/>

			<Detail.ContentContainer>
				<Detail.Header>
					<div className="flex items-center space-x-6">
						<Image src={bit?.caption} width={80} height={80} alt={`${bit?.title} icon`} className={"rounded-2xl"} />
						<div>
							<Detail.Title ref={titleRef}>{bit?.title}</Detail.Title>
							<span title={date.raw} className="text-tertiary inline-block leading-snug">
								{date.formatted}
							</span>
						</div>
					</div>
				</Detail.Header>

				<div className="space-y-12">
					<div className="prose pt-12">{children}</div>

					{/*           {bit.details.map((detail, i) => (
            <DesignDetailMedia detail={detail} key={`${detail.title}-${i}`} />
          ))} */}
				</div>
				<div className="py-6" />
				<Comments refId={bit?.id} type={CommentType.Case} />
			</Detail.ContentContainer>
		</Detail.Container>
	);
}
