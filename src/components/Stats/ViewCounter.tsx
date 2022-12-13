import { EyeOpenIcon } from '@radix-ui/react-icons'
import { useEffect, useLayoutEffect } from 'react'
import useSWR from 'swr'

import Button from '~/components/Button'
import { cacheOnly, ketchup } from '~/lib/functions'
export type Views = {
  total: number
}

//export const useIsomorphicLayoutEffect =
//  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default function ViewCounter({ catID }) {
  const { data } = useSWR<Views>(`/api/views/${catID}`, ketchup)
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${catID}`, {
        method: 'POST',
      })

    registerView()
  }, [catID])

  return (
    <>
      <Button aria-label="Views">
        <span className="text-pink-500 font-mono">
          <EyeOpenIcon />
        </span>
        <span>{`${views > 0 ? views.toLocaleString() : '–––'}`}</span>
      </Button>
    </>
  )
}
