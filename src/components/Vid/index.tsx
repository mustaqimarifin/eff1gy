import Image from 'next/image'

const Buffoon = () => {
  return (
    <>
      <div className="aspect-square overflow-hidden rounded-full drop-shadow-lg transition hover:bg-hacker-news">
        <Image
          width={300}
          height={300}
          src="/../../../static/clip/vmp-banner.webp"
          alt={''}
        ></Image>
      </div>
    </>
  )
}

export default Buffoon
