const HeroImage = () => {
  return (
    <div className="">
      <video
        autoPlay
        loop
        muted
        width={250}
        height={250}
        src="../../../videos/xyz2.webm"
        className="rounded-full border-2 border-gray-700 dark:border-gray-200"
      ></video>
    </div>
  )
}

export default HeroImage
