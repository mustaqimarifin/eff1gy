import { Globe } from "~/components/Home/Globe"
import Intro from "~/components/Home/Intro"
import { Akhyla, Muse2 } from "~/components/Icon"

export const dynamic = "force-static"

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

const workHistory = [
	{
		href: "https://github.com/mobile",
		title: "GitHub",
		subtitle: "Product Designer",
		date: "2018—\u00A0\u00A0",
	},
	{
		href: "https://designdetails.fm",
		title: "Design Details Podcast",
		subtitle: "Co-host",
		date: "2014—\u00A0\u00A0",
	},
	{
		href: "https://github.com/withspectrum/spectrum",
		title: "Spectrum.chat",
		subtitle: "Co-founder",
		date: "2017—18",
	},
	{
		href: "https://facebook.com",
		title: "Facebook",
		subtitle: "Product Designer",
		date: "2015—17",
	},
	{
		href: "https://buffer.com",
		title: "Buffer",
		subtitle: "Product Designer",
		date: "2013—15",
	},
]
/*
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

export default function Home() {
	return (
		<Intro>
			<div className="my-8 mx-8 flex flex-col md:justify-items-center md:flex-row md:items-center">
				<Globe />
				<SectionTitle />
				<SectionContainer>
					<SectionContent>
						<div className="space-y-8 pb-24 md:space-y-16">
							<div className=" mx-auto w-full p-2 lg:max-w-3xl">
								<h2 className="text-left mb-6 pt-4 font-imp text-gray-900 dark:text-gray-100 text-2xl font-medium drop-shadow-sm md:text-3xl">
									Greetings! I'm a{" "}
									<span className="dark:text-active text-blue-400">
										regional marketing manager&nbsp;
									</span>
									at
									{` `}
									<Muse2 className="lg:-ml-2 inline h-12 items-center dark:invert" />
									<span>where we focus on&nbsp;</span>
									<span className="text-coyRed">
										large-scale sport & lifestyle events
									</span>
								</h2>
								<div className="drop-shadow-sm">
									<p className="dark:prose-invert prose max-w-none  py-4 md:prose-lg text-wrap">
										In 2014, I founded{" "}
										<Akhyla className="mb-1 inline h-7 w-7 items-center text-red-400" />{" "}
										Akhyla - which was merely my own indie label for my own music but
										ended up becoming a platform to electronic musicians to learn,
										collaborate and make records. And in between that time I served as
										<span className="dark:text-active font-serif font-normal text-orange-400 hover:text-sky-400">
											{" "}
											&nbsp;Principal Foley Artist
										</span>
										&nbsp;for Infinity Games. More to come as I finally catalog my life
										and adventures as a "forever-noob" web developer too.
									</p>

									<p className="dark:prose-invert prose py-4 leading-loose md:prose-lg">
										Thanks for stopping by!{" "}
									</p>
									<p className="dark:prose-invert prose py-4 leading-loose md:prose-lg">
										Mustaqim Arifin{" "}
									</p>
								</div>

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
className="transition-colors duration-200 border-4 border-orange-400 rounded-full dark:invert"
/> */}
							</div>

							{/*

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
					</SectionContent>
				</SectionContainer>
				{/*         <SectionContainer>
      <SectionTitle>Work</SectionTitle>
      <SectionContent>
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
    </SectionContainer> */}
			</div>
		</Intro>
	)
}
