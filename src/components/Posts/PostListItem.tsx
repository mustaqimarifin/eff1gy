import * as React from "react"

import { ListItem } from "~/components/ListDetail/ListItem"
import type { Post } from "~/gql/typeSlut"
import { realTime } from "~/lib/transformers"

interface Props {
	post: Post
	active: boolean
}

export const PostListItem = React.memo<Props>(({ post, active }) => {
	const publishedAt = realTime({ timestamp: post.publishedAt })
	return (
		<ListItem
			key={post.id}
			href={`/post/${post.slug}`}
			title={post.title}
			description={`Compiled in 1489ms (2375 modules)`}
			byline={post.publishedAt ? publishedAt.formatted : "Draft"}
			active={active}
		/>
	)
})
