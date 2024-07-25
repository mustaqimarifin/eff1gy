import * as React from "react";

import { ListItem } from "~/components/ListDetail/ListItem";
import type { Post } from "~/graphql/typeSlut";
import { realTime } from "~/lib/transformers";

interface Props {
	post: Post;
	active: boolean;
}

export const PostListItem = React.memo<Props>(({ post, active }) => {
	const publishedAt = realTime({ timestamp: post.publishedAt });
	return (
		<ListItem
			key={post.id}
			href="/post/[slug]"
			as={`/post/${post.slug}`}
			title={post.title}
			description={null}
			byline={post.publishedAt ? publishedAt.formatted : "Draft"}
			active={active}
		/>
	);
});
