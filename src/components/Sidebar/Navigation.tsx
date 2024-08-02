"use client"
import { CassetteTape, Plus, Thermometer } from "lucide-react"
import { usePathname } from "next/navigation"
import { AddBookmarkDialog } from "~/components/Bookmarks/AddBookmarkDialog"
import { GhostButton } from "~/components/Button"
import {
	AMAIcon,
	BookmarksIcon,
	CaseIcon,
	ExternalLinkIcon,
	GitHubIcon,
	HomeIcon,
	SoundcloudIcon,
	Spotify,
	StackIcon,
	TwitterIcon,
	WritingIcon,
} from "~/components/Icon"
import { type Item, NavigationLink } from "./NavigationLink"

import type { Session } from "next-auth"
import { useSession } from "next-auth/react"
import { memo, useEffect, useState } from "react"
import Marquee from "react-fast-marquee"

function ThisAddBookmarkDialog() {
	return (
		<AddBookmarkDialog
			trigger={
				<GhostButton aria-label="Add bookmark" size="small-square">
					<Plus size={16} />
				</GhostButton>
			}
		/>
	)
}

type TrackType = {
	title?: string
	artist?: string
	isPlaying?: boolean
}

function Player(track: TrackType) {
	return (
		<Marquee speed={25} pauseOnHover delay={2}>
			<div className="pr-2 uppercase underline decoration-pink-500">{` ${track.title} - ${track.artist} `}</div>
		</Marquee>
	)
}

type SNav = {
	session?: Session
}
export const SidebarNavigation = memo<SNav>(() => {
	const [track, setTrack] = useState(null)
	useEffect(() => {
		let ignore = false
		setTrack(null)
		fetch(`/api/spotify`).then(track => {
			if (!ignore) {
				setTrack(track)
			}
		})
		return () => {
			ignore = true
		}
	}, [track])
	//const { data: track } = useSWR<TrackType>(`/api/spotify`, fetcher)
	const path = usePathname()
	//const { data } = useQuery(ViewerDocument)
	const { data: session } = useSession()
	const sections: Section = [
		{
			//label: null,
			items: [
				{
					href: "/",
					label: "Home",
					icon: HomeIcon,
					//trailingAccessory: null,
					isActive: path === "/",
					//trailingAction: null,
					isExternal: false,
				},
				{
					href: "/post",
					label: "Posts",
					icon: WritingIcon,
					//trailingAccessory: null,
					isActive: path.includes("/post"),
					//trailingAction: null,
					isExternal: false,
				},
				{
					href: "/blog",
					label: "Blog",
					icon: Thermometer,
					//trailingAccessory: null,
					isActive: path.includes("/blog"),
					//trailingAction: null,
					isExternal: false,
				},
			],
		},
		{
			label: "Me",
			items: [
				{
					href: "/bookmarks",
					label: "Bookmarks",
					icon: BookmarksIcon,
					//trailingAccessory: null,
					isActive: path.includes("/bookmarks"),
					action: session?.isAdmin ? ThisAddBookmarkDialog : null,
					isExternal: false,
				},
				/* {
					href: "/dash",
					label: "Dashboard",
					icon: ListMusicIcon,
					trailingAccessory: null,
					isActive: path.indexOf("/dash") >= 0,
					trailingAction: null,
					isExternal: false,
				}, */

				{
					href: "/ama",
					label: "AMA",
					icon: AMAIcon,
					//trailingAccessory: null,
					isActive: path.includes("/ama") && !path.startsWith("/ama/pending"),
					action: null,
					isExternal: false,
				},

				{
					href: "/stack",
					label: "Stack",
					icon: StackIcon,
					//Accessory: null,
					isActive: path.includes("/stack"),
					action: null,
					isExternal: false,
				},
			],
		},
		{
			label: "Projects",
			items: [
				/*         {
          href: 'https://designdetails.fm',
          label: 'Design Details',
          icon: PodcastIcon,
          Accessory: ExternalLinkIcon,
          isActive: false,
          Action: null,
          isExternal: true,
        },

        {
          href: 'https://staff.design',
          label: 'Staff Design',
          icon: StaffDesignIcon,
          Accessory: ExternalLinkIcon,
          isActive: false,
          Action: null,
          isExternal: true,
        },

        {
          href: 'https://figma.com/@brian',
          label: 'Figma Plugins',
          icon: FigmaIcon,
          Accessory: ExternalLinkIcon,
          isActive: false,
          Action: null,
          isExternal: true,
        }, */

				/*         {
          href: '/security',
          label: 'Security Checklist',
          icon: SecurityChecklistIcon,
          Accessory: null,
          isActive: path.indexOf('/security') >= 0,
          Action: null,
          isExternal: false,
        },

        {
          href: '/hn',
          label: 'Hacker News',
          icon: HackerNewsIcon,
          Accessory: null,
          isActive: path.indexOf('/hn') >= 0,
          Action: null,
          isExternal: false,
        },

 */ /* {
					href: "/events",
					label: "Events",
					icon: CaseIcon,
					Accessory: null,
					isActive: path.indexOf("/events") >= 0,
					Action: null,
					isExternal: false,
				}, */
				{
					href: "/code",
					label: "Code",
					icon: CaseIcon,
					//Accessory: null,
					isActive: path.includes("/code"),
					//Action: null,
					isExternal: false,
				},
			],
		},
		{
			label: "Online",
			items: [
				{
					href: "/dash",
					label: track?.isPlaying ? Player(track) : "On Rotation",
					icon: CassetteTape,
					//trailingAccessory: null,
					isActive: false,
					//trailingAction: null,
					isExternal: false,
				},
				{
					href: "https://twitter.com/vmprmyth",
					label: "Twitter",
					icon: TwitterIcon,
					accessory: ExternalLinkIcon,
					isActive: false,
					//trailingAction: null,
					isExternal: true,
				},

				{
					href: "https://open.spotify.com/artist/6bBbUUix7BfttiaHCDkcEI",
					label: "Spotify",
					icon: Spotify,
					accessory: ExternalLinkIcon,
					isActive: false,
					//trailingAction: null,
					isExternal: true,
				},

				{
					href: "https://github.com/mustaqimarifin",
					label: "GitHub",
					icon: GitHubIcon,
					accessory: ExternalLinkIcon,
					isActive: false,
					//trailingAction: null,
					isExternal: true,
				},

				{
					href: "https://soundcloud.com/vmprmyth",
					label: "SoundCloud",
					icon: SoundcloudIcon,
					accessory: ExternalLinkIcon,
					isActive: false,
					//trailingAction: null,
					isExternal: true,
				},
			],
		},
	]
	type Section = {
		label?: string
		items: Item[]
	}[]

	return (
		<div className="flex-1 space-y-1 px-3 py-3">
			{sections.map((section, i) => {
				return (
					<ul key={i} className="space-y-1">
						{section.label && (
							<div
								key={i}
								className="px-2 pb-2 pt-5 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
							>
								{section.label}
							</div>
						)}
						{section.items.map((item, j) => (
							<NavigationLink key={j} item={item} />
						))}
					</ul>
				)
			})}
		</div>
	)
})
