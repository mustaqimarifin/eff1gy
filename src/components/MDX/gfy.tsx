import "./gfy.css"

import { EmbeddedTweet, TweetNotFound, type TweetProps } from "react-tweet"
import { getTweet } from "react-tweet/api"

async function TweetContent({ id, components, onError }: TweetProps) {
	let error
	const tweet = id
		? await getTweet(id).catch(err => {
				if (onError) {
					error = onError(err)
				} else {
					console.error(err)
					error = err
				}
			})
		: undefined

	if (!tweet) {
		const NotFound = components?.TweetNotFound || TweetNotFound
		return <NotFound error={error} />
	}

	return <EmbeddedTweet tweet={tweet} components={components} />
}

function ReactTweet(props: TweetProps) {
	return <TweetContent {...props} />
}

export async function Tweet({ id }: { id: string }) {
	return (
		<div className="tweet my-6">
			<div className="flex justify-center">
				<ReactTweet id={id} />
			</div>
		</div>
	)
}
