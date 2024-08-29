"use client"

import { useQuery } from "@apollo/client"
import { useRef } from "react"

import Button from "~/components/Button"
import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import { GetUserDocument } from "~/gql/typeSlut"

export function UserDetail({ username }) {
	const scrollContainerRef = useRef(null)
	const titleRef = useRef(null)

	const { data, loading, error } = useQuery(GetUserDocument, { variables: { username } })

	if (error) return null
	if (loading) return <Detail.Loading />

	if (data?.user) {
		const { user } = data
		return (
			<Detail.Container ref={scrollContainerRef}>
				<TitleBar
					magicTitle
					title={user.name}
					titleRef={titleRef}
					scrollContainerRef={scrollContainerRef}
					trailingAccessory={
						user.isViewer ? <Button href="/settings">Settings</Button> : null
					}
				/>

				<Detail.ContentContainer>
					<Detail.Header>
						<Detail.Title ref={titleRef}>Profiles are coming soon</Detail.Title>
						<p className="text-tertiary text-xl">
							Check back in the future to see questions, comments, and more...
						</p>
					</Detail.Header>
				</Detail.ContentContainer>
			</Detail.Container>
		)
	}

	return null
}
