import NextImage, { ImageProps } from 'next/image'

const Image = ({ src, blurDataURL, ...rest }: ImageProps) => (
  <div className="drop-shadow-sm filter">
    <NextImage
      src={src}
      placeholder={'blur' ?? 'empty'}
      blurDataURL={blurDataURL}
      className="rounded-lg"
      {...rest}
    />
  </div>
)

export default Image
