import { DashPage, SectionContent } from "~/components/Dash/Index";
import { ListDetailView } from "~/components/Layouts";
import { getTopTracks } from "~/lib/actions";

import Track from "./Track";

//export const runtime = 'edge'
export default async function Dashboard() {
	const response = await getTopTracks();
	const { items } = await response.json();

	const tracks = items.slice(0, 10).map((track) => ({
		artist: track.artists.map((_artist) => _artist.name).join(", "),
		songUrl: track.external_urls.spotify,
		imageUrl: track.album.images[1].url,
		title: track.name,
	}));
	return (
		<DashPage>
			<SectionContent>
				<div className="w-full justify-center items-start max-w-3xl mx-auto mb-16 px-8">
					<h1 className="font-quad text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
						Spotify Picks
					</h1>
					<div className="mb-8" />
					<div className="flex flex-col w-full" />
					<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 my-2 w-full" />
					<h2 className="font-bold text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white" />
					<p className="text-gray-600 dark:text-gray-400 mb-4">
						Top tracks I grab courtesy of Spotify's WEB API -- updated daily!
					</p>
					{tracks.map((track, index) => (
						<Track ranking={index + 1} key={track.songUrl} {...track} />
					))}
				</div>
			</SectionContent>
		</DashPage>
	);
}
