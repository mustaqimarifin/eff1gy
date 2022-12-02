import { useEffect } from 'react'
import useSWR from 'swr'

import { ketchup } from '~/lib/functions'

export type Views = {
  total: number
}

export default function ViewCounter({ slug }) {
  const { data } = useSWR<Views>(`/api/views/${slug}`, ketchup)
  const views = new Number(data?.total)

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    registerView()
  }, [slug])

  return <span>{`${views > 0 ? views.toLocaleString() : '–––'} views`}</span>
}
