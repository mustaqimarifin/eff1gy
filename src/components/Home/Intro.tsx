'use client'

import { useRef } from 'react'

import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'

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
export function Intro({ children }) {
  const scrollContainerRef = useRef(null)
  const titleRef = useRef(null)

  return (
    <>
      <Detail.Container data-cy="home-intro" ref={scrollContainerRef}>
        <TitleBar
          magicTitle
          titleRef={titleRef}
          scrollContainerRef={scrollContainerRef}
          title="Home"
        />
        {/* Keep this div to trigger the magic scroll */}
        <div className="p-4" ref={titleRef} />
        {children}
      </Detail.Container>
    </>
  )
}
