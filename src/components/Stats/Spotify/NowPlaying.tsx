import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import useSWR from 'swr'

import { Spotify } from '~/components/Icon'
import { fetcher } from '~/lib/functions'

type SpotifyData = {
  isPlaying: boolean
  songUrl: string
  albumImageUrl: string
  album: string
  title: string
  artist: string
}

export default function NowPlaying({ className, ...rest }) {
  const { data } = useSWR<SpotifyData>('/api/stats/now-playing', fetcher)

  return data?.isPlaying ? (
    <figure className={className} data-cy="spotify">
      <Link
        {...rest}
        href={data.songUrl}
        className={clsx(
          'relative flex items-center gap-4 p-3',
          'border dark:border-gray-600',
          'border-thin w-56 rounded-md',
          'shadow-sm dark:shadow-none',
          'focus-visible:ring-primary-300 focus:outline-none focus-visible:ring'
        )}>
        <Image
          className="z-10 w-16 shadow-sm dark:shadow-none"
          src={data?.albumImageUrl}
          alt={data.album}
          width={640}
          height={640}
        />
        <div className="flex-1">
          <p className="text-sm font-medium">{data.title}</p>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
            {data.artist}
          </p>
        </div>
        <div className="absolute bottom-1.5 right-1.5">
          <Spotify color="#1ED760" />
        </div>
      </Link>
    </figure>
  ) : (
    <>
      <div
        className={clsx(
          'relative m-8 flex items-center gap-4 p-3',
          'border dark:border-gray-600',
          'border-thin w-56 rounded-md',
          'shadow-sm dark:shadow-none',
          'focus-visible:ring-primary-300 focus:outline-none focus-visible:ring'
        )}>
        <div className="absolute left-1.5 p-2  opacity-30">
          <Spotify color="#1ED760" />
        </div>
        <p className="flex-1 text-center text-sm  font-medium opacity-30">
          Not Playing...
        </p>
      </div>
    </>
  )
}
