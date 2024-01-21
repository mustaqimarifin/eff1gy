'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import useSWR from 'swr'

import { ListContainer } from '~/components/ListDetail/ListContainer'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { CLIENT_URL } from '~/graphql/constants'
import { fetcher } from '~/lib/functions'

import { LoadingSpinner } from '../LoadingSpinner'
import type { CaseStudy } from '../Posts/PostDetail'
import { CaseListItem } from './CaseItem'

export const CaseList = () => {
  const path = usePathname()
  const [scrollContainerRef, setScrollContainerRef] = useState(null)
  const { data, isLoading } = useSWR<CaseStudy[]>(
    CLIENT_URL + `/api/case`,
    fetcher
  )

  if (!data && isLoading) {
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
        {data &&
          data?.map((casestudy) => {
            const active = path === casestudy.slug
            return (
              <CaseListItem
                key={casestudy?.slug}
                casestudy={casestudy}
                active={active}
              />
            )
          })}
      </div>
    </ListContainer>
  )
}
