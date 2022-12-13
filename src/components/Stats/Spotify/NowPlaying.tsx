import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import useSWR from 'swr'

import { Spotify } from '~/components/Icon'
import { ketchup } from '~/lib/functions'
import { SpotifyData } from '~/types/site'

export default function NowPlaying({ className, ...rest }) {
  const { data } = useSWR<SpotifyData>('/api/stats/now-playing', ketchup)

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
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        )}
      >
        <Image
          className="w-16 shadow-sm dark:shadow-none z-10"
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
        <div className="absolute right-1.5 bottom-1.5">
          <Spotify color="#1ED760" />
        </div>
      </Link>
    </figure>
  ) : (
    <>
      <div
        className={clsx(
          'relative flex items-center gap-4 p-3 m-8',
          'border dark:border-gray-600',
          'border-thin w-56 rounded-md',
          'shadow-sm dark:shadow-none',
          'focus:outline-none focus-visible:ring focus-visible:ring-primary-300'
        )}
      >
        <div className="absolute left-1.5 p-2  opacity-30">
          <Spotify color="#1ED760" />
        </div>
        <p className="flex-1 text-sm opacity-30  text-center font-medium">
          Not Playing...
        </p>
      </div>
    </>
  )
}
