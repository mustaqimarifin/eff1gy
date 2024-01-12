'use client'
import { usePathname } from 'next/navigation'
import * as React from 'react'

import { ListContainer } from '~/components/ListDetail/ListContainer'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { summaries } from '~/data/events'

import { EventListItem } from './EventListItem'

export const EventList = React.memo(() => {
  const path = usePathname()
  let [scrollContainerRef, setScrollContainerRef] = React.useState(null)

  return (
    <ListContainer data-cy="apps-list" onRef={setScrollContainerRef}>
      <TitleBar
        scrollContainerRef={scrollContainerRef}
        title="App Dissection"
      />

      <div className="lg:space-y-1 lg:p-3">
        {summaries.map((summary) => {
          const active = path === summary?.slug
          return (
            <EventListItem
              key={summary?.slug}
              summary={summary}
              active={active}
            />
          )
        })}
      </div>
    </ListContainer>
  )
})
