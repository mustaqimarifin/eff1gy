import { useEffect } from 'react'
import useSWR from 'swr'

import { ketchup } from '~/lib/functions'

export type Views = {
  total: number
}

export default function ViewCounter({ id }) {
  const { data } = useSWR<Views>(`/api/views/${id}`, ketchup)
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${id}`, {
        method: 'POST',
      })

    registerView()
  }, [id])

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>
}
