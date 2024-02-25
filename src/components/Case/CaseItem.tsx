"use client";

import Image from "next/image";
import { memo } from "react";

import { ListItem } from "~/components/ListDetail/ListItem";

import type { CaseStudy } from "../Blogs/BlogDetail";

interface Props {
	casestudy: CaseStudy;
	active: boolean;
}

export const CaseListItem = memo<Props>(({ casestudy, active }) => {
	return (
		<ListItem
			key={casestudy?.slug}
			href="/codey/[slug]"
			as={`/code/${casestudy?.slug}`}
			title={casestudy.title}
			description={null}
			leadingAccessory={
				<Image width={48} height={48} alt={casestudy?.title} className="rounded-xl" src={casestudy?.caption} />
			}
			//byline={`${casestudy.detailsCount} details`}
			active={active}
		/>
	);
});
