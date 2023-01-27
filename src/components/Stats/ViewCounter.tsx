import { EyeOpenIcon } from '@radix-ui/react-icons'
import { useEffect } from 'react'
import useSWR from 'swr'

import Button from '~/components/Button'
import { cacheOnly, ketchup } from '~/lib/functions'

import { LoadingSpinner } from '../LoadingSpinner'
export type Views = {
  total: number
}

export default function ViewCounter({ catID }) {
  const { data, isLoading } = useSWR<Views>(
    `/api/page/${catID}`,
    ketchup,
    cacheOnly
  )
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/page/${catID}`, {
        method: 'POST',
      })

    registerView()
  }, [catID])

  const load = () => {
    return <LoadingSpinner />
  }

  return (
    <>
      <div className="cursor-none">
        <Button aria-label="Views">
          <span className="text-gray-500 hover:text-rose-300 font-mono ">
            <EyeOpenIcon />
          </span>
          <span>{isLoading ? load() : views.toLocaleString()}</span>
        </Button>
      </div>
    </>
  )
}
