import { EyeOpenIcon } from '@radix-ui/react-icons'
import { cache, useEffect } from 'react'
import useSWR from 'swr'

import Button from '~/components/Button'
import { cacheOnly, ketchup } from '~/lib/functions'
export type Views = {
  total: number
}

export default function ViewCounter({ catID }) {
  const { data } = useSWR<Views>(`/api/page/${catID}`, ketchup)
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/page/${catID}`, {
        method: 'POST',
      })

    registerView()
  }, [catID])

  return (
    <>
      <div className="cursor-none">
        <Button aria-label="Views">
          <span className="text-gray-500 hover:text-rose-300 font-mono ">
            <EyeOpenIcon />
          </span>
          <span>{`${views > 0 ? views.toLocaleString() : '–'}`}</span>
        </Button>
      </div>
    </>
  )
}
