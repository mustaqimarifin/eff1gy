import NextImage from 'next/image'
import { ketchup } from '~/lib/functions'
import { genId } from '~/lib/nanoid'
import { PreviewImage } from '~/types/site'
import useSWR from 'swr'

export default function BlurImage({ url, alt, ...rest }) {
  const { data: previewImage } = useSWR<PreviewImage>('/api/lqip', ketchup)
  console.log(previewImage)

  return (
    <div className="drop-shadow-sm filter">
      <NextImage
        id={genId()}
        src={url}
        alt={alt}
        width={previewImage.originalWidth}
        height={previewImage.originalHeight}
        placeholder={'blur' ?? 'empty'}
        blurDataURL={previewImage.dataURIBase64}
        {...rest}
      />
    </div>
  )
}
