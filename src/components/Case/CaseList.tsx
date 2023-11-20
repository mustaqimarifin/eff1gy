'use client'

import { useParams, usePathname, useRouter } from 'next/navigation'
import * as React from 'react'
import useSWR from 'swr'

import { ListContainer } from '~/components/ListDetail/ListContainer'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { fetcher } from '~/lib/functions'

import { LoadingSpinner } from '../LoadingSpinner'
import { CaseListItem } from './CaseItem'

export const CaseList = ({ cases }) => {
  const path = usePathname()
  const [scrollContainerRef, setScrollContainerRef] = React.useState(null)
  /*     const { data, isLoading } = useSWR<CaseStudy[]>(
        'http://localhost:3000/api/casestudy',
        fetcher
    )
 */
  if (!cases) {
    return (
      <ListContainer onRef={setScrollContainerRef}>
        <TitleBar scrollContainerRef={scrollContainerRef} title="Case Study" />
        <div className="flex flex-1 items-center justify-center">
          <LoadingSpinner />
        </div>
      </ListContainer>
    )
  }

  return (
    <ListContainer data-cy="case-list" onRef={setScrollContainerRef}>
      <TitleBar scrollContainerRef={scrollContainerRef} title="Case Study" />

      <div className="lg:space-y-1 lg:p-3">
        {cases &&
          cases?.map((casestudy) => {
            const active = path === casestudy.slug
            return (
              <CaseListItem
                key={casestudy.slug}
                casestudy={casestudy}
                active={active}
              />
            )
          })}
      </div>
    </ListContainer>
  )
}
