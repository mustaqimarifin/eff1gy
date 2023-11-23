import Image from 'next/image'

const Buffoon = () => {
  return (
    <>
      <div className="aspect-square overflow-hidden rounded-full drop-shadow-lg transition hover:bg-hacker-news">
        <video autoPlay src="/../../cassette.webm"></video>
      </div>
    </>
  )
}

export default Buffoon
