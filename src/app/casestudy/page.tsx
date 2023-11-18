import * as React from 'react'

import { AppDissectionList } from '~/components/AppDissection/AppDissectionList'
import { ListDetailView } from '~/components/Layouts'
import { CaseStudy } from '~/components/Posts/BlogDetail'
import { designIndexQuery } from '~/lib/sanity/queries'
import { getClient } from '~/lib/sanity/server'

export default async function CaseIndex() {
    const cases: CaseStudy[] = await getClient().fetch(designIndexQuery)

    if (!cases) {
        return { notFound: true }
    }

    return (
        <ListDetailView
            list={<AppDissectionList cases={cases} />}
            hasDetail={false}
            detail={null}
        />
    )
}
