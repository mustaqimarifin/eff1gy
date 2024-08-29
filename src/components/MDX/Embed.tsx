"use client"

import LiteYouTubeEmbed from "./Lite.mjs"

const youtubeDomains = new Set([
	"youtu.be",
	"youtube.com",
	"www.youtube.com",
	"youtube-nocookie.com",
	"www.youtube-nocookie.com",
])
function getYoutubeId(url: string): string | null {
	try {
		const { hostname } = new URL(url)
		if (!youtubeDomains.has(hostname)) {
			return null
		}
		const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/i

		const match = url.match(regExp)
		if (match && match[2].length === 11) {
			return match[2]
		}
	} catch {
		// ignore invalid urls
	}
	return null
}

export function Embed({ video }) {
	return (
		<div className="aspect-[32/9] object-cover w-full">
			<LiteYouTubeEmbed
				width={1307}
				height={560}
				style={{
					width: "100%",
					height: "auto",
				}}
				id={getYoutubeId(video.url)}
				thumbnail={video.thumbnail} // Default none, id of the video or playlist
				adNetwork={false} // Default true, to preconnect or not to doubleclick addresses called by YouTube iframe (the adnetwork from Google)
				params="" // any params you want to pass to the URL, assume we already had '&' and pass your parameters string
				playlist={false} // Use  true when your ID be from a playlist
				playlistCoverId="L2vS_050c-M" // The ids for playlists did not bring the cover in a pattern to render so you'll need pick up a video from the playlist (or in fact, whatever id) and use to render the cover. There's a programmatic way to get the cover from YouTube API v3 but the aim of this component is do not make any another call and reduce requests and bandwidth usage as much as possibe
				poster="hqdefault" // Defines the image size to call on first render as poster image. Possible values are "default","mqdefault",  "hqdefault", "sddefault" and "maxresdefault". Default value for this prop is "hqdefault". Please be aware that "sddefault" and "maxresdefault", high resolution images are not always avaialble for every video. See: https://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api
				title="YouTube Embed" // a11y, always provide a title for iFrames: https://dequeuniversity.com/tips/provide-iframe-titles Help the web be accessible ;)
				noCookie={true} // Default false, connect to YouTube via the Privacy-Enhanced Mode using https://www.youtube-nocookie.com
			/>
		</div>
	)
}
