import { CCPage, SectionContent } from '~/components/CC/Index'
import { Carousel } from '~/components/Image/image-carousel'
import { DickPics } from '~/components/Image/Pics'
import { Embed } from '~/components/MDX/Embed'
import Marquee from '~/components/MDX/Marquee'
import { summaries } from '~/data/events'

export default async function CC() {
  return (
    <CCPage>
      <SectionContent>
        {summaries.map((p) => (
          <Carousel key={p?.slug} aspectRatio="32/9" items={p.gallery} />
        ))}
      </SectionContent>
    </CCPage>
  )
}

{
  /* <Carousel key={p?.slug} aspectRatio="32/9" items={p.gallery} /> */
}
