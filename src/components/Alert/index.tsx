export function ErrorAlert({ children }) {
  return (
    <div className="rounded-md bg-error bg-opacity-10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
      {children}
    </div>
  )
}

export function SuccessAlert({ children }) {
  return (
    <div className="rounded-md bg-success bg-opacity-10 px-4 py-3 text-sm text-green-700 dark:text-green-400">
      {children}
    </div>
  )
}

export function WarnAlert({ children }) {
  return (
    <div className="rounded-md bg-warning bg-opacity-10 px-4 py-3 text-sm text-yellow-700 dark:text-yellow-400">
      {children}
    </div>
  )
}
