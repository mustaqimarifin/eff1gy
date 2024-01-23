import Mdx from '~/app/mdxrsc'
import { EventDetail } from '~/components/Events/EventDetail'
import { EventList } from '~/components/Events/EventList'
import { Image } from '~/components/Image/NextImage'
import { ListDetailView } from '~/components/Layouts'
import type { EventDetailsPost } from '~/data/events'
import allEvents from '~/data/events'
import { ViewType } from '~/graphql/typeSlut'
import { HiddenCounter } from '~/lib/actions'

export const dynamic = 'force-static'
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
        <>
          <EventDetail post={post}>
            <HiddenCounter refId={post?.slug} type={ViewType.Event} />
            <div className="space-y-12">
              <div className="prose pt-12">
                <Mdx source={post?.description} />Y
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
                    <div className="p-6 container mx-auto">
                      <div className="py-2">
                        <h1 className="text-center text-4xl">My App</h1>
                      </div>
                      <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
                        {detail.gallery.map((src) => (
                          <div
                            key={src}
                            className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer">
                            <div className="relative mb-4 rounded-2xl">
                              <Image
                                width={400}
                                height={400}
                                className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                                src={src}
                                alt=""
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </EventDetail>
        </>
      }
    />
  )
}
