'use server'
import { auth, youtube } from '@googleapis/youtube'
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from 'next/cache'
import querystring from 'querystring'

import { prisma } from '../prisma'

const googleAuth = new auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/youtube.readonly'],
})

const yt = youtube({
  version: 'v3',
  auth: googleAuth,
})

export const addView = async (id) => {
  noStore()
  const total = await prisma.pageView.upsert({
    where: { id },
    create: {
      id,
    },
    update: {
      viewCount: {
        increment: 1,
      },
    },
  })
  if (total?.viewCount < 1) return null
  else
    return await prisma.pageView.findUnique({
      where: {
        id,
      },
      select: {
        viewCount: true,
      },
    })
}
export const getAkhylaYouTubeSubs = cache(
  async () => {
    const response = await yt.channels.list({
      id: ['UCorhlPuflkGbA2sRylUldbQ'],
      part: ['statistics'],
    })

    const channel = response.data.items![0]
    return Number(channel?.statistics?.subscriberCount).toLocaleString()
  },
  ['youtube-subs'],
  {
    revalidate: 3600,
  }
)

const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const getNowPlaying = async () => {
  //noStore()
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    next: { revalidate: 3600 },
  })
}
