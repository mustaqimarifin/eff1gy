/* eslint-disable react/jsx-key */
import { useRouter } from 'next/router'
import * as React from 'react'
import { Plus } from 'react-feather'

import { AddBookmarkDialog } from '~/components/Bookmarks/AddBookmarkDialog'
import { GhostButton } from '~/components/Button'
import {
  AMAIcon,
  AppDissectionIcon,
  BookmarksIcon,
  CritIcon,
  ExternalLinkIcon,
  FigmaIcon,
  GitHubIcon,
  HackerNewsIcon,
  HomeIcon,
  MidnightOilIcon,
  SecurityChecklistIcon,
  SoundcloudIcon,
  StackIcon,
  StaffDesignIcon,
  TwitterIcon,
  VideoIcon,
  WritingIcon,
} from '~/components/Icon'
import { useViewerQuery } from '~/graphql/types.generated'

import NowPlaying from '../Stats/Spotify/NowPlaying'
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

export function SidebarNavigation() {
  const router = useRouter()
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
          isActive: router.asPath === '/',
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/writing',
          label: 'Writing',
          icon: WritingIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/writing') >= 0,
          trailingAction: null,
          isExternal: false,
        },

        /*         {
          href: '/crit',
          label: 'Crit',
          icon: CritIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/crit') >= 0,
          trailingAction: null,
          isExternal: false,
        }, */
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
          isActive: router.asPath.indexOf('/bookmarks') >= 0,
          trailingAction: data?.viewer?.isAdmin ? ThisAddBookmarkDialog : null,
          isExternal: false,
        },

        {
          href: '/ama',
          label: 'AMA',
          icon: AMAIcon,
          trailingAccessory: null,
          isActive:
            router.asPath.indexOf('/ama') >= 0 &&
            !router.asPath.startsWith('/ama/pending'),
          trailingAction: null,
          isExternal: false,
        },
        {
          href: '/stack',
          label: 'Stack',
          icon: StackIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/stack') >= 0,
          trailingAction: null,
          isExternal: false,
        },
        /*  {
          href: '/press',
          label: 'Press',
          icon: AMAIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/press') >= 0,
          //            !router.asPath.startsWith('/ama/pending'),
          trailingAction: null,
          isExternal: false,
        }, */
      ],
    },
    {
      label: 'Projects',
      items: [
        {
          href: 'https://soundcloud.com/vmprmyth',
          label: 'VMPRMYTH',
          icon: SoundcloudIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },

        {
          href: 'https://soundcloud.com/midnightoilmusic',
          label: 'Midnight Oil',
          icon: MidnightOilIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },
        /* {
          href: '/security',
          label: 'Security Checklist',
          icon: SecurityChecklistIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/security') >= 0,
          trailingAction: null,
          isExternal: false,
        }, */

        /*        {
          href: '/hn',
          label: 'Hacker News',
          icon: HackerNewsIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/hn') >= 0,
          trailingAction: null,
          isExternal: false,
        }, */

        /*  {
          href: '/app-dissection',
          label: 'App Dissection',
          icon: AppDissectionIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/app-dissection') >= 0,
          trailingAction: null,
          isExternal: false,
        }, */
      ],
    },
    {
      label: 'Online',
      items: [
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
          href: 'https://github.com/mustaqimarifin',
          label: 'GitHub',
          icon: GitHubIcon,
          trailingAccessory: ExternalLinkIcon,
          isActive: false,
          trailingAction: null,
          isExternal: true,
        },
      ],
    },
    {
      label: 'Misc',
      items: [
        {
          href: '/privacypolicy',
          label: 'Privacy Policy',
          icon: StackIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/privacypolicy') >= 0,
          trailingAction: null,
          isExternal: false,
        },

        {
          href: '/termsofservice',
          label: 'Terms of Service',
          icon: StackIcon,
          trailingAccessory: null,
          isActive: router.asPath.indexOf('/termsofservice') >= 0,
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
  ]

  return (
    <div className="flex-1 px-3 py-3 space-y-1">
      {sections.map((section, i) => {
        return (
          <ul key={i} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
              >
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
