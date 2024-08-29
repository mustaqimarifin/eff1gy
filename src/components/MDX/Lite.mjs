/**
 * react-lite-youtube-embed v2.3.5
 *  https://github.com/ibrahimcesar/react-lite-youtube-embed.git
 *
 *  Copyright (c) Ibrahim Cesar < email@ibrahimcesar.com > and project contributors.
 *
 *  This source code is licensed under the MIT license found in the
 *  LICENSE file in the root directory of this source tree.
 *
 *  Author site: https://ibrahimcesar.cloud
 */
import * as React from "react"

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

let __assign = function () {
	__assign =
		Object.assign ||
		function __assign(t) {
			for (let s, i = 1, n = arguments.length; i < n; i++) {
				s = arguments[i]
				for (const p in s) {
					if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
				}
			}
			return t
		}
	return __assign.apply(this, arguments)
}

function LiteYouTubeEmbed(props) {
	const _a = React.useState(false)
	const preconnected = _a[0]
	const setPreconnected = _a[1]
	const _b = React.useState(false)
	const iframe = _b[0]
	const setIframe = _b[1]
	const videoId = encodeURIComponent(props.id)
	const videoPlaylisCovertId =
		typeof props.playlistCoverId === "string"
			? encodeURIComponent(props.playlistCoverId)
			: null
	const videoTitle = props.title
	const posterImp = props.poster || "hqdefault"
	const paramsImp = `&${props.params}` || ""
	const mutedImp = props.muted ? "&mute=1" : ""
	const announceWatch = props.announce || "Watch"
	const format = props.webp ? "webp" : "jpg"
	const vi = props.webp ? "vi_webp" : "vi"
	const posterUrl =
		props.thumbnail ||
		(!props.playlist
			? `https://i.ytimg.com/${vi}/${videoId}/${posterImp}.${format}`
			: `https://i.ytimg.com/${vi}/${videoPlaylisCovertId}/${posterImp}.${format}`)
	let ytUrl = props.noCookie
		? "https://www.youtube-nocookie.com"
		: "https://www.youtube.com"
	ytUrl = props.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com"
	const iframeSrc = !props.playlist
		? `${ytUrl}/embed/${videoId}?autoplay=1&state=1${mutedImp}${paramsImp}`
		: `${ytUrl}/embed/videoseries?autoplay=1${mutedImp}&list=${videoId}${paramsImp}`
	const activatedClassImp = props.activatedClass || "lyt-activated"
	const adNetworkImp = props.adNetwork || false
	const aspectHeight = props.aspectHeight || 9
	const aspectWidth = props.aspectWidth || 16
	const iframeClassImp = props.iframeClass || ""
	const playerClassImp = props.playerClass || "lty-playbtn"
	const wrapperClassImp = props.wrapperClass || "yt-lite"
	const onIframeAdded = props.onIframeAdded || (() => {})
	const rel = props.rel ? "prefetch" : "preload"
	const ContainerElement = props.containerElement || "article"
	const warmConnections = () => {
		if (preconnected) return
		setPreconnected(true)
	}
	const addIframe = () => {
		if (iframe) return
		setIframe(true)
	}
	React.useEffect(() => {
		if (iframe) {
			onIframeAdded()
		}
	}, [iframe])
	return React.createElement(
		React.Fragment,
		null,
		React.createElement("link", { rel, href: posterUrl, as: "image" }),
		React.createElement(
			React.Fragment,
			null,
			preconnected &&
				React.createElement(
					React.Fragment,
					null,
					React.createElement("link", { rel: "preconnect", href: ytUrl }),
					React.createElement("link", {
						rel: "preconnect",
						href: "https://www.google.com",
					}),
					adNetworkImp &&
						React.createElement(
							React.Fragment,
							null,
							React.createElement("link", {
								rel: "preconnect",
								href: "https://static.doubleclick.net",
							}),
							React.createElement("link", {
								rel: "preconnect",
								href: "https://googleads.g.doubleclick.net",
							}),
						),
				),
		),
		React.createElement(
			ContainerElement,
			{
				onPointerOver: warmConnections,
				onClick: addIframe,
				className: `${wrapperClassImp} ${iframe ? activatedClassImp : ""}`,
				"data-title": videoTitle,
				style: __assign(
					{ backgroundImage: `url(${posterUrl})` },
					{
						"--aspect-ratio": `${(aspectHeight / aspectWidth) * 100}%`,
					},
				),
			},
			React.createElement("button", {
				type: "button",
				className: playerClassImp,
				"aria-label": `${announceWatch} ${videoTitle}`,
			}),
			iframe &&
				React.createElement("iframe", {
					className: iframeClassImp,
					title: videoTitle,
					width: "560",
					height: "315",
					frameBorder: "0",
					allow:
						"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
					allowFullScreen: true,
					src: iframeSrc,
				}),
		),
	)
}

export { LiteYouTubeEmbed as default }
// # sourceMappingURL=index.es.jsx.map
