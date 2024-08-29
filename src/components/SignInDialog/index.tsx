"use client"

import type { CSSProperties } from "react"
import { DialogComponent, type DialogProps } from "~/components/Dialog"
import { SignInDialogContent } from "./SignInDialogContent"

interface SIDProps extends DialogProps {
	style?: CSSProperties | null
}
export function SignInDialog({ children, trigger }: SIDProps) {
	return (
		<DialogComponent
			trigger={trigger}
			title="Sign In"
			modalContent={() => <SignInDialogContent />}
		>
			{children
				? ({ openModal }: { openModal: boolean }) => children({ openModal })
				: null}
		</DialogComponent>
	)
}
