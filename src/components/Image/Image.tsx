import NextImage from 'next/image'
import useSWR from 'swr'
import xid from 'xid-js'

import { ketchup } from '~/lib/functions'
import { PreviewImage } from '~/types/site'

export default function BlurImage({ url, alt, ...rest }) {
  const { data: previewImage } = useSWR<PreviewImage>('/api/lqip', ketchup)
  console.log(previewImage)

  return (
    <div className="drop-shadow-sm filter">
      <NextImage
        id={xid.next()}
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
