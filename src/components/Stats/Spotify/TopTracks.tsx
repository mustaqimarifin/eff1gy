import useSWR from 'swr'

import { fetcher } from '~/lib/functions'

import type { TrackType } from './Track'
import Track from './Track'

type TopTracks = {
  tracks: TrackType[]
}

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/stats/top-tracks', fetcher)

  if (!data) {
    return null
  }

  return (
    <>
      {data.tracks.map((track, index) => (
        <Track ranking={index + 1} key={track.songUrl} {...track} />
      ))}
    </>
  )
}
