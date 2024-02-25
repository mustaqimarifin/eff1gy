import { Toaster, toast } from "sonner";

export let nuts = toast;

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
	);
}
