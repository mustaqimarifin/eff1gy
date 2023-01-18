import got from 'got'
import lqip from 'lqip-modern'
import path from 'path'
//import { Node } from 'unist'
import { Node, visit } from 'unist-util-visit'

import { sha256 } from '~/lib/functions'
//import redis from '~/lib/redis'
//import { db } from '~/lib/redis/redis'
//import { PreviewImage } from '~/types/site'
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

type Result = string | number | Buffer

function isImageNode(node: Node): node is ImageNode {
  const img = node as ImageNode
  return (
    img.type === 'element' &&
    img.tagName === 'img' &&
    img.properties &&
    typeof img.properties.src === 'string'
  )
}

async function addProps(node: ImageNode): Promise<void> {
  let result: {
    metadata: {
      originalWidth: number
      originalHeight: number
      dataURIBase64: string
    }
  }
  const url = node.properties.src
  const id = sha256(url)
  const local_img = path.join(process.cwd(), 'public', url)
  const ext_img = url.startsWith('http')

  if (!ext_img) {
    result = await lqip(local_img)
  } else {
    const { body } = await got(url, { responseType: 'buffer' })
    result = await lqip(body)
  }

  if (!result) throw Error(`Invalid image with src "${url}"`)
  ;(node.properties.width = result.metadata.originalWidth || 768),
    (node.properties.height = result.metadata.originalHeight || 432),
    (node.properties.blurDataURL = result.metadata.dataURIBase64)
  node.properties.placeholder = 'blur'
}

const imageMetadata = () => {
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

export default imageMetadata
