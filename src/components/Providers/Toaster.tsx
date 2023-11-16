import { Toaster } from 'sonner'

export function Toast() {
  return (
    <Toaster
      position="bottom-right"
      toastOptions={{
        // Define default options
        duration: 2000,
       
      }}
    />
  )
}
