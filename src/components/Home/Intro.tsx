import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import Button from '~/components/Button'
import { Akhyla, MapIcon, Muse2 } from '~/components/Icon'
import { Detail } from '~/components/ListDetail/Detail'
import { TitleBar } from '~/components/ListDetail/TitleBar'

import TraceImage from '../Image/TraceImage'
import Buffoon from '../Vid'

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
      className="flex items-center space-x-4 group"
    >
      <strong className="flex-none font-medium text-gray-900 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
        {title}
      </strong>
      <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      {subtitle && <span className="flex-none text-tertiary">{subtitle}</span>}
      {date && (
        <span className="flex-none font-mono text-quaternary">{date}</span>
      )}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 gap-6 md:grid-cols-12"
      {...props}
    />
  )
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
export function Intro() {
  const scrollContainerRef = React.useRef(null)
  const titleRef = React.useRef(null)

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

        <Detail.ContentContainer>
          <div className="pb-24 space-y-8 md:space-y-16">
            <article className="layout p-2 w-full lg:max-w-3xl">
              <h2 className="font-serif font-medium pt-4 mb-6 text-2xl drop-shadow-sm md:text-4xl">
                Greetings! I'm the{' '}
                <span className="font-serif font-normal   text-twitter dark:text-active">
                  marketing manager&nbsp;
                </span>
                and{' '}
                <span className="font-serif font-normal  text-twitter dark:text-active">
                  creative lead&nbsp;
                </span>
                at{` `}
                <Muse2 className="h-12 inline items-center dark:invert" />,{' '}
                <span>focusing on&nbsp;</span>
                <span className="font-serif  text-coyRed">
                  large-scale events tech
                </span>
                , and&nbsp;
                <span className="font-serif  text-coyRed">
                  optimization.&nbsp;
                </span>{' '}
              </h2>

              <div className="w-[120px] float-right m-4 filter sm:w-[190px] ">
                <Buffoon />
              </div>
              <div className="drop-shadow-sm">
                <p className="prose py-4 max-w-none break-words md:prose-lg dark:prose-dark">
                  A sizable portion of my career involves my work as an&nbsp;
                  <span className=" dark:text-hacker-news text-orange-400">
                    audio engineer&nbsp;
                  </span>
                  and{' '}
                  <span className="  dark:text-hacker-news text-orange-400">
                    music producer
                  </span>
                  . In 2014, I co-founded{' '}
                  <Akhyla className="w-8 h-8 text-red-400 inline items-center mb-1" />{' '}
                  Akhyla - a platform to electronic musicians to learn,
                  collaborate and make records.And in between that time was
                  Music Director for Infinity Games working on MMORPG, Heroes of
                  War.
                </p>
                <p className="prose py-4 leading-loose md:prose-lg dark:prose-dark">
                  This website is my home on the web to share my thoughts, test
                  my web development skills, keep a record of my work, and
                  catalog the things I discover online.
                </p>
                <p className="prose py-4 leading-loose md:prose-lg dark:prose-dark">
                  Thanks for stopping by!{' '}
                </p>
                <p className="prose py-4 leading-loose md:prose-lg dark:prose-dark">
                  Mustaqim Arifin{' '}
                </p>
              </div>
            </article>
            {/* <Image
      alt="Mustaqim Arifin"
      src="/vmp-banner.webp"
      width={512}
      height={512}
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      priority
      className="rounded-full border-4 border-orange-400 dark:invert transition-colors duration-200"
    /> */}
            <SectionContainer>
              <SectionTitle />
            </SectionContainer>

            <SectionContainer>
              <SectionTitle>Where</SectionTitle>
              <SectionContent>
                <div className=" ">
                  <TraceImage
                    imgSrc="/site/home/map.jpg"
                    imgTrace="/site/home/map-trace.png"
                    width={1200}
                    height={675}
                    sizes="33vw"
                    className="overflow-hidden"
                    alt="Map of KL with a wookie in the middle"
                  />
                </div>
                <p className="flex items-center justify-end pt-2 space-x-2 text-sm text-quaternary md:text-right">
                  <MapIcon className="w-4 h-4" />
                  <span>Kuala Lumpur, WP</span>
                </p>
              </SectionContent>
            </SectionContainer>

            {/*    <SectionContainer>
                        <SectionTitle>Work</SectionTitle>
              
              {/*   <SectionContent>
      <div className="flex flex-col space-y-3">
        {workHistory.map((job) => (
          <TableRow
            href={job.href}
            title={job.title}
            subtitle={job.subtitle}
            date={job.date}
            key={job.href}
          />
        ))}
      </div>
    </SectionContent>
            </SectionContainer>

            <SectionContainer>
               <SectionTitle>Speaking</SectionTitle>
               <SectionContent>
      <div className="flex flex-col space-y-3">
        {speakingData.map((s) => (
          <TableRow
            href={s.href}
            title={s.title}
            date={s.date}
            key={s.href}
          />
        ))}
      </div>
    </SectionContent>
            </SectionContainer> */}
          </div>
        </Detail.ContentContainer>
      </Detail.Container>
    </>
  )
}
