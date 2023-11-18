import { Metadata } from 'next'
import { env } from 'process'

import { QuestionDetail } from '~/components/AMA/QuestionDetail'
import { QuestionsList } from '~/components/AMA/QuestionsList'
import { ListDetailView } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { getClient } from '~/components/Provider/ApolloClient'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_QUESTION, GET_QUESTIONS } from '~/graphql/queries/questions'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import {
  CommentType,
  GetQuestionQuery,
  QuestionStatus,
} from '~/graphql/typeSlut'
import { absoluteUrl } from '~/lib/validators'

interface QProps {
  params: {
    id: string[]
  }
}

//export const dynamic = 'force-static'

export async function generateMetadata({ params }: QProps): Promise<Metadata> {
  const client = getClient()

  const f = await client.query<GetQuestionQuery>({
    query: GET_QUESTION,
  })
  if (!f) {
    return {}
  }

  const { title, description, id } = f.data.question

  const url = env.NEXT_PUBLIC_APP_URL

  const ogUrl = new URL(`${url}/api/og`)
  ogUrl.searchParams.set('heading', title)
  ogUrl.searchParams.set('type', 'Question')
  ogUrl.searchParams.set('mode', 'dark')

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      url: absoluteUrl(id),
      images: [
        {
          url: ogUrl.toString(),
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [ogUrl.toString()],
    },
  }
}

export default async function QuestionPage({ params: { id } }) {
  const client = getClient()

  const { data, loading, error } = await client.query<GetQuestionQuery>({
    query: GET_QUESTION,
    variables: { id },
  })

  await Promise.all([
    client.query({
      query: GET_QUESTIONS,
      variables: {
        filter: { status: QuestionStatus.Answered },
      },
    }),

    client.query({
      query: GET_COMMENTS,
      variables: { refId: id, type: CommentType.Question },
    }),

    client.query({ query: GET_VIEWER }),
  ])
  if (loading) {
    return <Detail.Loading />
  }

  if (!data?.question || error) {
    return <Detail.Null />
  }

  const { question } = data
  return (
    <ListDetailView
      list={<QuestionsList />}
      hasDetail
      detail={<QuestionDetail id={id} />}
    />
  )
}
