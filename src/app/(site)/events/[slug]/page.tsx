import { Suspense } from 'react'

import Mdx from '~/app/mdxrsc'
import { EventDetail } from '~/components/Events/EventDetail'
import { EventList } from '~/components/Events/EventList'
import { Image } from '~/components/Image/NextImage'
import { ListDetailView } from '~/components/Layouts'
import type { EventDetailsPost } from '~/data/events'
import allEvents from '~/data/events'
import { ViewType } from '~/graphql/typeSlut'
import { HiddenCounter } from '~/lib/actions'

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
    <ListDetailView
      list={<EventList />}
      hasDetail
      detail={
        <EventDetail post={post}>
          <HiddenCounter refId={post?.slug} type={ViewType.Event} />
          <div className="space-y-12">
            <div className="prose pt-12">
              <Mdx source={post?.description} />
            </div>

            {post?.details.map((detail, i) => (
              <div className="flex flex-col" key={`${detail?.title}-${i}`}>
                <h2 className="mb-4 text-lg font-bold text-primary">
                  {detail.title}
                </h2>
                <div className="prose">
                  <Mdx source={detail.description} />
                </div>

                {detail.media && (
                  <div className="flex items-center justify-center p-2 mt-8 mb-4 -mx-4 bg-gray-100 rounded-none dark:bg-gray-900 md:-mx-8 md:p-4 xl:rounded-md">
                    {detail.media.map((src) => (
                      <video
                        playsInline
                        muted
                        loop
                        autoPlay
                        preload="metadata"
                        key={src}
                        style={{
                          minHeight: `${
                            detail.orientation === 'landscape'
                              ? '320px'
                              : '680px'
                          }`,
                          maxWidth: `${
                            detail.orientation === 'landscape'
                              ? '100%'
                              : '400px'
                          }`,
                        }}
                        className="w-full h-full overflow-hidden rounded-md">
                        <source src={`${src}#t=0.1`} />
                      </video>
                    ))}
                  </div>
                )}
                {detail.gallery && (
                  <div className="flex items-center justify-center p-2 mt-8 mb-4 -mx-4 bg-gray-100 rounded-none dark:bg-gray-900 md:-mx-8 md:p-4 xl:rounded-md ">
                    {detail.gallery.map((src) => (
                      <div className="aspect-square relative" key={src}>
                        <Image
                          width={500}
                          height={500}
                          src={src}
                          alt="drawing"></Image>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </EventDetail>
      }
    />
  )
}
