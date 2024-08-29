"use client"
import { signIn } from "next-auth/react"

import { GhostButton } from "../Button"
import { GitHubIcon, GoogleIcon, TwitterIcon } from "../Icon"

export function SignInDialogContent() {
	return (
		<div className="p-4">
			<h1
				className="text-2xl leading-6 font-semibold dark:text-white"
				id="modal-headline"
			>
				Sign in
			</h1>
			<p className="text-sm my-2 text-gray-600 dark:text-gray-200">
				Don&apos;t worry, we&apos;ll save your comment.
			</p>
			<div>
				<div>
					<GhostButton
						href="/api/auth/signin/github"
						className="px-4 py-2 rounded shadow-sm w-full flex items-center justify-center border border-gray-300 text-gray-800 focus-ring"
						onClick={e => {
							e.preventDefault()
							signIn("github")
						}}
						aria-label="Sign in with GitHub"
					>
						<GitHubIcon className="w-5 h-5 dark:text-white " />
						<span className="ml-2 text-sm leading-none dark:text-gray-200">
							Sign in with GitHub
						</span>
					</GhostButton>
					<GhostButton
						href="/api/auth/signin/google"
						className="px-4 py-2 rounded shadow-sm w-full flex items-center justify-center border border-gray-300 text-gray-800 focus-ring"
						onClick={e => {
							e.preventDefault()
							signIn("google")
						}}
						aria-label="Sign in with Google"
					>
						<GoogleIcon className="w-5 h-5 dark:text-white" />
						<span className="ml-2 text-sm leading-none dark:text-gray-200">
							Sign in with Google
						</span>
					</GhostButton>
					<GhostButton
						href="/api/auth/signin/twitter"
						className="px-4 py-2 rounded shadow-sm w-full flex items-center justify-center border border-gray-300 text-gray-800 focus-ring"
						onClick={e => {
							e.preventDefault()
							signIn("twitter")
						}}
						aria-label="Sign in with Twitter"
					>
						<TwitterIcon className="w-5 h-5 dark:text-white" />
						<span className="ml-2 text-sm leading-none dark:text-gray-200">
							Sign in with Twitter
						</span>
					</GhostButton>
				</div>
			</div>
		</div>
	)
}
