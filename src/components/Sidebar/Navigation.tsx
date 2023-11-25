'use client'
import { CassetteTape, ListMusicIcon, Plus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import useSWR from 'swr'

import type { TrackType } from '~/app/(misc)/dash/Track'
import { AddBookmarkDialog } from '~/components/Bookmarks/AddBookmarkDialog'
import { GhostButton } from '~/components/Button'
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
} from '~/components/Icon'
import { useViewerQuery } from '~/graphql/typeSlut'
import { fetcher } from '~/lib/functions'

import Marquee from '../Marquee'
import { NavigationLink } from './NavigationLink'

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

function Player(track: TrackType) {
  return (
    <Marquee speed={25} pauseOnHover delay={2} gradient>
      <div className="pr-2">{` ${track.title} - ${track.artist} `}</div>
    </Marquee>
  )
}

export function SidebarNavigation() {
  const { data: track } = useSWR<TrackType>(`/api/spotify`, fetcher)
  //console.log(track)
  const path = usePathname()
  const { data } = useViewerQuery()
  const sections = [
    {
      label: null,
      items: [
        {
          href: '/',
          label: 'Home',
          icon: HomeIcon,
          trailingAccessory: null,
          isActive: path === '/',
          trailingAction: null,
          isExternal: false,
        },
        {
          href: '/blog',
          label: 'Posts',
          icon: WritingIcon,
          trailingAccessory: null,
          isActive: path.indexOf('/blog') >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
    {
      label: 'Me',
      items: [
        {
          href: '/bookmarks',
          label: 'Bookmarks',
          icon: BookmarksIcon,
          trailingAccessory: null,
          isActive: path.indexOf('/bookmarks') >= 0,
          trailingAction: data?.viewer?.isAdmin ? ThisAddBookmarkDialog : null,
          isExternal: false,
        },
        {
          href: '/dash',
          label: 'Dashboard',
          icon: ListMusicIcon,
          trailingAccessory: null,
          isActive: path.indexOf('/dash') >= 0,
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/ama',
          label: 'AMA',
          icon: AMAIcon,
          trailingAccessory: null,
          isActive:
            path.indexOf('/ama') >= 0 && !path.startsWith('/ama/pending'),
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/stack',
          label: 'Stack',
          icon: StackIcon,
          trailingAccessory: null,
          isActive: path.indexOf('/stack') >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
    {
      label: 'Projects',
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

 */
        {
          href: '/casestudy',
          label: 'Case Studies',
          icon: CaseIcon,
          trailingAccessory: null,
          isActive: path.indexOf('/casestudy') >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
    {
      label: 'Online',
      items: [
        {
          href: '/dash',
          label: track && track.isPlaying ? Player(track) : 'AUDIO FEED',
          icon: CassetteTape,
          trailingAccessory: null,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },
        {
          href: 'https://twitter.com/vmprmyth',
          label: 'Twitter',
          icon: TwitterIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://open.spotify.com/artist/6bBbUUix7BfttiaHCDkcEI',
          label: 'Spotify',
          icon: Spotify,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://github.com/mustaqimarifin',
          label: 'GitHub',
          icon: GitHubIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://soundcloud.com/vmprmyth',
          label: 'SoundCloud',
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
              <h4
                key={i}
                className="px-2 pb-2 pt-5 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white">
                {section.label}
              </h4>
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
