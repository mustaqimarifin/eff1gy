import Mdx from '~/app/mdxrsc'
import { EventDetail } from '~/components/Events/EventDetail'
import { EventList } from '~/components/Events/EventList'
import { ListDetailView } from '~/components/Layouts'
import type { EventDetailsPost } from '~/data/events'
import allEvents from '~/data/events'
import { HiddenCounter } from '~/lib/actions'

//export const revalidate = 3600
interface Props {
  post: EventDetailsPost
}

export async function generateStaticParams() {
  const events = allEvents?.map((post) => ({
    slug: post.slug,
  }))
  return events
}

export default async function Events({ params: { slug } }) {
  const post = allEvents.find((post) => post.slug === slug) || null
  return (
    <ListDetailView
      list={<EventList />}
      hasDetail
      detail={
        <EventDetail post={post}>
          <HiddenCounter id={post.slug} />
        </EventDetail>
      }
    />
  )
}
