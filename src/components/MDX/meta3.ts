import { getPlaiceholder, type GetPlaiceholderReturn } from 'plaiceholder'
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

function isImageNode(node) {
  const img = node
  return (
    img.type === 'element' &&
    img.tagName === 'img' &&
    img.properties &&
    typeof img.properties.src === 'string'
  )
}

import fs from 'node:fs/promises'
import path from 'node:path'

/* const getImage = async (src: string) => {
  const buffer = await fs.readFile(path.join('./public', src))

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 })

  return {
    ...plaiceholder,
    img: { src, height, width },
  }
}

const getRemoteImage = async (src: string) => {
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  )

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 })

  return {
    ...plaiceholder,
    img: { src, height, width },
  }
} */

async function createPreviewImage(node) {
  /*   try {
    const cachedPreviewImage = await redis.hgetall(cacheKey)
    if (cachedPreviewImage) {
      return cachedPreviewImage
    }
  } catch (err) {
    // ignore redis errors
    console.warn(`redis error get "${cacheKey}"`, err)
  } */
  const url = node.properties.src
  console.log(url)
  //const id = sha256(url)
  const ext_img = url.startsWith('http')
  let result: GetPlaiceholderReturn
  // if (!ext_img) {
  //result = await lqip(local_img);
  //   result = await getPlaiceholder(file, { size: 10 });
  // } else {
  // const { body } = await got(result, { responseType: 'buffer' });
  /*       const body = await fetch(url).then(async (res) =>
        Buffer.from(await res.arrayBuffer()),
      ); */
  if (!ext_img) {
    const file = await fs.readFile(url)

    result = await getPlaiceholder(file, { format: ['webp'] })
  } else {
    const buffer = await fetch(url).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    )
    result = await getPlaiceholder(buffer, { format: ['webp'] })

    /*     const previewImage = {
      w: result.metadata.width,
      h: result.metadata.height,
      b: result.base64,
    } */
    if (!result) throw Error(`Invalid image with src "${url}"`)
    ;(node.properties.width = result.metadata.width || 768),
      (node.properties.height = result.metadata.height || 432),
      (node.properties.blurDataURL = result.base64),
      (node.properties.placeholder = 'blur')
    //console.log('lqip', { result, url })
  }

  /*  try {
      await redis.hsetnx(cacheKey, JSON.stringify(previewImage), 30)
      //console.log(cacheKey);
    } catch (err) {
      // ignore redis errors
      console.warn(`redis error set "${url}"`, err)
    }
    return previewImage
    */

  // console.warn('failed to create preview image', url)
  return null
}

const META3 = () => {
  return async function transformer(tree: any) {
    const images = []

    visit(tree, 'element', (node) => {
      if (isImageNode(node)) {
        //@ts-ignore
        images.push(node)
      }
    })

    for (const image of images) {
      await createPreviewImage(image)
    }

    return tree
  }
}

export default META3
