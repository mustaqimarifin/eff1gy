import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, blurDataURL, alt, ...rest }: ImageProps) => (
  <div className="drop-shadow-sm filter">
    <NextImage
      src={`/static/img/${src}`}
      alt={alt}
      placeholder={'blur' ?? 'empty'}
      blurDataURL={blurDataURL}
      className="rounded-lg"
      {...rest}
    />
  </div>
)

export default Image
