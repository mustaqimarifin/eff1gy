import NextImage from "next/image"
import Link from "next/link"
import React from "react"

import { Code } from "bright"
import type { MDXComponents } from "mdx/types"
import IKImage from "../Image/IKImage"
import { Embed } from "./Embed"
import { Tweet } from "./gfy"

import { CLIENT_URL } from "~/graphql/constants"
import { createHeading } from "./CreateHeading"
// import dynamic from "next/dynamic";

Code.theme = "one-dark-pro"

export function CustomLink(props) {
	const { children, href } = props

	if (href.startsWith("/")) {
		return (
			<Link href={href} {...props}>
				{children}
			</Link>
		)
	}

	if (href.startsWith("#")) {
		return <Link {...props} />
	}

	if (href.startsWith("@")) {
		return (
			<Link href={`/u/${href.slice(1)}`} {...props}>
				{children}
			</Link>
		)
	}
	try {
		const url = new URL(href)
		if (url.origin === CLIENT_URL) {
			return (
				<Link href={href} {...props}>
					{children}
				</Link>
			)
		}
		return <a target="_blank" rel="noopener" href={href} {...props} />
	} catch (e) {
		console.error(e)
		return <a target="_blank" rel="noopener" href={href} {...props} />
	}
}

/* function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
 */
function ProsCard({ title, pros }) {
	return (
		<div className="my-4 w-full rounded-xl border border-emerald-200 bg-neutral-50 p-6 dark:border-emerald-900 dark:bg-neutral-900">
			<span>{`You might use ${title} if...`}</span>
			<div className="mt-4">
				{pros.map(pro => (
					<div key={pro} className="mb-2 flex items-baseline font-medium">
						<div className="mr-2 h-4 w-4">
							<svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
								<g
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								>
									<path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
									<path d="M22 4L12 14.01l-3-3" />
								</g>
							</svg>
						</div>
						<span>{pro}</span>
					</div>
				))}
			</div>
		</div>
	)
}

function ConsCard({ title, cons }) {
	return (
		<div className="my-6 w-full rounded-xl border border-red-200 bg-neutral-50 p-6 dark:border-red-900 dark:bg-neutral-900">
			<span>{`You might not use ${title} if...`}</span>
			<div className="mt-4">
				{cons.map(con => (
					<div key={con} className="mb-2 flex items-baseline font-medium">
						<div className="mr-2 h-4 w-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								className="h-4 w-4 text-red-500"
							>
								<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
							</svg>
						</div>
						<span>{con}</span>
					</div>
				))}
			</div>
		</div>
	)
}

function Image({ src, ...rest }) {
	return (
		<div className="flex my-4 max-w-3xl content-center justify-center overflow-hidden">
			<NextImage
				{...rest}
				src={`https://ik.imagekit.io/mstqmarfn/${src}`}
				width={980}
				height={980}
				quality={75}
				className="rounded-md"
				alt=""
				// sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
			/>
		</div>
	)
}

function Callout(props) {
	return (
		<div className="mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
			<div className="mr-4 flex w-4 items-center">{props.emoji}</div>
			<div className="callout w-full">{props.children}</div>
		</div>
	)
}

/* const Paragraph = (props) => {
	if (typeof props.children !== "string" && props.children.type === "p") {
		return <>{props.children}</>;
	}

	return <p {...props} />;
};
 */
function Bust(props) {
	return (
		<strong className="font-quad text-orange-500 text-2xl italic ">
			{props.children}
		</strong>
	)
}

function Table({ data }) {
	const headers = data.headers.map((header, index) => <th key={index}>{header}</th>)
	const rows = data.rows.map((row, index) => (
		<tr key={index}>
			{row.map((cell, cellIndex) => (
				<td key={cellIndex}>{cell}</td>
			))}
		</tr>
	))

	return (
		<table>
			<thead>
				<tr>{headers}</tr>
			</thead>
			<tbody>{rows}</tbody>
		</table>
	)
}

/* const IKImage = dynamic(() => import("src/components/Image/IKImage"), {
  ssr: false,
});

 */
export const MLKComponents = {
	a: CustomLink,
	h1: createHeading(1),
	h2: createHeading(2),
	h3: createHeading(3),
	h4: createHeading(4),
	h5: createHeading(5),
	h6: createHeading(6),
	Bust,
	IKImage,
	img: Image,
	Callout,
	ProsCard,
	ConsCard,
	Embed,
	pre: Code,
	Tweet,
	Table,
} as MDXComponents
