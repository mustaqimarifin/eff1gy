import * as React from 'react'
import Image from 'next/image'
import { ListItem } from '~/components/ListDetail/ListItem'

import { CaseStudy } from '../Posts/BlogDetail'

interface Props {
  casestudy: CaseStudy
  active: boolean
}

export const AppDissectionListItem = React.memo<Props>(
  ({ casestudy, active }) => {
    return (
      <ListItem
        key={casestudy.slug}
        href="/app-dissection/[slug]"
        as={`/app-dissection/${casestudy.slug}`}
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
  }
)
