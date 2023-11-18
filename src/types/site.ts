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

export type PreviewImage = {
    originalWidth: number
    originalHeight: number
    dataURIBase64: string
}

export type PreviewImageMap = {
    [id: string]: PreviewImage | null
}
