'use server'
import { unstable_noStore as noStore } from 'next/cache'
import { Suspense, cache } from 'react'

import { CLIENT_URL } from '~/graphql/constants'
import { ViewType } from '~/graphql/typeSlut'

import { db } from '../db'
/* 
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
 */

export async function addView(refId, type) {
  if (!refId || !type) {
    return []
  }
  noStore()
  switch (type) {
    case ViewType.Event: {
      const results = await db.event.upsert({
        where: { id: refId },
        create: {
          id: refId,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      })

      return results || []
    }
    case ViewType.Case: {
      const results = await db.case.upsert({
        where: { id: refId },
        create: {
          id: refId,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      })

      return results || []
    }
    case ViewType.Bookmark: {
      const results = await db.bookmark.upsert({
        where: { id: refId },
        create: {
          id: refId,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      })

      return results || []
    }
    case ViewType.Blog: {
      const results = await db.blog.upsert({
        where: { slug: refId },
        create: {
          slug: refId,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      })

      return results || []
    }
    case ViewType.Question: {
      const results = await db.question.upsert({
        where: { id: refId },
        create: {
          id: refId,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      })

      return results || []
    }
    case ViewType.Stack: {
      const results = await db.stack.upsert({
        where: { id: refId },
        create: {
          id: refId,
        },
        update: {
          count: {
            increment: 1,
          },
        },
      })

      return results || []
    }
    default: {
      return []
    }
  }
}
/* export const addView = async (id) => {
  noStore()
  const total = await db.pageView.upsert({
    where: { id },
    create: {
      id,
    },
    update: {
      counter: {
        increment: 1,
      },
    },
  })
  if (total?.counter < 1) return null
  else
    return await db.pageView.findUnique({
      where: {
        id,
      },
      select: {
        counter: true,
      },
    })
}
 */
export async function Counter({
  refId,
  type,
}: {
  refId: string
  type: ViewType
}) {
  const views = await addView(refId, type)
  const counter = `${views}`
  return (
    <Suspense>
      <div>{`${counter} - views`}</div>
    </Suspense>
  )
}

export const HiddenCounter = cache(
  async ({ refId, type }: { refId: string; type: ViewType }) => {
    const views = await addView(refId, type)
    return (
      <Suspense>
        <div className="hidden">{`${views} - views`}</div>
      </Suspense>
    )
  }
)

/* export const getView = async (id) => {
  noStore()
  const total = await db.pageView.findMany({
    where: {
      id,
    },
    select: {
      counter: true,
    },
  })
  return total
} */
/* export const getAkhylaYouTubeSubs = cache(
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
 */
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
    body: new URLSearchParams({
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

/* 

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
