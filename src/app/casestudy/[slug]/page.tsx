import * as React from 'react'

import { AppDissectionDetail } from '~/components/AppDissection/AppDissectionDetail'
import { AppDissectionList } from '~/components/AppDissection/AppDissectionList'
import { ListDetailView } from '~/components/Layouts'
import { Mdx } from '~/components/MDX'
import { mdxToCode } from '~/components/MDX/Mdx'
import { CaseStudy } from '~/components/Posts/BlogDetail'
import { designIndexQuery } from '~/lib/sanity/queries'
import { getCaseBySlug } from '~/lib/sanity/sanity.client'
import { getClient } from '~/lib/sanity/server'

export const dynamic = 'force-static'

export async function generateStaticParams() {
    const cases: CaseStudy[] = await getClient().fetch(designIndexQuery)

    return cases.map((post) => ({
        slug: post.slug,
    }))
}

export default async function CaseStudy({ params: { slug } }) {
    const cases: CaseStudy[] = await getClient().fetch(designIndexQuery)

    const casestudy: CaseStudy = await getCaseBySlug(slug)

    if (!casestudy) {
        return { notFound: true }
    }
    const { mdx } = await mdxToCode(casestudy.content)

    return (
        <ListDetailView
            list={<AppDissectionList cases={cases} />}
            hasDetail
            detail={
                <AppDissectionDetail casestudy={casestudy}>
                    <React.Suspense>
                        <Mdx code={mdx} />{' '}
                    </React.Suspense>
                </AppDissectionDetail>
            }
        />
    )
}
