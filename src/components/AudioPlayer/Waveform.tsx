import { useEffect, useState } from "react"

interface Props {
	src: string
	setWaveformData?: Function
	waveform: any
	isRecorder: boolean
}

export default function Waveform({
	src,
	setWaveformData,
	waveform = [],
	isRecorder,
}: Props) {
	const [audioContext, setAudioContext] = useState(null)
	const [hasDrawnAudio, setHasDrawnAudio] = useState(false)
	const [bars, setBars] = useState(waveform)

	const draw = normalizeData => {
		setWaveformData?.(normalizeData)
		return setBars(normalizeData)
	}

	useEffect(() => {
		const context = new AudioContext()

		setAudioContext(context)

		return () => {
			if (audioContext) {
				audioContext.close()
			}
		}
	}, [])

	useEffect(() => {
		const drawAudio = (url: RequestInfo | URL, sampleCount: number) => {
			fetch(url)
				.then(response => response.arrayBuffer())
				.then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
				.then(audioBuffer => draw(normalizeData(filterData(audioBuffer, sampleCount))))
				.catch(e => {
					console.error(e)
				})
		}
		// Since drawing will fetch the audio, do it only when recording (isRecorder) once (hasDrawnAudio)
		if (audioContext && isRecorder && !hasDrawnAudio) {
			const width = Math.max(
				document.documentElement.clientWidth || 0,
				window.innerWidth || 0,
			)
			let sampleCount = 64
			if (width < 800) sampleCount = 48
			if (width < 600) sampleCount = 40
			if (width < 400) sampleCount = 32
			drawAudio(src, sampleCount)
			setHasDrawnAudio(true)
		}
	}, [audioContext, src])

	return (
		<>
			{Array.isArray(bars) &&
				bars.map((bar, i) => {
					const height = `${bar * 40}px`
					return (
						<span
							key={i}
							style={{
								height,
								minWidth: "2px",
								minHeight: "2px",
							}}
							className="w-full rounded-md bg-gray-800 dark:bg-gray-200"
						/>
					)
				})}
		</>
	)
}

// See https://css-tricks.com/making-an-audio-waveform-visualizer-with-vanilla-javascript/ for the full tutorial explaining how this works
function filterData(
	audioBuffer: { getChannelData: (arg0: number) => any },
	sampleCount: any,
) {
	const rawData = audioBuffer.getChannelData(0) // We only need to work with one channel of data
	const samples = sampleCount // Number of samples we want to have in our final data set
	const blockSize = Math.floor(rawData.length / samples) // the number of samples in each subdivision
	const filteredData = []
	for (let i = 0; i < samples; i++) {
		const blockStart = blockSize * i // the location of the first sample in the block
		let sum = 0
		for (let j = 0; j < blockSize; j++) {
			sum = sum + Math.abs(rawData[blockStart + j]) // find the sum of all the samples in the block
		}
		filteredData.push(sum / blockSize) // divide the sum by the block size to get the average
	}
	return filteredData
}

function normalizeData(filteredData: any[]) {
	const multiplier = Math.max(...filteredData) ** -1
	return filteredData.map((n: number) => n * multiplier)
}
