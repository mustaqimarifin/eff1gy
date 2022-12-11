export type SpotifyData = {
  isPlaying: boolean
  title: string
  album: string
  artist: string
  albumImageUrl: string
  songUrl: string
}

export type TopTracks = {
  tracks: SpotifyData[]
}
