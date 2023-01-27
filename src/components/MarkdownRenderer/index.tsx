/* eslint-disable @typescript-eslint/no-var-requires */
//import { CH } from '@code-hike/mdx/components'
//import merge from 'deepmerge'
import {
  getMDXComponent,
  getMDXExport,
  MDXContentProps,
} from 'mdx-bundler/client'
import NextImage from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import Markdown from 'react-markdown'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
//import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import linkifyRegex from 'remark-linkify-regex'
import xid from 'xid-js'

import { deepmergeArray } from '~/lib/functions'

import ConsCard from '../Stats/ConsCard'
import ProsCard from '../Stats/ProsCard'
import { CodeBlock } from './CodeBlock'

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
//const rx = Math.floor(Math.random() * (255 - 0)) + 1

/* console.log(`my dick be ${rx}`)
 */
function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')
}
const H2 = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h2 id={anchor}>
      <a href={link} className="anchor-link">
        §
      </a>
      {children}
    </h2>
  )
}
const H3 = ({ children }) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`
  return (
    <h3 id={anchor}>
      <a href={link} className="anchor-link">
        §
      </a>
      {children}
    </h3>
  )
}
const Paragraph: React.FC = (props: { children }) => {
  if (typeof props.children !== 'string' && props.children.type === 'img') {
    return <>{props.children}</>
  }

  return <p {...props} />
}
const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

function Image(props) {
  return <NextImage {...props} quality={75} className="mdx-image" />
}

const MDImage = (paragraph: { children?: any; node?: any }) => {
  const { node } = paragraph
  if (node.children[0].tagName === 'img') {
    const image = node.children[0]
    const metastring = image.properties.alt
    const alt = metastring?.replace(/ *\{[^)]*\} */g, '')
    const metaWidth = metastring.match(/{([^}]+)x/)
    const metaHeight = metastring.match(/x([^}]+)}/)
    const width = metaWidth ? metaWidth[1] : '768'
    const height = metaHeight ? metaHeight[1] : '432'
    const isPriority = metastring?.toLowerCase().match('{priority}')
    const hasCaption = metastring?.toLowerCase().includes('{caption:')
    const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

    return (
      <div className="mx-auto">
        <NextImage
          id={xid.next()}
          src={image.properties.src}
          width={width}
          height={height}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
          // blurDataURL={previewImage.dataURIBase64}
          //blurDataURL={rgbDataURL(255, 204, 153)} // Orange placeholder 👺 rgba(255, 204, 153) */
          className="object-cover"
          alt={alt}
          priority={isPriority}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        {hasCaption ? (
          <div className="caption" aria-label={caption}>
            {caption}
          </div>
        ) : null}
      </div>
    )
  }
  return <p>{paragraph.children}</p>
}

const Predator = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <CodeBlock
      language={match[1]}
      className={className}
      text={String(children).replace(/\n$/, '')}
      {...props}
    />
  ) : (
    <>{children}</>
  )
}

const Codex = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <CodeBlock
      className={className}
      text={String(children).replace(/\n$/, '')}
      language={match[1]}
      {...props}
    />
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export const MDXComponents = {
  MDImage,
  img: Image,
  a: CustomLink,
  p: Paragraph,
  ProsCard,
  h2: H2,
  h3: H3,
  ConsCard,
  pre: Predator,
  code: Codex,
}

interface Props {
  mdx: string
  [key: string]: unknown
}

export const MDSEX = ({ mdx, ...rest }: Props) => {
  /*   const mdxExport = getMDXExport(mdx)
  const MDXLayout = React.useMemo(() => mdxExport.default, [mdx])
  return <MDXLayout components={MDXComponents} {...rest} /> */

  const MDXLayout = React.useMemo(
    (): React.FunctionComponent<MDXContentProps> => getMDXComponent(mdx),
    [mdx]
  )
  return <MDXLayout components={{ ...MDXComponents }} {...rest} />
}
//const Component = React.useMemo(() => getMDXComponent(mdx), [mdx])

export const MKComponents = {
  a: CustomLink,
  h1: 'p',
  h2: 'p',
  h3: 'p',
  h4: 'p',
  h5: 'p',
  h6: 'p',
  pre({ children }) {
    return <>{children}</>
  },
  code({ children }) {
    return <>{children}</>
  },
}

/* function getComponentsForVariant(variant) {
  // Blog posts
  switch (variant) {
    case 'longform': {
      return {
        a: CustomLink,
        p: MDImage,
        pre: Predator,
        code: Codex,
      }
    }
    // Questions, comments, descriptions on bookmarks, etc.
    case 'comment': {
      return {
        a: CustomLink,
        h1: 'p',
        h2: 'p',
        h3: 'p',
        h4: 'p',
        h5: 'p',
        h6: 'p',
        pre({ children }) {
          return <>{children}</>
        },
        code: Codex,
      }
    }
  }
} */
const merge = require('@fastify/deepmerge')({ mergeArray: deepmergeArray })
export const schema = merge(defaultSchema, {
  tagNames: [...defaultSchema.tagNames, 'sup', 'sub', 'section'],
  attributes: {
    '*': ['className'],
  },
  clobberPrefix: '',
  clobber: ['name', 'id'],
})

export const MarkdownRenderer = (props: any) => {
  const { children, ...rest } = props

  //!const components = getComponentsForVariant(variant)

  return (
    <Markdown
      {...rest}
      remarkPlugins={[remarkGfm, linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)]}
      rehypePlugins={[
        [rehypeSanitize, schema],
        // rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ]}
      components={MKComponents}
    >
      {children}
    </Markdown>
  )
}
