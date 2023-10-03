import Image from 'next/image'

import buff from '../static/clip/vmp-banner.webp'

const Buffoon = () => {
  return (
    <>
      <div className="aspect-square overflow-hidden rounded-full drop-shadow-lg transition  hover:bg-hacker-news">
        <Image width={300} height={300} src={buff} alt={''}></Image>
      </div>
    </>
  )
}

export default Buffoon
