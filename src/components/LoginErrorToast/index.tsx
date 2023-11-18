import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { toast } from 'sonner'

export function LoginErrorToast() {
    const router = useRouter()
    const path = usePathname()
    const searchParams = useSearchParams()

    const errorCode = searchParams.get('error_code')

    useEffect(() => {
        if (errorCode) {
            if (errorCode === 'access_denied') {
                toast.warning('Sign in failed. Try again?')
            } else {
                toast.error('Sorry, something went wrong.')
            }

            // Remove the query parameter from the visible URL.
            router.replace(path)
        }
    }, [errorCode])

    return null
}
