import { memo } from "react"

import { formatDate } from "~/lib/transformers"
import { ListItem } from "../ListDetail/ListItem"
import type { Post } from "./BlogDetail"

interface Props {
	post: Post
	active: boolean
}

export const PostListItem = memo<Props>(({ post, active }) => {
	return (
		<ListItem
			href={`/blog/${post.slug}`}
			title={post.title}
			byline={formatDate(post?.date)}
			active={active}
		/>
	)
})
