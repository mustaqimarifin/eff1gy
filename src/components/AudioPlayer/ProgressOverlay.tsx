import * as React from "react"

const ProgressOverlay = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className="z-1 pointer-events-none absolute h-full w-full origin-left bg-white opacity-50 bg-blend-multiply dark:bg-gray-800"
    />
  )
})

export default ProgressOverlay
