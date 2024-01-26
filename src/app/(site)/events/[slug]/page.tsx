import { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { EventDetail } from '~/components/Events/EventDetail'
import { EventList } from '~/components/Events/EventList'
import { DickArray, DickPics } from '~/components/Image/Pics'
import { ListDetailView } from '~/components/Layouts'
import Marquee from '~/components/MDX/Marquee'
import type { EventDetailsPost } from '~/data/events'
import allEvents from '~/data/events'
import { ViewType } from '~/graphql/typeSlut'
import { HiddenCounter } from '~/lib/actions'

import s2 from '../../../../../public/events/logos/hsn0.jpg'
import s3 from '../../../../../public/events/logos/letape0.jpg'
import s4 from '../../../../../public/events/logos/marvel0.jpg'
import s5 from '../../../../../public/events/logos/mu0.jpg'
import s6 from '../../../../../public/events/logos/spartan0.jpg'
import s1 from '../../../../../public/events/logos/sw0.jpg'
export async function generateStaticParams() {
  const events = allEvents?.map((post) => ({
    slug: post.slug,
  }))
  return events
}

export default async function Events({ params: { slug } }) {
  const post: EventDetailsPost =
    allEvents.find((post) => post.slug === slug) || null
  return (
    <EventDetail post={post}>
      <Marquee speed={75} pauseOnHover delay={2} gradient>
        <DickPics src={s1} />
        <DickPics src={s2} />
        <DickPics src={s3} />
        <DickPics src={s4} />
        <DickPics src={s5} />
        <DickPics src={s6} />
      </Marquee>
    </EventDetail>
  )
}
