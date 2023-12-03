import lqip, { type LqipResult } from 'lqip-modern'
import path from 'path'
import { cwd } from 'process'
import { visit } from 'unist-util-visit'

export type PreviewImage = {
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
  let result: LqipResult
  const url = node.properties.src
  const ext_img = url.startsWith('http')
  const local_img = path.join(cwd(), './public', url)

  try {
    if (!ext_img) {
      result = await lqip(local_img)
    } else {
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

    if (!result) throw Error(`Invalid image with src "${url}"`)
    ;(node.properties.width = previewImage.width ?? 768),
      (node.properties.height = previewImage.height ?? 432),
      (node.properties.blurDataURL = previewImage.base64),
      (node.properties.placeholder = 'blur')
  } catch (err) {
    // ignore redis errors
    console.warn(`redis error set "${url}"`, err)
  }

  //console.warn('failed to create preview image', url, err)
  return null
}

const meta2 = () => {
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

export default meta2
