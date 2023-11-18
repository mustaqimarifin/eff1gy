import { Toaster } from 'sonner'

export function Toast() {
    return (
        <Toaster
            richColors
            invert
            position="bottom-right"
            toastOptions={{
                // Define default options
                duration: 3000,
            }}
        />
    )
}
