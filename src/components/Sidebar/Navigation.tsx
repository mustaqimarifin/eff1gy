"use client"
import { CassetteTape, Plus, Thermometer } from "lucide-react"
//import lazy from "next/dynamic"
import { usePathname } from "next/navigation"
import useSWR from "swr"
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
import { NavigationLink } from "./NavigationLink"

import { fetcher } from "~/lib/functions"

import { useQuery } from "@apollo/client"
import Marquee from "react-fast-marquee"
import { ViewerDocument } from "~/gql/typeSlut"

/* const Marquee = lazy(() => import("../MDX/Marquee"), {
	ssr: false,
}) */
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

export const SidebarNavigation = () => {
	const { data: track } = useSWR<TrackType>(`/api/spotify`, fetcher)
	const path = usePathname()
	const { data } = useQuery(ViewerDocument)
	const sections = [
		{
			label: null,
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
					trailingAction: data?.viewer?.isAdmin ? ThisAddBookmarkDialog : null,
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
					trailingAction: null,
					isExternal: false,
				},

				{
					href: "/stack",
					label: "Stack",
					icon: StackIcon,
					//trailingAccessory: null,
					isActive: path.includes("/stack"),
					trailingAction: null,
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
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://staff.design',
          label: 'Staff Design',
          icon: StaffDesignIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://figma.com/@brian',
          label: 'Figma Plugins',
          icon: FigmaIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        }, */

				/*         {
          href: '/security',
          label: 'Security Checklist',
          icon: SecurityChecklistIcon,
          trailingAccessory: null,
          isActive: path.indexOf('/security') >= 0,
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/hn',
          label: 'Hacker News',
          icon: HackerNewsIcon,
          trailingAccessory: null,
          isActive: path.indexOf('/hn') >= 0,
          trailingAction: null,
          isExternal: false,
        },

 */ /* {
					href: "/events",
					label: "Events",
					icon: CaseIcon,
					trailingAccessory: null,
					isActive: path.indexOf("/events") >= 0,
					trailingAction: null,
					isExternal: false,
				}, */
				{
					href: "/code",
					label: "Code",
					icon: CaseIcon,
					trailingAccessory: null,
					isActive: path.includes("/code"),
					trailingAction: null,
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
					trailingAccessory: null,
					isActive: false,
					trailingAction: null,
					isExternal: false,
				},
				{
					href: "https://twitter.com/vmprmyth",
					label: "Twitter",
					icon: TwitterIcon,
					trailingAccessory: ExternalLinkIcon,
					isActive: false,
					//trailingAction: null,
					isExternal: true,
				},

				{
					href: "https://open.spotify.com/artist/6bBbUUix7BfttiaHCDkcEI",
					label: "Spotify",
					icon: Spotify,
					trailingAccessory: ExternalLinkIcon,
					isActive: false,
					//trailingAction: null,
					isExternal: true,
				},

				{
					href: "https://github.com/mustaqimarifin",
					label: "GitHub",
					icon: GitHubIcon,
					trailingAccessory: ExternalLinkIcon,
					isActive: false,
					//trailingAction: null,
					isExternal: true,
				},

				{
					href: "https://soundcloud.com/vmprmyth",
					label: "SoundCloud",
					icon: SoundcloudIcon,
					trailingAccessory: ExternalLinkIcon,
					isActive: false,
					trailingAction: null,
					isExternal: true,
				},
			],
		},
	]

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
							<NavigationLink key={j} link={item} />
						))}
					</ul>
				)
			})}
		</div>
	)
}
