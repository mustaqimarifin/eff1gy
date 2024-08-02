import { unstable_noStore as noStore } from "next/cache"
const client_id = process.env.SPOTIFY_CLIENT_ID as string
const client_secret = process.env.SPOTIFY_CLIENT_SECRET as string
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const searchParams = new URLSearchParams({
	grant_type: "refresh_token",
	refresh_token,
})
async function getAccessToken() {
	const data = await fetch(TOKEN_ENDPOINT, {
		method: "POST",
		headers: {
			Authorization: `Basic ${basic}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: new URLSearchParams({
			grant_type: "refresh_token",
			refresh_token,
		}),
	})

	return data.json()
}

export async function getNowPlaying() {
	noStore()
	const { access_token } = await getAccessToken()

	return fetch(NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
}

export async function getTopTracks() {
	const { access_token } = await getAccessToken()
	return fetch(TOP_TRACKS_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${access_token}`,
		},
	})
}

/*
{
    "album": "KILLER BEES",
    "albumImageUrl": "https://i.scdn.co/image/ab67616d0000b273e01033d225eb83ed8fd59d58",
    "artist": "COPYCATT",
    "isPlaying": true,
    "songUrl": "https://open.spotify.com/track/3vKbuwkHwx7rSGqO8ZTR61",
    "title": "KILLER BEES"
}
{
  "id": "ikkFeLTCltA",
  "publishedAt": "2014-01-12T21:38:22Z",
  "channelId": "UCd-pjthLQYLYVdN7GNwJgyA",
  "title": "Amir Meludah - Igauan Si Laknat",
  "description": "Igauan Si Laknat by Amir Meludah © 2014 MythLab Produced by VMPRMYTH & JSTN PWRS ...",
  "thumbnail": "https://i.ytimg.com/vi/ikkFeLTCltA/hqdefault.jpg"
}
https://www.youtube.com/watch?v=FeLb0IPHGZQ
https://api.socialcounts.org/youtube-live-subscriber-count/UCd-pjthLQYLYVdN7GNwJgyA

{
  "est_sub": 571,
  "API_sub": 571,
  "table": [
    {
      "name": "Channel Views",
      "count": 121388
    },
    {
      "name": "Videos",
      "count": 65
    }
  ]
} */

export interface NowPlaying {
	device: Device
	repeat_state: string
	shuffle_state: boolean
	context: Context
	timestamp: number
	progress_ms: number
	is_playing: boolean
	item: Item
	currently_playing_type: string
	actions: Actions
}

export interface Actions {
	interrupting_playback: boolean
	pausing: boolean
	resuming: boolean
	seeking: boolean
	skipping_next: boolean
	skipping_prev: boolean
	toggling_repeat_context: boolean
	toggling_shuffle: boolean
	toggling_repeat_track: boolean
	transferring_playback: boolean
}

export interface Context {
	type: string
	href: string
	external_urls: ExternalUrls
	uri: string
}

export interface ExternalUrls {
	spotify: string
}

export interface Device {
	id: string
	is_active: boolean
	is_private_session: boolean
	is_restricted: boolean
	name: string
	type: string
	volume_percent: number
	supports_volume: boolean
}

export interface Item {
	album: Album
	artists: Artist[]
	available_markets: string[]
	disc_number: number
	duration_ms: number
	explicit: boolean
	external_ids: ExternalIDS
	external_urls: ExternalUrls
	href: string
	id: string
	is_playable: boolean
	linked_from: any
	restrictions: Restrictions
	name: string
	popularity: number
	preview_url: string
	track_number: number
	type: string
	uri: string
	is_local: boolean
}

export interface Album {
	album_type: string
	total_tracks: number
	available_markets: string[]
	external_urls: ExternalUrls
	href: string
	id: string
	images: Image[]
	name: string
	release_date: string
	release_date_precision: string
	restrictions: Restrictions
	type: string
	uri: string
	artists: Artist[]
}

export interface Artist {
	external_urls: ExternalUrls
	href: string
	id: string
	name: string
	type: string
	uri: string
}

export interface Image {
	url: string
	height: number
	width: number
}

export interface Restrictions {
	reason: string
}

export interface ExternalIDS {
	isrc: string
	ean: string
	upc: string
}
