import lqip, { LqipOptions, type LqipResult } from 'lqip-modern'
import path from 'path'
import { cwd } from 'process'
import { visit } from 'unist-util-visit'

export interface PreviewImage {
  width: number
  height: number
  base64: string
}

type ImageNode = {
  type: 'element'
  tagName: 'img'
  properties: {
    src: string
    height?: number
    width?: number
    blurDataURL?: string
    placeholder?: 'blur'
  }
}

function isImageNode(node: ImageNode) {
  const img = node
  return (
    img.type === 'element' &&
    img.tagName === 'img' &&
    img.properties &&
    typeof img.properties.src === 'string'
  )
}

async function createPreviewImage(node: ImageNode) {
  /*   try {
    const cachedPreviewImage = await redis.hgetall(cacheKey)
    if (cachedPreviewImage) {
      return cachedPreviewImage
    }
  } catch (err) {
    // ignore redis errors
    console.warn(`redis error get "${cacheKey}"`, err)
  } */
  let result: LqipResult
  const url = node.properties.src
  // console.log(url)
  //const id = sha256(url)
  const ext_img = url.startsWith('http')
  const local_img = path.join(cwd(), './public', url)

  try {
    if (!ext_img) {
      result = await lqip(local_img)
    } else {
      // const { body } = await got(result, { responseType: 'buffer' });
      const body = await fetch(url).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      )
      result = await lqip(body)
    }
    const previewImage: PreviewImage = {
      width: result.metadata.originalWidth,
      height: result.metadata.originalHeight,
      base64: result.metadata.dataURIBase64,
    }

    //const pi = JSON.stringify(previewImage)
    //console.log(pi)
    //const result = await getPlaiceholder(result, { size: 10 });
    //console.log('lqip', { ...result.metadata, cacheKey });

    if (!result) throw Error(`Invalid image with src "${url}"`)
    ;(node.properties.width = previewImage.width || 768),
      (node.properties.height = previewImage.height || 432),
      (node.properties.blurDataURL = previewImage.base64),
      (node.properties.placeholder = 'blur')
    //console.log('lqip', { result, url })
    /*  try {
      await redis.hsetnx(cacheKey, JSON.stringify(previewImage), 30)
      //console.log(cacheKey);
    } catch (err) {
      // ignore redis errors
      console.warn(`redis error set "${url}"`, err)
    }

    return previewImage
    */
  } catch (err) {
    //console.warn('failed to create preview image', url, err)
    return null
  }
}

const imageMetadata = () => {
  return async function transformer(tree: any) {
    const images: ImageNode[] = []

    visit(tree, 'element', (node) => {
      if (isImageNode(node)) {
        images.push(node)
      }
    })

    for (const image of images) {
      await createPreviewImage(image)
    }

    return tree
  }
}

export default imageMetadata
