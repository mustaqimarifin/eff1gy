"use client"
import { useReducer } from "react"
import { toast } from "sonner"

import Button, { DeleteButton, PrimaryButton } from "~/components/Button"
import { Input, Textarea } from "~/components/Input"
import { LoadingSpinner } from "~/components/LoadingSpinner"

import {
	type Question,
	useDeleteQuestionMutation,
	useEditQuestionMutation,
} from "~/gql/typeSlut"

import AudioRecorder from "../AudioRecorder"

export function EditQuestionForm({
	closeModal,
	question,
}: {
	closeModal: any
	question: Question
}) {
	const initialState = {
		title: question.title,
		description: question.description || "",
		waveform: question.waveform,
		src: question.audioUrl,
		error: "",
		isRecording: false,
	}

	function reducer(state, action) {
		switch (action.type) {
			case "edit-title": {
				return {
					...state,
					error: "",
					title: action.value,
				}
			}
			case "edit-description": {
				return {
					...state,
					error: "",
					description: action.value,
				}
			}
			case "add-waveform": {
				return {
					...state,
					waveform: action.value.waveform,
					src: action.value.src,
				}
			}
			case "is-recording": {
				return {
					...state,
					isRecording: action.value,
				}
			}
			case "remove-audio": {
				return {
					...state,
					waveform: null,
					src: null,
				}
			}
			case "error": {
				return {
					...state,
					error: action.value,
				}
			}
			default:
				throw new Error(action.value)
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)
	//const { data } = useViewerQuery()

	const [updateQuestion, { loading }] = useEditQuestionMutation({
		variables: {
			id: question.id,
			data: {
				title: state.title,
				description: state.description,
				waveform: state.waveform,
			},
		},
		/* optimisticResponse: {
			__typename: "Mutation",
			editQuestion: {
				__typename: "Question",
				...question,
				title: state.title,
				description: state.description,
				waveform: state.waveform,
				audioUrl: state.src,
				author: data.viewer,
			},
		}, */
		onCompleted() {
			toast.success("Saved!")
			closeModal()
		},
		onError({ message }) {
			const value = message.replace("GraphQL error:", "")
			dispatch({ type: "error", value })
		},
	})

	const [handleDelete] = useDeleteQuestionMutation({
		variables: { id: question.id },
	})

	/* const [handleDelete] = useDeleteQuestionMutation({
		variables: { id: question.id },
		optimisticResponse: {
			__typename: "Mutation",
			deleteQuestion: true,
		},
		update(cache) {
			const cacheData = cache.readQuery<GetQuestionsQuery>({
				query: GET_QUESTIONS,
				variables: { filter: { status: question.status } },
			})

			cache.writeQuery({
				query: GET_QUESTION,
				variables: { id: question.id },
				data: {
					question: null,
					__typename: "Query",
				},
			})

			if (cacheData) {
				const { questions } = cacheData
				cache.writeQuery({
					query: GetQuestionsDocument,
					variables: { filter: { status: question.status } },
					data: {
						questions: {
							...questions,
							pageInfo: {
								...questions.pageInfo,
								totalCount: questions.pageInfo.totalCount - 1,
							},
							edges: questions.edges.filter(o => o.node.id !== question.id),
						},
						__typename: "Query",
					},
				})
			}
		},
	}) */

	function handleSave(e) {
		e.preventDefault()

		if (!state.title || state.title.length === 0) {
			return dispatch({ type: "error", value: "Gotta have a question" })
		}

		updateQuestion()
		return closeModal()
	}

	function onTitleChange(e) {
		return dispatch({ type: "edit-title", value: e.target.value })
	}

	function onKeyDown(e) {
		if (e.keyCode === 13 && e.metaKey) {
			return handleSave(e)
		}
	}

	function onDescriptionChange(e) {
		return dispatch({ type: "edit-description", value: e.target.value })
	}
	async function onUploadComplete({ waveform, src }) {
		dispatch({ type: "add-waveform", value: { waveform, src } })
		dispatch({ type: "is-recording", value: false })
		updateQuestion()
	}

	function onRecordingStart() {
		// signUploadMutation.mutate()
		dispatch({ type: "is-recording", value: true })
	}

	function onRecordingStop() {
		// signUploadMutation.mutate()
		dispatch({ type: "is-recording", value: false })
	}

	function onDeleteAudio() {
		dispatch({ type: "remove-audio" })
	}

	return (
		<div className="p-4">
			<form className="space-y-3" onSubmit={handleSave}>
				<Input
					placeholder="Ask me anything..."
					value={state.title}
					onChange={onTitleChange}
					onKeyDown={onKeyDown}
				/>
				{state.error && <p className="text-red-500">{state.error}</p>}
				<div className="flex flex-col space-y-2">
					<p className="text-primary text-sm font-semibold">Record answer</p>
					<AudioRecorder
						id={question.id}
						initialAudioUrl={state.src}
						initialWaveform={state.waveform}
						onUploadComplete={onUploadComplete}
						onRecordingStart={onRecordingStart}
						onRecordingStop={onRecordingStop}
						onDeleteAudio={onDeleteAudio}
					/>
				</div>
				<Textarea
					rows={4}
					defaultValue={question.description}
					onChange={onDescriptionChange}
					onKeyDown={onKeyDown}
					placeholder="Add optional details"
				/>
			</form>
			{state.isRecording && (
				<div className="space-between flex justify-between">
					<Button onClick={onRecordingStop}>Cancel</Button>
				</div>
			)}

			{!state.isRecording && (
				<div className="flex justify-between pt-3">
					<DeleteButton
						onClick={() => {
							closeModal()
							handleDelete()
						}}
					>
						Delete
					</DeleteButton>
					<div className="flex space-x-3">
						<PrimaryButton
							disabled={loading || state.title.trim().length === 0}
							onClick={handleSave}
						>
							{loading ? <LoadingSpinner /> : "Save"}
						</PrimaryButton>
					</div>
				</div>
			)}
		</div>
	)
}
