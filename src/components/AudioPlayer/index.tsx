import { useCallback, useEffect, useRef, useState } from "react"

import HiddenAudioPlayer from "./HiddenAudioPlayer"
import PlayPauseButton from "./PlayPauseButton"
import ProgressOverlay from "./ProgressOverlay"
import Waveform from "./Waveform"

interface Props {
	src: string
	setWaveformData?: any
	waveform: any
	id: string | null
	isRecorder: boolean
}

export default function AudioPlayer({
	src,
	setWaveformData,
	waveform,
	id,
	isRecorder = false,
}: Props) {
	const [isPlaying, setIsPlaying] = useState(false)
	const audioRef = useRef<HTMLAudioElement>(null)
	const scrubbableRef = useRef(null)
	const progressOverlayRef = useRef(null)
	const [hasPlayedOnce, setHasPlayedOnce] = useState(false)
	// TODO: Add mutation to increment play count

	useEffect(() => {
		// Ensure that new audio is loaded if the url changes after saving new recording
		if (isRecorder != null) {
			audioRef.current.load()
		}

		resetProgressOverlay()

		audioRef.current.addEventListener("play", onAudioElementPlay)
		audioRef.current.addEventListener("pause", onAudioElementPause)
		audioRef.current.addEventListener("ended", onAudioElementEnded)

		return function cleanupListeners() {
			audioRef?.current?.removeEventListener("play", onAudioElementPlay)
			audioRef?.current?.removeEventListener("pause", onAudioElementPause)
			audioRef?.current?.removeEventListener("ended", onAudioElementEnded)
		}
	}, [isRecorder])

	const pause = useCallback(() => {
		const player = audioRef.current

		player.pause()
		const progress = player.currentTime / player.duration
		setProgressOverlayScale(progress)
		setIsPlaying(false)
	}, [])

	async function play() {
		const player = audioRef.current
		player.play()

		if (!hasPlayedOnce && id) {
			// incrementPlayCount({ variables: { id } })
			setHasPlayedOnce(true)
		}

		// bug where browser thinks duration is infiniy, wait for it to update
		while (player.duration === Number.POSITIVE_INFINITY) {
			await new Promise(r => setTimeout(r, 10))
		}

		const remainingTime = player.duration - player.currentTime

		setProgressOverlayRemainingDuration(remainingTime)
		setProgressOverlayScale(1)
		setIsPlaying(true)
	}

	function onAudioElementEnded() {
		audioRef.current.currentTime = 0
		resetProgressOverlay()
		setIsPlaying(false)
	}

	function onAudioElementPlay() {
		setIsPlaying(true)
	}

	function onAudioElementPause() {
		const progress = audioRef.current.currentTime / audioRef.current.duration
		setProgressOverlayScale(progress)
		setIsPlaying(false)
	}

	function togglePlay() {
		// pause all other audio players
		const audios = document.querySelectorAll("audio")
		for (const audio of audios) {
			audio.pause()
		}
		// audios.forEach((audio) => audio.pause());

		// pause or play this audio player
		isPlaying ? pause() : play()
	}

	function scrub(e) {
		const bounds = scrubbableRef.current.getBoundingClientRect()
		const start = bounds.left
		const end = bounds.right
		const width = end - start
		const point = e.pageX
		const offset = point - start
		const percentage = offset / width
		const player = audioRef.current

		if (player.duration === Number.POSITIVE_INFINITY) {
			// When we can't scrub for some weird reason, just play the audio
			player.play()
			setIsPlaying(true)
			return
		}
		player.currentTime = percentage * player.duration
		resetProgressOverlay()

		const progress = player.currentTime / player.duration
		setProgressOverlayScale(progress)

		player.play()
		setIsPlaying(true)

		setTimeout(() => {
			const remainingTime = player.duration - player.currentTime
			setProgressOverlayRemainingDuration(remainingTime)
			setProgressOverlayScale(1)
		}, 1)
	}

	function resetProgressOverlay() {
		progressOverlayRef.current.style.transitionProperty = "transform"
		progressOverlayRef.current.style.transitionDuration = "0s"
		progressOverlayRef.current.style.transitionTimingFunction = "linear"
		setProgressOverlayScale(0)
	}

	function setProgressOverlayRemainingDuration(duration: number) {
		progressOverlayRef.current.style.transitionDuration = `${duration}s`
	}

	function setProgressOverlayScale(num: number) {
		progressOverlayRef.current.style.transform = `scaleX(${num})`
	}

	return (
		<div className="flex flex-wrap">
			<HiddenAudioPlayer preload={isRecorder} ref={audioRef} src={src} />
			<div className="flex  items-center space-x-4 overflow-hidden rounded-md border bg-white p-2 pr-6 text-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white">
				<PlayPauseButton isPlaying={isPlaying} onClick={togglePlay} />
				<div
					ref={scrubbableRef}
					onClick={scrub}
					className="relative flex w-full items-center space-x-1"
				>
					<ProgressOverlay ref={progressOverlayRef} />
					<Waveform
						isRecorder={isRecorder}
						src={src}
						waveform={waveform}
						setWaveformData={setWaveformData}
					/>
				</div>
			</div>
		</div>
	)
}
