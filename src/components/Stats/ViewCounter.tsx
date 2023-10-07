import { useEffect } from "react"
import Button from "~/components/Button"
import { cacheOnly, ketchup } from "~/lib/functions"
import { Eye } from "lucide-react"
import useSWR from "swr"

import { LoadingSpinner } from "../LoadingSpinner"

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
        method: "POST",
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
          <span className="font-mono text-gray-500 hover:text-rose-300 ">
            <Eye />{" "}
          </span>
          <span>{isLoading ? load() : views.toLocaleString()}</span>
        </Button>
      </div>
    </>
  )
}
