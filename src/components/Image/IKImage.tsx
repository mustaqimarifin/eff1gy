import Image from 'next/image'

const imageKitLoader = ({ src, width, quality }) => {
  if (src[0] === '/') src = src.slice(1)
  const params = [`w-${width}`]
  if (quality) {
    params.push(`q-${quality}`)
  }
  const paramsString = params.join(',')
  let urlEndpoint = 'https://ik.imagekit.io/mstqmarfn'
  if (urlEndpoint[urlEndpoint.length - 1] === '/')
    urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1)
  return `${urlEndpoint}/${src}?tr=${paramsString}`
}

const IKImage = (props) => {
  return (
    <Image
      loader={imageKitLoader}
      src={props.src}
      alt="Sample image"
      width={400}
      height={400}
      className="object-cover"
    />
  )
}

export default IKImage
