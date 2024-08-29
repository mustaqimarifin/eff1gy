"use client"

import { useRef } from "react"

import { useQuery } from "@apollo/client"
import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"
import { GetViewerWithSettingsDocument } from "~/gql/typeSlut"
import { UserSettingsFooter } from "./Footer"
import { SignedOut } from "./SignedOut"
import { UsernameForm } from "./Username"

export function UserSettings() {
	const { data, loading } = useQuery(GetViewerWithSettingsDocument, {
		fetchPolicy: "network-only",
	})

	const titleRef = useRef(null)
	const scrollContainerRef = useRef(null)

	if (!data?.viewer && loading) {
		return <Detail.Loading />
	}

	if (!data?.viewer) {
		return <SignedOut />
	}

	return (
		<Detail.Container ref={scrollContainerRef}>
			<TitleBar
				magicTitle
				title="Settings"
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
			/>
			<Detail.ContentContainer>
				<Detail.Header>
					<Detail.Title ref={titleRef}>Settings</Detail.Title>
				</Detail.Header>

				<div className="divide-y divide-gray-200 py-12 dark:divide-gray-800">
					<div className="space-y-8 py-12">
						<h3 className="text-primary text-lg font-bold">Account</h3>
						<UsernameForm viewer={data.viewer} />
					</div>

					{/*           {data.viewer.email && (
            <div className="py-12 space-y-8">
              <h3 className="text-lg font-bold text-primary">Emails</h3>
              <EmailPreferences viewer={data.viewer} />
            </div>
          )} */}

					<UserSettingsFooter />
				</div>
			</Detail.ContentContainer>
		</Detail.Container>
	)
}
