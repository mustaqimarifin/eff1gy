import Image from 'next/image'
import { signIn } from 'next-auth/react'
import * as React from 'react'

import { GithubButton, GoogleButton, TwitterButton } from '~/components/Button'

export function SignInDialogContent() {
  return (
    <div
      data-cy="sign-in-dialog"
      className="flex flex-col items-center space-y-6 p-8 md:p-6 z-40"
    >
      <div className="text-primary grid w-full gap-4 grid-cols-2">
        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-700 dark:bg-opacity-70">
          <div className="flex container justify-center">
            <Image src="/ama2.svg" width={200} height={100} alt="ama" />
          </div>
          {/*           <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
            <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
          </svg> */}
          <div className="text-primary text-sm font-semibold">
            Ask me anything
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-700 dark:bg-opacity-70">
          <div className="flex container justify-center">
            <Image src="/shiro.svg" width={200} height={100} alt="ama" />
          </div>
          {/*           <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg> */}
          <div className="text-primary text-sm font-semibold">
            Comment on posts
          </div>
        </div>

        <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-700 dark:bg-opacity-70">
          <div className="flex container justify-center w-25 ">
            <Image src="/sailor2.webp" width={300} height={200} alt="ama" />
          </div>
          {/* <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg> */}
          <div className="text-primary text-sm font-semibold">
            Like and save links
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4 dark:bg-gray-700 dark:bg-opacity-70">
          <svg
            className="h-6 w-6 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <div className="text-primary text-sm font-semibold">More soon...</div>
        </div>
      </div>

      <div className="flex items-stretch justify-items-stretch self-stretch gap-4">
        <a className="flex w-full" href="/api/auth/signin/google">
          <TwitterButton
            onClick={(e) => {
              e.preventDefault()
              signIn('twitter')
            }}
            style={{ flex: '1' }}
            size="large"
          >
            <svg
              viewBox="0 0 16 14"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              fill="currentColor"
            >
              <path d="M14.3617 3.35401C14.3687 3.49999 14.3713 3.64777 14.3713 3.79376C14.3713 8.29039 11.0696 13.4737 5.03217 13.4737C3.17739 13.4737 1.45304 12.9105 0 11.9445C0.859457 12.0522 1.73097 11.9833 2.56473 11.7418C3.39849 11.5003 4.17814 11.0908 4.85913 10.5369C4.17428 10.5235 3.51059 10.2886 2.96085 9.86516C2.41112 9.44169 2.00282 8.85078 1.79304 8.17505C2.28527 8.27044 2.79186 8.25042 3.27565 8.11647C2.53271 7.96035 1.8647 7.54285 1.38482 6.9347C0.904951 6.32655 0.642734 5.56518 0.642609 4.77959V4.73724C1.09843 5.00001 1.60823 5.14614 2.12957 5.16347C1.4338 4.6828 0.941284 3.94507 0.752536 3.10088C0.563788 2.25669 0.693041 1.36968 1.11391 0.620882C1.93808 1.67201 2.96639 2.53173 4.13207 3.14418C5.29774 3.75663 6.5747 4.10813 7.88 4.17584C7.82353 3.92137 7.79523 3.66107 7.79565 3.39996C7.79565 2.9534 7.88054 2.51121 8.04548 2.09865C8.21041 1.68609 8.45215 1.31124 8.7569 0.995511C9.06165 0.679784 9.42344 0.429363 9.82159 0.258552C10.2197 0.0877414 10.6465 -0.00011384 11.0774 4.51813e-06C11.5265 -0.000754465 11.9709 0.0941183 12.3832 0.278738C12.7954 0.463357 13.1667 0.733786 13.4739 1.07325C14.2088 0.922489 14.9136 0.643368 15.5583 0.247815C15.3131 1.03559 14.8001 1.70424 14.1148 2.12937C14.7654 2.04944 15.4009 1.86901 16 1.5941C15.5599 2.27755 15.005 2.87363 14.3617 3.35401V3.35401Z" />
            </svg>
            <span className="text-xs">LOG IN</span>
          </TwitterButton>
        </a>

        <a className="flex w-full" href="/api/auth/signin/google">
          <GoogleButton
            onClick={(e) => {
              e.preventDefault()
              signIn('google')
            }}
            s
            style={{ flex: '1' }}
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
            </svg>
            <span className="text-xs">LOG IN</span>
          </GoogleButton>
        </a>
        {/*         <a className="flex w-full" href="/api/auth/signin/github">
          <GithubButton
            onClick={(e) => {
              e.preventDefault()
              signIn('github')
            }}
            style={{ flex: '1' }}
            size="large"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              width="16"
              height="16"
              fill="currentColor"
            >
              <path d="M48 4.51C23.37 4.51 3.41 24.47 3.41 49.1c0 19.73 12.76 36.39 30.49 42.3 2.23.39 3.07-.95 3.07-2.12 0-1.06-.06-4.57-.06-8.3-11.2 2.06-14.1-2.73-14.99-5.24-.5-1.28-2.68-5.24-4.57-6.3-1.56-.84-3.79-2.9-.06-2.95 3.51-.06 6.02 3.23 6.86 4.57 4.01 6.74 10.42 4.85 12.99 3.68.39-2.9 1.56-4.85 2.84-5.96-9.92-1.11-20.29-4.96-20.29-22.01 0-4.85 1.73-8.86 4.57-11.98-.45-1.11-2.01-5.68.45-11.82 0 0 3.73-1.17 12.26 4.57 3.57-1 7.36-1.5 11.15-1.5s7.58.5 11.15 1.5c8.53-5.8 12.26-4.57 12.26-4.57 2.45 6.13.89 10.7.45 11.82 2.84 3.12 4.57 7.08 4.57 11.98 0 17.11-10.42 20.9-20.34 22.01 1.62 1.39 3.01 4.07 3.01 8.25 0 5.96-.06 10.76-.06 12.26 0 1.17.84 2.56 3.07 2.12C79.84 85.5 92.6 68.78 92.6 49.11c0-24.63-19.95-44.59-44.59-44.59Z" />
            </svg>
            <span>Sign in with Github</span>
          </GithubButton>
        </a> */}
      </div>
      <div className="text-quaternary text-left text-xs">
        Delete your account any time! I will only request access to your public
        profile information. You won’t be subscribed to anything.
      </div>
    </div>
  )
}
