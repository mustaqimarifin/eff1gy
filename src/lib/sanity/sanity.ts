import imageUrlBuilder from '@sanity/image-url'
import { type SanityImageSource } from '@sanity/image-url/lib/types/types'

import { sanityConfig } from './config'

export const imageBuilder = imageUrlBuilder(sanityConfig)

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format').fit('max')
