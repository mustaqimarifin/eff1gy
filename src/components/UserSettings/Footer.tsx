//

import { signOut } from "next-auth/react"

import Button, { DeleteButton } from "~/components/Button"
import { DeleteUserDialog } from "./DeleteUserDialog"

export function UserSettingsFooter() {
	return (
		<div className="flex justify-between space-x-4 py-12">
			<Button variant="link" onClick={() => signOut()}>
				Log out
			</Button>

			<DeleteUserDialog trigger={<DeleteButton>Delete account</DeleteButton>} />
		</div>
	)
}
