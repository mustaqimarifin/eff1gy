import { LucideEye } from 'lucide-react'
import { Suspense, useEffect } from 'react'
import useSWR from 'swr'

import { fetcher } from '~/lib/functions'

import Button, { ViewButton } from '../Button'

export type CounterProps = {
    id?: string
    total?: number
    trackView: boolean
}

export const PageViews = ({ id, trackView }: CounterProps) => {
    const { data } = useSWR<CounterProps>(
        `/api/views/${id}`,
        fetcher /* , {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  } */
    )

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
            <div className="select-none">
                {/*         <ViewButton
          aria-label="Views"
          style={{ maxHeight: '32px', overflow: 'hidden' }}
        >
          <span className=" text-gray-500	">
            <LucideEye size={18} />
          </span>
c        </ViewButton> */}
                <span>{data?.total}</span>
            </div>
        )
}

/* export const TotalViews = () => {
  const { data } = useSWR<CounterProps>(`/api/posts`, fetcher)
  if (!data) return null
  else return <p className="text-xs">{`${data?.total} views`}</p>
}
 */
