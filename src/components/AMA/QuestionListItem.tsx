import { memo } from "react"

import { Avatar } from "~/components/Avatar"
import { ListItem } from "~/components/ListDetail/ListItem"
import type { Question } from "~/gql/typeSlut"

interface Props {
	question: Question
	active: boolean
}

export const QuestionListItem = memo<Props>(({ question, active }) => {
	return (
		<ListItem
			href={`/ama/${question?.id}`}
			title={question?.title}
			description={null}
			byline={
				<div className="flex items-center space-x-2">
					<Avatar
						user={question?.author}
						src={question?.author?.image}
						width={16}
						height={16}
						className="rounded-full"
					/>
					<span>{question?.author?.name}</span>
				</div>
			}
			active={active}
		/>
	)
})
