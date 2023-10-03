import * as React from 'react'
import { GhostButton } from '~/components/Button'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { useViewerQuery } from '~/graphql/typeSlut'
import { PlusIcon } from 'lucide-react'

import { AddStackDialog } from './AddStackDialog'

export function StackTitlebar({ scrollContainerRef }) {
  const { data } = useViewerQuery()

  function trailingAccessory() {
    if (data?.viewer?.isAdmin) {
      return (
        <AddStackDialog
          trigger={
            <GhostButton aria-label="Add Stack" size="small-square">
              <PlusIcon />
            </GhostButton>
          }
        />
      )
    }
    return null
  }

  return (
    <TitleBar
      scrollContainerRef={scrollContainerRef}
      title="Stack"
      trailingAccessory={trailingAccessory()}
    />
  )
}
