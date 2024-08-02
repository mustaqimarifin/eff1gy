import { DashPage, SectionContent } from "~/components/Dash/Index"
import { getTopTracks } from "~/lib/queries"
import type { TopTracks } from "~/lib/queries/top-tracks"
import Track from "./Track"

//export const revalidate = 86400

//const getCachedTracks = unstable_cache(async () => await getTopTracks(), ["top-tracks"])

export default async function DashboardIndex() {
	const response = await getTopTracks()
	const { items }: TopTracks = await response.json()

	const tracks = items?.slice(0, 10).map(track => ({
		artist: track.artists.map(_artist => _artist.name).join(", "),
		songUrl: track.external_urls.spotify,
		imageUrl: track.album.images[1].url,
		title: track.name,
	}))
	return (
		<DashPage>
			<SectionContent>
				<div className="mx-auto mb-16 w-full max-w-3xl items-start justify-center px-8">
					<h1 className="mb-4 font-quad text-3xl tracking-tight text-black md:text-5xl dark:text-white">
						Spotify Picks
					</h1>
					<div className="mb-8" />
					<div className="flex w-full flex-col" />
					<div className="my-2 grid w-full grid-cols-1 gap-4 sm:grid-cols-2" />
					<p className="mb-4 text-gray-600 dark:text-gray-400">
						Top tracks I grab courtesy of Spotify's WEB API -- updated daily!
					</p>
					{tracks?.map((track, index) => (
						<Track ranking={index + 1} key={track.songUrl} {...track} />
					))}
				</div>
			</SectionContent>
		</DashPage>
	)
}
