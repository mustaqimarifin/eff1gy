import { Toaster, toast } from "sonner"

export const Nuts = toast

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
