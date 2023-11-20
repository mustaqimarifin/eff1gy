'use client'

import Image from 'next/image'
import * as React from 'react'

import { ListItem } from '~/components/ListDetail/ListItem'

import type { CaseStudy } from '../Posts/BlogDetail'

interface Props {
  casestudy: CaseStudy
  active: boolean
}

export const CaseListItem = React.memo<Props>(({ casestudy, active }) => {
  return (
    <ListItem
      key={casestudy.slug}
      href="/casestudy/[slug]"
      as={`/casestudy/${casestudy.slug}`}
      title={casestudy.title}
      description={null}
      leadingAccessory={
        <Image
          width={48}
          height={48}
          alt={casestudy.title}
          className="rounded-xl"
          src={casestudy.caption}
        />
      }
      //byline={`${casestudy.detailsCount} details`}
      active={active}
    />
  )
})
