"use client"

import { useRef } from "react"

import { Detail } from "~/components/ListDetail/Detail"
import { TitleBar } from "~/components/ListDetail/TitleBar"

function SectionTitle(props) {
	return (
		<h4
			className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
			{...props}
		/>
	)
}

function SectionContent(props) {
	return <div className="col-span-10" {...props} />
}

interface TableRowProps {
	href: string
	title: string
	date: string
	subtitle?: string
}

function TableRow({ href, title, subtitle, date }: TableRowProps) {
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			href={href}
			className="group flex items-center space-x-4"
		>
			<strong className="flex-none font-medium text-gray-900 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
				{title}
			</strong>
			<span className="w-full shrink border-t border-dashed border-gray-300 dark:border-gray-800" />
			{subtitle && <span className="text-tertiary flex-none">{subtitle}</span>}
			{date && <span className="text-quaternary flex-none font-mono">{date}</span>}
		</a>
	)
}

function SectionContainer(props) {
	return <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12" {...props} />
}

/* const workHistory = [
  {
    href: 'https://github.com/mobile',
    title: 'GitHub',
    subtitle: 'Product Designer',
    date: '2018—\u00a0\u00a0',
  },
  {
    href: 'https://designdetails.fm',
    title: 'Design Details Podcast',
    subtitle: 'Co-host',
    date: '2014—\u00a0\u00a0',
  },
  {
    href: 'https://github.com/withspectrum/spectrum',
    title: 'Spectrum.chat',
    subtitle: 'Co-founder',
    date: '2017—18',
  },
  {
    href: 'https://facebook.com',
    title: 'Facebook',
    subtitle: 'Product Designer',
    date: '2015—17',
  },
  {
    href: 'https://buffer.com',
    title: 'Buffer',
    subtitle: 'Product Designer',
    date: '2013—15',
  },
]

const speakingData = [
  {
    href: 'https://maze.co/podcast/#mustaqim-arifin',
    title: 'The Optimal Path Podcast',
    date: "Jan '22",
  },
  {
    href: 'https://uibreakfast.com/228-design-advisory-with-mustaqim-arifin/',
    title: 'UI Breakfast',
    date: "Dec '21",
  },
  {
    href: 'https://designmba.show/episodes/mustaqim-arifin',
    title: 'Design MBA',
    date: "Nov '21",
  },
  {
    href: 'https://progressionapp.com/blog/podcast-26-mustaqim-arifin-github-spectrum-design-details-on-the-rise-of-the-senior-ic/',
    title: 'Progression Podcast',
    date: "Jun '21",
  },
  {
    href: 'https://layout.fm/episodes/194/',
    title: 'Layout.fm',
    date: "Jan '21",
  },
  {
    href: "https://softwareengineeringdaily.com/'20/07/15/github-mobile-with-mustaqim-arifin-and-ryan-nystrom/",
    title: 'Software Engineering Daily',
    date: "Jul '20",
  },
  {
    href: 'https://avocode.com/blog/mustaqim-arifin-product-designer-github-interview',
    title: 'The Grit',
    date: "Jul '20",
  },
  {
    href: 'https://www.swiftbysundell.com/podcast/67/',
    title: 'Swift by Sundell',
    date: "Feb '20",
  },
  {
    href: 'https://www.youtube.com/watch?v=SyS3h3kmBnY',
    title: 'Figma Config',
    date: "Feb '20",
  },
  {
    href: 'https://www.loversmagazine.com/interviews/mustaqim-arifin',
    title: 'Lovers Magazine',
    date: "Jan '18",
  },
  {
    href: 'https://www.youtube.com/watch?v=6MBBTdu8v6E',
    title: 'GraphQL Summit',
    date: "Nov '17",
  },
  {
    href: 'https://designdetails.fm/episodes/3e342ac0',
    title: 'Design Details',
    date: "Aug '17",
  },
]
 */

export default function Intro({ children }) {
	const scrollContainerRef = useRef(null)
	const titleRef = useRef(null)

	return (
		<Detail.Container data-cy="intro" ref={scrollContainerRef}>
			<TitleBar
				magicTitle
				titleRef={titleRef}
				scrollContainerRef={scrollContainerRef}
				title="Home"
			/>

			{children}
		</Detail.Container>
	)
}
