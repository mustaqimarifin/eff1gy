import { NextResponse } from "next/server"

import { getNowPlaying } from "~/lib/queries"

// export const runtime = 'edge'
// export const dynamic = "force-dynamic";
export async function GET() {
	const response = await getNowPlaying()

	if (response.status === 204 || response.status > 400) {
		return new NextResponse(JSON.stringify({ isPlaying: false }), {
			status: 200,
			headers: {
				"content-type": "application/json",
			},
		})
	}

	const song = await response.json()
	// console.log(song)

	if (song.item === null) {
		return new NextResponse(JSON.stringify({ isPlaying: false }), {
			status: 200,
			headers: {
				"content-type": "application/json",
			},
		})
	}

	const isPlaying = song.is_playing
	const title = song.item.name
	const artist = song.item.artists
		.map((_artist: { name: string }) => _artist.name)
		.join(", ")
	const album = song.item.album.name
	const albumImageUrl = song.item.album.images[0].url
	const songUrl = song.item.external_urls.spotify

	return new Response(
		JSON.stringify({
			album,
			albumImageUrl,
			artist,
			isPlaying,
			songUrl,
			title,
		}),
		{
			status: 200,
			headers: {
				"content-type": "application/json",
				"cache-control": "public, s-maxage=240, stale-while-revalidate=120",
			},
		},
	)
}
