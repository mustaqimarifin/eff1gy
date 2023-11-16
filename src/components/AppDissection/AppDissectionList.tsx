import * as React from 'react'
import { useRouter } from 'next/router'
import { ListContainer } from '~/components/ListDetail/ListContainer'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { fetcher } from '~/lib/functions'
import useSWR from 'swr'

import { CaseStudy } from '../Posts/BlogDetail'
import { AppDissectionListItem } from './AppDissectionListItem'

export const AppDissectionList = React.memo(() => {
  const router = useRouter()
  const [scrollContainerRef, setScrollContainerRef] = React.useState(null)
  const { data: casestudies } = useSWR<CaseStudy[]>(`/api/casestudy`, fetcher)

  return (
    <ListContainer data-cy="apps-list" onRef={setScrollContainerRef}>
      <TitleBar
        scrollContainerRef={scrollContainerRef}
        title="App Dissection"
      />

      <div className="lg:space-y-1 lg:p-3">
        {casestudies &&
          casestudies?.map((casestudy) => {
            const active = router.query.slug === casestudy.slug
            return (
              <AppDissectionListItem
                key={casestudy.slug}
                casestudy={casestudy}
                active={active}
              />
            )
          })}
      </div>
    </ListContainer>
  )
})
