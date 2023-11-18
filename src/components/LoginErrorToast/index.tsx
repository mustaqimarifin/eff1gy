import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { nuts } from '../Provider/Toaster'

export function LoginErrorToast() {
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()

  const errorCode = searchParams.get('error_code')

  useEffect(() => {
    if (errorCode) {
      if (errorCode === 'access_denied') {
        nuts.warning('Sign in failed. Try again?')
      } else {
        nuts.error('Sorry, something went wrong.')
      }

      // Remove the query parameter from the visible URL.
      router.replace(path)
    }
  }, [errorCode])

  return null
}
