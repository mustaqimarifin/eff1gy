'use client'
import React from 'react'

import { CritContent } from '~/app/(utils)/crit/Content'
import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import routes from '~/config/routes'

export function Crit() {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)

  return (
    <Detail.Container ref={scrollContainerRef}>
      <TitleBar
        magicTitle
        title={'Crit'}
        titleRef={titleRef}
        scrollContainerRef={scrollContainerRef}
      />

      <Detail.ContentContainer>
        <Detail.Header>
          <Detail.Title ref={titleRef}>{routes.crit.seo.title}</Detail.Title>
          <p className="text-tertiary text-xl">{routes.crit.seo.description}</p>
        </Detail.Header>
        <CritContent />
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
