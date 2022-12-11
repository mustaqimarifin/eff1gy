import * as React from 'react'

export function ListContainer({ children, onRef, ...rest }) {
  const scrollContainerRef = React.useRef(null)

  React.useEffect(() => {
    onRef(scrollContainerRef)
  }, [scrollContainerRef])

  return (
    <div
      ref={scrollContainerRef}
      className="relative h-full md:max-h-screen md:min-h-screen w-full flex-none overflow-y-auto border-r border-gray-150 bg-white dark:border-gray-800 dark:bg-gray-1000 lg:w-80 lg:bg-gray-50 lg:dark:bg-gray-1000 xl:w-96"
      {...rest}
    >
      {children}
    </div>
  )
}
