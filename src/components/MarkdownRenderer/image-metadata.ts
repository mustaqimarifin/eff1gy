import { join } from 'path'
import { cwd } from 'process'
import lqip from 'lqip-modern'
import { visit } from 'unist-util-visit'

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

//type Result = string | number | Buffer

function isImageNode(node: Node) {
  const img = node as unknown as ImageNode
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
  //const id = sha256(url)
  const local_img = join(cwd(), 'public', url)
  const ext_img = url.startsWith('http')

  /*   if (!ext_img) {
    result = await lqip(local_img)
  } else {
    const { body } = await got(url, { responseType: 'buffer' })
    result = await lqip(body)
  } */
  if (!ext_img) {
    result = await lqip(local_img)
  }
  if (ext_img) {
    // const { body } = await got(url, { responseType: 'buffer' })
    const body = await fetch(url).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    )
    result = await lqip(body)
  }
  if (!result) throw Error(`Invalid image with src "${url}"`)
  ;(node.properties.width = result.metadata.originalWidth || 768),
    (node.properties.height = result.metadata.originalHeight || 432),
    (node.properties.blurDataURL = result.metadata.dataURIBase64),
    (node.properties.placeholder = 'blur')
}

const imageMetadata = () => {
  return async function transformer(tree) {
    const images = []

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
