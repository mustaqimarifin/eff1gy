"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
//import useSWR from "swr";

import { ListContainer } from "~/components/ListDetail/ListContainer";
import { TitleBar } from "~/components/ListDetail/TitleBar";

import type { CaseStudy } from "../Blogs/BlogDetail";

import { CaseListItem } from "./CaseItem";

export const CaseList = ({ cases }: { cases: CaseStudy[] }) => {
	const path = usePathname();
	const [scrollContainerRef, setScrollContainerRef] = useState(null);
	/* 	const { data, isLoading } = useSWR<CaseStudy[]>(`${CLIENT_URL}/api/case`, fetcher); */

	/* 	if (!cases && isLoading) {
		return (
			<ListContainer onRef={ setScrollContainerRef }>
				<TitleBar scrollContainerRef={ scrollContainerRef } title="Case Study" />
				<div className="flex flex-1 items-center justify-center">
					<LoadingSpinner />
				</div>
			</ListContainer>
		);
	}

 */ return (
		<ListContainer data-cy="case-list" onRef={setScrollContainerRef}>
			<TitleBar scrollContainerRef={scrollContainerRef} title="Code" />

			<div className="lg:space-y-1 lg:p-3">
				{cases?.map((casestudy) => {
					const active = path === casestudy.slug;
					return <CaseListItem key={casestudy?.slug} casestudy={casestudy} active={active} />;
				})}
			</div>
		</ListContainer>
	);
};
