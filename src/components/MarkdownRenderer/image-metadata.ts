import lqipModern from 'lqip-modern'
import path from 'path'
//import { Node } from 'unist'
import { Node, visit } from 'unist-util-visit'
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

async function addProps(node: ImageNode): Promise<void> {
  let result
  const isExternal = node.properties.src.startsWith('http')

  if (!isExternal) {
    //res = await sizeOf(path.join(process.cwd(), 'public', node.properties.src));
    result = await lqipModern(
      path.join(process.cwd(), 'public', node.properties.src)
    )
  } else {
    const imageRes = await fetch(node.properties.src)
    const imageBuffer = Buffer.from(await imageRes.arrayBuffer())

    result = await lqipModern(imageBuffer)
  }

  if (!result) throw Error(`Invalid image with src "${node.properties.src}"`)
  ;(node.properties.width = result.metadata.originalWidth),
    (node.properties.height = result.metadata.originalHeight),
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
