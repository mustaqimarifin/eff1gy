'use client'

import { Plus } from 'lucide-react'
import { useContext } from 'react'

import { GhostButton } from '~/components/Button'
import { TitleBar } from '~/components/ListDetail/TitleBar'
import { useViewerQuery } from '~/graphql/typeSlut'

import SegmentedControl from '../UI/SegmentedController'
import { WritingContext } from './PostsList'

export function WritingTitlebar({ scrollContainerRef }) {
  const { data } = useViewerQuery()

  function getAddButton() {
    if (data?.viewer?.isAdmin) {
      return (
        <GhostButton
          href="/writing/new"
          data-cy="new-post-button"
          size="small-square"
          aria-label="Add post">
          <Plus size={16} />
        </GhostButton>
      )
    }
    return null
  }

  function trailingAccessory() {
    return <div className="flex space-x-2">{getAddButton()}</div>
  }

  function getChildren() {
    const { data } = useViewerQuery()
    const { setFilter, filter } = useContext(WritingContext)
    if (data?.viewer?.isAdmin) {
      return (
        <div className="pb-1 pt-2">
          <SegmentedControl
            onSetActiveItem={setFilter}
            active={filter}
            items={[
              { id: 'published', label: 'Published' },
              { id: 'draft', label: 'Drafts' },
            ]}
          />
        </div>
      )
    }
    return null
  }

  return (
    <TitleBar
      trailingAccessory={trailingAccessory()}
      title="Writing"
      scrollContainerRef={scrollContainerRef}>
      {getChildren()}
    </TitleBar>
  )
}
