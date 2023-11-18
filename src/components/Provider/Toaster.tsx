import { toast, Toaster } from 'sonner'

export const nuts = toast

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
