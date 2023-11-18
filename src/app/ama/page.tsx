import * as React from 'react'

import { QuestionsList } from '~/components/AMA/QuestionsList'
import { ListDetailView } from '~/components/Layouts'
import { getClient } from '~/components/Provider/ApolloClient'
import { GET_QUESTIONS } from '~/graphql/queries/questions'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import { QuestionStatus } from '~/graphql/typeSlut'

//export const dynamic = 'force-dynamic'

export const metadata = {
    title: 'AMA',
}

export default async function QuestionIndex() {
    const client = getClient()
    await Promise.all([
        client.query({ query: GET_VIEWER }),

        client.query({
            query: GET_QUESTIONS,
            variables: {
                filter: { status: QuestionStatus.Answered },
            },
        }),
    ])

    return (
        <ListDetailView
            list={<QuestionsList />}
            hasDetail={false}
            detail={null}
        />
    )
}
