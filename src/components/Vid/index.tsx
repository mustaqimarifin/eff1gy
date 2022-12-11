import Image from 'next/image'

const Buffoon = () => {
  return (
    <>
      <div className="rounded-full drop-shadow-lg overflow-hidden aspect-square transition  hover:bg-hacker-news">
        <Image
          width={300}
          height={300}
          src="/static/img/vmp-banner.webp"
          alt={''}
        ></Image>
      </div>
    </>
  )
}

export default Buffoon
