"use client"

import Link from "next/link"

import { Avatar } from "~/components/Avatar"
import {
	GetStackDocument,
	type GetStackQuery,
	type Stack,
	useGetStackQuery,
	useToggleStackUserMutation,
	useViewerQuery,
} from "~/gql/typeSlut"

import { useWindowFocus } from "~/hooks"
import { Tooltip } from "../UI/Tooltip"

type Props = {
	triggerSignIn: () => void
	stack: Stack
}
export function StackUsedBy(props) {
	const { triggerSignIn } = props
	const { data: viewerData } = useViewerQuery()
	const { data, loading, error, refetch } = useGetStackQuery({
		variables: { slug: props.stack.slug },
	})
	const [toggleStackUser] = useToggleStackUserMutation()

	useWindowFocus({ onFocus: refetch })

	if (loading) {
		return null
	}

	if (error) {
		return null
	}

	function handleChange() {
		return toggleStackUser({
			variables: {
				id: props.stack.id,
			},
			optimisticResponse: {
				__typename: "Mutation",
				toggleStackUser: {
					__typename: "Stack",
					...props.stack,
					//@ts-ignore
					usedByViewer: !data?.stack?.usedByViewer,
					usedBy: data?.stack?.usedByViewer
						? data.stack.usedBy.filter(u => u!.id !== viewerData?.viewer?.id)
						: [...data?.stack?.usedBy!, viewerData?.viewer],
				},
			},
			update(cache) {
				const { stack } = cache.readQuery<GetStackQuery>({
					query: GetStackDocument,
					variables: { slug: props.stack.slug },
				})

				cache.writeQuery<GetStackQuery>({
					query: GetStackDocument,
					variables: { slug: props.stack.slug },
					data: {
						stack: {
							...stack,
							usedByViewer: !data?.stack?.usedByViewer,
							usedBy: data?.stack?.usedByViewer
								? data?.stack?.usedBy.filter(u => u?.id !== viewerData?.viewer?.id)
								: [...data?.stack?.usedBy!, viewerData?.viewer],
						},
					},
				})
			},
		})
	}

	function handleToggle() {
		if (viewerData?.viewer) {
			return handleChange()
		}
		return triggerSignIn()
	}

	return (
		<div className="flex flex-col rounded-md pt-2">
			<div className="flex flex-col space-y-4 rounded-t-md border border-b-0 border-gray-200 bg-gray-100 p-4 dark:border-gray-800 dark:bg-white dark:bg-opacity-10">
				{data?.stack?.usedBy.length === 0 ? (
					<p className="text-quaternary text-sm font-medium">
						Nobody else is using this yet...
					</p>
				) : (
					<p className="text-quaternary text-sm font-medium">
						Also used by{" "}
						{data?.stack?.usedBy.length === 1
							? `${data?.stack?.usedBy.length} person`
							: `${data?.stack?.usedBy.length} people`}
					</p>
				)}

				{data?.stack?.usedBy.length! > 0 && (
					<div className="-m-1 flex flex-wrap">
						{data?.stack?.usedBy.map(user => (
							<Tooltip key={user?.id} content={user?.name!}>
								<span>
									<Link href={`/u/${user?.id}`} passHref className="inline-flex p-1">
										<Avatar
											user={user}
											src={user?.image}
											width={32}
											height={32}
											className="rounded-full"
										/>
									</Link>
								</span>
							</Tooltip>
						))}
					</div>
				)}
			</div>
			<label className="flex items-center space-x-3 rounded-b-md border border-gray-200 bg-white px-4 py-2 dark:border-gray-800 dark:bg-gray-900">
				<input
					type="checkbox"
					onChange={handleToggle}
					checked={data?.stack?.usedByViewer!}
					className="h-4 w-4 rounded border border-gray-300 dark:border-gray-700"
				/>
				<p className="text-primary text-sm font-medium">I use this</p>
			</label>
		</div>
	)
}
