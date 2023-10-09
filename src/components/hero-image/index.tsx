import Image from 'next/image'

const HeroImage = () => {
  return (
    <div className="">
      <Image
        width={250}
        height={250}
        src="/../../../static/clip/vmp-banner.webp"
        className="rounded-full border-2 border-gray-700 dark:border-gray-200"
        alt={''}
      ></Image>
    </div>
  )
}

export default HeroImage
