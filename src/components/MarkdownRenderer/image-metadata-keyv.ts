import { timeEnd } from 'console'
import got from 'got'
import lqip from 'lqip-modern'
import path from 'path'
import { Node, visit } from 'unist-util-visit'
import xid from 'xid-js'

import { sha256 } from '~/lib/functions'
//import redis from '~/lib/redis'
import { db } from '~/lib/redis/redis'
import { PreviewImage } from '~/types/site'
//import { result } from '~/types/site'
//import { promisify } from 'util'

//const sizeOf = promisify(imageSize);
type ImageNode = {
  type: 'element'
  tagName: 'img'
  properties: {
    src: string
    height?: number
    width?: number
    blurDataURL?: string
    placeholder?: 'blur' | 'empty'
  }
}

function isImageNode(node: Node): node is ImageNode {
  const img = node as ImageNode
  return (
    img.type === 'element' &&
    img.tagName === 'img' &&
    img.properties &&
    typeof img.properties.src === 'string'
  )
}
/* async function cacheImage(node: ImageNode) {
  const url =
    node.properties.src ||
    path.join(process.cwd(), 'public', node.properties.src)
  const result = await db.get(url)
  if (result) {
    ;(node.properties.width = result.metadata.originalWidth),
      (node.properties.height = result.metadata.originalHeight),
      (node.properties.blurDataURL = result.metadata.dataURIBase64)
    node.properties.placeholder = 'blur'
  }
}
 */

/* function cacheImage() {
  return redis.hget(id, 'preview').then((cachedIMG) => {
    if (cachedIMG) {
      return JSON.parse(cachedIMG)
    }
  })
} */
async function addProps(node: ImageNode) {
  /*   let result: {
    metadata: {
      originalWidth: number
      originalHeight: number
      dataURIBase64: string
    }
  } */
  /*   let result: {
    metadata: {
      originalWidth: number
      originalHeight: number
      dataURIBase64: string
    }
  } */
  const url = node.properties.src
  const id = sha256(url)
  const local_img = path.join(process.cwd(), 'public', url)
  const ext_img = url.startsWith('http')
  /*   const cached_img = db.has(id).then((cachedIMG) => {
    if (cachedIMG) {
      return cached_img(db.get(id))
    }
  })
 */
  const checkCache = await db.get(id)
  /*   if (checkCache) {
    return await db.get(id)
  }
 */
  if (!checkCache && !ext_img) {
    const result = await lqip(local_img)
    /*     const previewImage = {
      originalWidth: result.metadata.originalWidth,
      originalHeight: result.metadata.originalHeight,
      dataURIBase64: result.metadata.dataURIBase64,
    } */
    await db.set(id, result)
    //console.time(id)
    //await db.get(id)
    console.log(result)
    //console.timeEnd(id)
  } else if (!checkCache && ext_img) {
    const { body } = await got(url, { responseType: 'buffer' })
    const result = await lqip(body)
    /*     const previewImage: PreviewImage = {
      originalWidth: result.metadata.originalWidth,
      originalHeight: result.metadata.originalHeight,
      dataURIBase64: result.metadata.dataURIBase64,
    } */
    // const height = result.originalHeight
    //const base64 = result.dataURIBase64.toString()

    await db.set(id, result)
    //await db.get(id)
    //console.log(result)

    if (!result) throw Error(`Invalid image with src "${id}"`)
    ;(node.properties.width = result.metadata.originalWidth || 768),
      (node.properties.height = result.metadata.originalHeight || 432),
      (node.properties.blurDataURL = result.metadata.dataURIBase64)
    node.properties.placeholder = 'blur'
  }
}

const imageMetadataKeyv = () => {
  return async function transformer(tree: Node): Promise<Node> {
    const images: ImageNode[] = []

    visit(tree, 'element', (node) => {
      if (isImageNode(node)) {
        images.push(node)
      }
    })

    for (const image of images) {
      await addProps(image)
    }

    return tree
  }
}

export default imageMetadataKeyv
