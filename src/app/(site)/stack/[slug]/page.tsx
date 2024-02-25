import { ListDetailView } from '~/components/Layouts'
import { Detail } from '~/components/ListDetail/Detail'
import { StackDetail } from '~/components/Stack/StackDetail'
import { StackList } from '~/components/Stack/StackList'
import { GET_COMMENTS } from '~/graphql/queries/comments'
import { GET_STACK, GET_STACKS } from '~/graphql/queries/stack'
import { GET_VIEWER } from '~/graphql/queries/viewer'
import type { GetStackQuery } from '~/graphql/typeSlut'
import { CommentType, ViewType } from '~/graphql/typeSlut'
import { HiddenCounter } from '~/lib/actions'

//export const dynamic = 'force-static'

export default function StackPage({ params: { slug } }) {
  return <ListDetailView list={<StackList />} hasDetail detail={<StackDetail slug={slug} />} />
}
