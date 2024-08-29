import { unstable_noStore as noStore } from "next/cache"
const client_id = process.env.SPOTIFY_CLIENT_ID as string
const client_secret = process.env.SPOTIFY_CLIENT_SECRET as string
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN as string

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64")
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

async function getAccessToken() {
	const response = await fetch(TOKEN_ENDPOINT, {
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

	return response.json()
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
