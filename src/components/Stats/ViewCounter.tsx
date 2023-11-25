import { LucideEye } from 'lucide-react'
import { useEffect } from 'react'
import useSWR from 'swr'

import { useViewerQuery } from '~/graphql/typeSlut'
import { fetcher } from '~/lib/functions'
import { cx } from '~/lib/transformers'

import { ViewButton } from '../Button'

export type CounterProps = {
  id?: string
  total?: number
  trackView?: boolean
}

export const PageViews = ({ id, trackView }: CounterProps) => {
  const { data: abuser } = useViewerQuery()

  const { data } = useSWR<CounterProps>(`/api/views/${id}`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${id}`, {
        method: 'POST',
      })
    if (trackView) {
      registerView()
    }
  }, [])

  if (!data) return null
  else
    return (
      <div className={cx(!abuser?.viewer?.isAdmin ?? 'hidden')}>
        <ViewButton
          aria-label="Views"
          style={{ maxHeight: '32px', overflow: 'hidden' }}>
          <span className=" text-gray-500	">
            <LucideEye size={16} />
          </span>
          <span>{data?.total}</span>
        </ViewButton>
      </div>
    )
}

/* export const TotalViews = () => {
  const { data } = useSWR<CounterProps>(`/api/posts`, fetcher)
  if (!data) return null
  else return <p className="text-xs">{`${data?.total} views`}</p>
}
 */
