import * as React from 'react'

import { TitleBar } from '~/components/ListDetail/TitleBar'
import { GlobalNavigationContext } from '~/components/Providers'

import ThemeToggle from '../Button/ThemeToggle'
import NowPlaying from '../Stats/Spotify/NowPlaying'
import { SidebarNavigation } from './Navigation'
import { SidebarOverlay } from './Overlay'
import { UserFooter } from './UserFooter'

export function Sidebar() {
  const { isOpen } = React.useContext(GlobalNavigationContext)
  const scrollContainerRef = React.useRef(null)
  return (
    <>
      <nav
        ref={scrollContainerRef}
        className={`${
          isOpen
            ? 'absolute inset-y-0 left-0 translate-x-0 shadow-lg'
            : 'absolute -translate-x-full'
        } 3xl:w-80 z-30 flex md:max-h-screen w-3/4 md:flex-none transform  flex-col overflow-y-auto border-r border-gray-150 bg-gray-100 pb-10 transition duration-200 ease-in-out dark:border-gray-800 dark:bg-gray-1000 sm:w-1/2 sm:pb-0 md:w-1/3 lg:relative lg:z-auto lg:w-56 lg:translate-x-0 lg:bg-gray-50 lg:dark:bg-gray-1000 2xl:w-72`}
      >
        <TitleBar
          scrollContainerRef={scrollContainerRef}
          leadingAccessory={<ThemeToggle />}
          title="[eff1gy]"
        />

        <SidebarNavigation />
        {/*         <NowPlaying className=" p-6" />
         */}
        <UserFooter />
      </nav>
      <SidebarOverlay />
    </>
  )
}
