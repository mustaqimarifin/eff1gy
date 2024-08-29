import { TrashIcon } from "lucide-react"
import { useEffect, useReducer, useState } from "react"
import useSWR from "swr"

import { uploadToCloudinary } from "~/lib/cloudinary/api"
import AudioPlayer from "../AudioPlayer"
import Button, { DeleteButton, RecordingButton } from "../Button"
import { LoadingSpinner } from "../LoadingSpinner"
import { Nuts } from "../Provider/Toaster"

interface Props {
	id: string
	initialAudioUrl?: string
	initialWaveform?: number[]
	onRecordingStart?: () => void
	onRecordingStop?: () => void
	onRecordingError?: () => void
	// onTranscriptionComplete?: (e: OnComplete) => void
	onDeleteAudio?: () => void
	onUploadComplete: (e: { waveform: number[]; src: string }) => void
}

interface State {
	status: "idle" | "recording" | "recorded" | "uploading" | "done"
	audioUrl: string | null
	audioBlob: Blob | null
	waveform: number[]
	// transcript: string | null
	error: string | null
}

type Action =
	| { type: "reset" }
	| { type: "start-recording" }
	| { type: "stop-recording"; audioUrl: string; audioBlob: Blob }
	| { type: "start-uploading" }
	| { type: "done"; transcript: string }
	| { type: "set-waveform"; waveform: number[] }
	| { type: "error"; error: string }
	| { type: "delete" }

export default function AudioRecorder({
	id,
	initialAudioUrl = null,
	initialWaveform = [],
	onRecordingStart,
	onRecordingStop,
	onRecordingError,
	onDeleteAudio,
	onUploadComplete,
}: Props) {
	const initialState = {
		status: initialAudioUrl ? "recorded" : "idle",
		audioUrl: initialAudioUrl,
		audioBlob: null,
		waveform: initialWaveform,
		error: null,
	}

	function reducer(state: State, action: Action) {
		switch (action.type) {
			case "reset": {
				return initialState
			}
			case "start-recording": {
				return {
					...state,
					status: "recording",
				}
			}
			case "stop-recording": {
				return {
					...state,
					status: "recorded",
					audioUrl: action.audioUrl,
					audioBlob: action.audioBlob,
				}
			}
			case "set-waveform": {
				return {
					...state,
					waveform: action.waveform,
				}
			}
			case "start-uploading": {
				return {
					...state,
					status: "uploading",
				}
			}
			// case 'start-transcribing': {
			//   return {
			//     ...state,
			//     status: 'transcribing',
			//   }
			// }
			case "done": {
				return {
					...state,
					// transcript: action.transcript,
					status: "done",
				}
			}
			case "error": {
				onRecordingError?.()
				return {
					...initialState,
					error: action.error,
				}
			}
			case "delete": {
				return {
					...initialState,
					audioUrl: null,
					audioBlob: null,
					waveform: [],
					// transcript: null,
					status: "idle",
				}
			}
			default:
				throw new Error(action)
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState)
	const [audioChunks, setAudioChunks] = useState([])
	const [mediaRecorder, setMediaRecorder] = useState(null)

	useEffect(() => {
		async function handleMediaSetup() {
			const stream = await navigator.mediaDevices.getUserMedia({
				audio: true,
			})
			try {
				const mr = new MediaRecorder(stream)
				//	console.log(`Recording with mimeType: ${mr.mimeType}`);
				setMediaRecorder(mr)
			} catch (e) {}
		}

		// navigator.getUserMedia =
		//   navigator.getUserMedia ||
		//   navigator.webkitGetUserMedia ||
		//   navigator.mozGetUserMedia ||
		//   navigator.msGetUserMedia

		if (navigator.mediaDevices) {
			handleMediaSetup()
		} else {
			dispatch({
				type: "error",
				error: "Media Decives will work only with SSL",
			})
		}
	}, [])

	useEffect(() => {
		if (mediaRecorder) {
			mediaRecorder.ondataavailable = e => {
				if (e.data && e.data.size > 0) {
					setAudioChunks(state => [...state, e.data])
				}
			}
		}
	}, [mediaRecorder])

	function startRecording() {
		if (navigator.mediaDevices) {
			onRecordingStart?.()
			dispatch({ type: "start-recording" })
			mediaRecorder.start(10)
		} else {
			dispatch({
				type: "error",
				error: "Audio recording is not supported",
			})
		}
	}

	function stopRecording() {
		mediaRecorder.stop()
		const audioBlob = new Blob(audioChunks, { type: "audio/mp3" })
		const audioUrl = window.URL.createObjectURL(audioBlob)
		onRecordingStop?.()
		dispatch({ type: "stop-recording", audioUrl, audioBlob })
	}

	function reRecord() {
		dispatch({ type: "reset" })
		setAudioChunks([])
		startRecording()
	}

	function handleDelete() {
		onDeleteAudio?.()
		dispatch({ type: "delete" })
		setAudioChunks([])
	}

	function handleUpload() {
		dispatch({ type: "start-uploading" })
		mutate()
	}

	const { mutate } = useSWR(`/api/sign`, {
		onSuccess: async data => {
			const upload = await uploadToCloudinary(
				state.audioBlob,
				data.folder,
				`${data.timestamp}`,
				data.signature,
			)
			onUploadComplete({
				waveform: state.waveform,
				src: upload.secure_url,
			})
		},
	})

	return (
		<div className="flex flex-col space-y-4 rounded-md border border-gray-200 bg-gray-100 p-4 dark:border-gray-800 dark:bg-gray-900">
			{state.status === "idle" && (
				<Button onClick={startRecording}>
					{initialAudioUrl ? "Re-record answer" : "Record answer"}
				</Button>
			)}

			{state.status === "recording" && (
				<RecordingButton onClick={stopRecording}>Stop recording...</RecordingButton>
			)}

			{state.audioUrl && state.status !== "recording" && (
				<>
					<AudioPlayer
						id={null}
						isRecorder={true}
						waveform={state.waveform}
						setWaveformData={waveform => dispatch({ type: "set-waveform", waveform })}
						src={state.audioUrl}
					/>
				</>
			)}

			{state.audioUrl && state.status !== "uploading" && (
				<div className="flex w-full justify-between">
					{state.status !== "recording" && (
						<DeleteButton onClick={handleDelete}>
							<TrashIcon />
						</DeleteButton>
					)}

					{(state.status === "recorded" || state.status === "done") && (
						<div className="flex space-x-3">
							<Button onClick={reRecord}>Record again</Button>
							<Button onClick={handleUpload}>Upload audio</Button>
						</div>
					)}
				</div>
			)}

			{state.error && Nuts.error(state.error)}

			{state.status === "uploading" && (
				<div className="flex items-center justify-center">
					<LoadingSpinner />
					<p className="text-primary">Uploading...</p>
				</div>
			)}

			{/* {state.status === 'transcribing' && (
        <div className="flex items-center justify-center">
          <Spinner />
          <p className="text-primary">Transcribing...</p>
        </div>
      )} */}
		</div>
	)
}
