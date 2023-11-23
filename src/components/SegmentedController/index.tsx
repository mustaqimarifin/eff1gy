'use client'

import { useState } from 'react'

import { LayoutGroup } from '../Bookmarks/BookmarksList'

type Item = {
  id: string
  label: string
}

type SegmentedControlProps = {
  onSetActiveItem: (...args: unknown[]) => unknown
  items: Array<Item>
  active: string
}
const spring = { stiffness: 100, damping: 10 }
const SegmentedControl = ({
  onSetActiveItem,
  items,
  active,
}: SegmentedControlProps): JSX.Element => {
  const order = items.map((item) => item.id)

  const [activeItem, setActiveitem] = useState(active)

  function onChange(i) {
    setActiveitem(items[i].id)
    onSetActiveItem(items[i].id)
  }

  return (
    <LayoutGroup>
      <ol
        className={`flex list-none rounded-md bg-black bg-opacity-5 p-1 dark:bg-white dark:bg-opacity-5`}>
        {items.map((item, i) => {
          const isActive = items[i].id === activeItem
          return (
            <li id="bl" className="relative flex-1 leading-none" key={item.id}>
              <button
                onClick={() => onChange(i)}
                type="button"
                className={`relative w-full cursor-pointer bg-transparent px-4 py-1.5 text-xs font-semibold leading-none ${
                  isActive
                    ? `text-black text-opacity-100 dark:text-white`
                    : `text-black text-opacity-60 hover:text-opacity-100 dark:text-white`
                }`}>
                {isActive && (
                  <div
                    id="SegmentedControlActive"
                    className="z-1 absolute bottom-0 left-0 right-0 top-0 rounded bg-white shadow-sm content-none dark:bg-gray-700"
                  />
                )}
                <span className="z-2 relative">{item.label}</span>
              </button>
            </li>
          )
        })}
      </ol>
    </LayoutGroup>
  )
}

export default SegmentedControl
