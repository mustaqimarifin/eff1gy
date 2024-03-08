import { notFound } from "next/navigation";
import { Suspense } from "react";

import Mdx from "~/app/mdxrsc";
import { BitDetail } from "~/components/Case/BitDetail";
import { BitList } from "~/components/Case/BitList";
import { ListDetailView } from "~/components/Layouts";
import { ViewType } from "~/graphql/typeSlut";
import { HiddenCounter } from "~/lib/actions";
import { allBits, allLilSlugs, getAllCases, getCase, getLilBit, type LilBits } from "~/lib/sanity/client";

export const revalidate = 3600;
export async function generateStaticParams() {
	return allLilSlugs.map((p) => ({
		slug: p.slug,
	}));
}

export default async function LilPage({
	params,
}: {
	params: { slug: string };
}) {
	const p: LilBits = await getLilBit(params.slug);
	if (!p) {
		notFound();
	}

	return (
		<ListDetailView
			list={<BitList bits={allBits} />}
			hasDetail
			detail={
				<BitDetail bit={p}>
					<HiddenCounter refId={p?.slug} type={ViewType.Case} />
					<Suspense>
						<Mdx source={p?.content} />
					</Suspense>
				</BitDetail>
			}
		/>
	);
}
