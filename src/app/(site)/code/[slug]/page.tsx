import { notFound } from "next/navigation";
import { Suspense } from "react";

import Mdx from "~/app/mdxrsc";
import { BitDetail } from "~/components/Case/BitDetail";
import { BitList } from "~/components/Case/BitList";
import { ListDetailView } from "~/components/Layouts";
import { ViewType } from "~/graphql/typeSlut";
import { HiddenCounter } from "~/lib/actions";
import { allBits, allLilSlugs, getLilBit, type LilBits } from "~/lib/sanity/client";

export async function generateStaticParams () {
	return allLilSlugs.map((p) => ({
		slug: p.slug,
	}));
}

export default async function LilPage ({ params: { slug } }) {
	const p: LilBits = await getLilBit(slug);
	if (!p) {
		notFound();
	}

	return (
		<ListDetailView
			list={ <BitList bits={ allBits } /> }
			hasDetail
			detail={

				<Suspense>
					<HiddenCounter refId={ p?.slug } type={ ViewType.Case } />
					<BitDetail bit={ p } slug={ slug }>
						<Mdx source={ p?.content } />
					</BitDetail>
				</Suspense>

			}
		/>
		/* 		<Suspense>
					<HiddenCounter refId={p?.slug} type={ViewType.Case} />
					<BitDetail bit={p} slug={slug}>
						<Mdx source={p?.content} />
					</BitDetail>
				</Suspense> */
	);
}
