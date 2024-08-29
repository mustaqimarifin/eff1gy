import { useApolloClient, useMutation } from "@apollo/client"

import { DeleteButton } from "~/components/Button"
import { DialogComponent } from "~/components/Dialog"
import { DeleteUserDocument } from "~/gql/typeSlut"
import { LoadingSpinner } from "../LoadingSpinner"

export function DeleteUserDialog({ trigger }) {
	const apolloClient = useApolloClient()
	const [handleDelete, { loading }] = useMutation(DeleteUserDocument)

	return (
		<DialogComponent
			trigger={trigger}
			title="Delete account"
			modalContent={() => (
				<div className="text-primary flex flex-col space-y-4 p-4 text-left">
					<div>All comments, reactions, and AMA questions will be deleted.</div>

					<DeleteButton
						onClick={async () => {
							await handleDelete()
							await apolloClient.resetStore()
						}}
					>
						{loading ? <LoadingSpinner /> : "Delete my account"}
					</DeleteButton>
				</div>
			)}
		/>
	)
}
