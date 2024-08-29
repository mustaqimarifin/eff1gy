"use client"
import { useEffect } from "react"

import { ListDetailView } from "~/components/Layouts"
import { Detail } from "~/components/ListDetail/Detail"

// biome-ignore lint/suspicious/noShadowRestrictedNames: <explanation>
export default function Error({
	error,
	reset,
}: {
	error: Error
	reset: () => void
}) {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error)
	}, [error])

	return <ListDetailView list={null} hasDetail detail={<MissingPage />} />
}

function MissingPage() {
	return <Detail.Null />
}
