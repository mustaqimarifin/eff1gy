import Link from 'next/link'
import * as React from 'react'
import { Suspense } from 'react'

import { DashPage, SectionContent } from '~/components/Dash/Index'
import { getTopTracks } from '~/lib/actions'

import { NowPlaying } from './playing'
import Track from './Track'

export default async function Dashboard() {
  const response = await getTopTracks()
  const { items } = await response.json()

  const tracks = items.slice(0, 10).map((track) => ({
    artist: track.artists.map((_artist) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    imageUrl: track.album.images[1].url,
    title: track.name,
  }))
  return (
    <DashPage>
      <SectionContent>
        <div className="w-full justify-center items-start max-w-3xl mx-auto mb-16 px-8">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
            Dashboard
          </h1>
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              This is my personal dashboard, built with Next.js API routes
              deployed as serverless functions. I use this dashboard to track
              various metrics across platforms like Unsplash, YouTube, GitHub,
              and more. Want to build your own? Check out my&nbsp;
              <Link
                href="/blog/fetching-data-with-swr"
                className="text-gray-900 dark:text-gray-100 underline">
                blog series.
              </Link>
            </p>
          </div>
          <div className="flex flex-col w-full"></div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full"></div>
          <h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Top Tracks
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Curious what I'm currently jamming to? Here's my top tracks on
            Spotify updated daily.
          </p>
          {tracks.map((track, index) => (
            <Track ranking={index + 1} key={track.songUrl} {...track} />
          ))}
        </div>
      </SectionContent>
      <Suspense>
        {' '}
        <NowPlaying />
      </Suspense>
    </DashPage>
  )
}
