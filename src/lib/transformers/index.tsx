export const cx = (...classes) => classes.filter(Boolean).join(' ')

type Props = {
  timestamp?: number | string
  locale?: string
  year?: 'numeric' | '2-digit'
  month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow'
  day?: 'numeric' | '2-digit'
}

export function realTime({
  timestamp = null,
  locale = 'en-us',
  year = 'numeric',
  month = 'long',
  day = 'numeric',
}: Props) {
  const date = timestamp ? new Date(timestamp) : new Date()

  const formatted = date.toLocaleDateString(locale, {
    year,
    month,
    day,
  })

  const raw = date.toISOString()

  return {
    formatted,
    raw,
  }
}

export function formatDate(date: string) {
  let currentDate = new Date()
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  return `${fullDate} `
}
