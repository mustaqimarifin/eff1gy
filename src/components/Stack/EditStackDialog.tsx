"use client"

import { DialogComponent, type DialogProps } from "~/components/Dialog"
import type { Stack } from "~/gql/typeSlut"
import { EditStackForm } from "./EditStackForm"

interface EditProps extends DialogProps {
	stack: Stack
}
export function EditStackDialog({ trigger, stack }: EditProps) {
	return (
		<DialogComponent
			trigger={trigger}
			title="Edit stack"
			modalContent={({ closeModal }) => (
				<EditStackForm stack={stack} closeModal={closeModal} />
			)}
		/>
	)
}
