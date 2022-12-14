import useSWR from 'swr'

import { ketchup } from '~/lib/functions'
import { TopTracks } from '~/types/site'

import Track from './Track'

export default function Tracks() {
  const { data } = useSWR<TopTracks>('/api/stats/top-tracks', ketchup)

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
