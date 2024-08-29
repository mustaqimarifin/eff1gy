import { UserDetail } from "~/components/UserProfile/UserDetail"

export default function UserPage({ params: { username } }) {
	return <UserDetail username={username} />
}
