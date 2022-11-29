import deepmerge from 'deepmerge'
import NextImage from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import Markdown from 'react-markdown'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import linkifyRegex from 'remark-linkify-regex'

import { CodeBlock } from './CodeBlock'

/* function LinkRenderer({ href, ...rest }: any) {
  // auto-link headings
  if (href.startsWith('#')) {
    return <Link href={href} {...rest} />
  }

  if (href.startsWith('@')) {
    // link to a mention
    return <Link href={`/u/${href.slice(1)}`} {...rest}></Link>
  }
  try {
    const url = new URL(href)
    if (url.origin === 'https://eff1gy.vercel.app') {
      return <Link href={href} {...rest}></Link>
    }
    return <a target="_blank" rel="noopener" href={href} {...rest} />
  } catch (e) {
    console.error(e)
    return <a target="_blank" rel="noopener" href={href} {...rest} />
  }
} */

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
const rx = Math.floor(Math.random() * (255 - 0)) + 1

console.log(`my dick be ${rx}`)

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

const Image = (props) => {
  return <NextImage {...props} loading="lazy" quality={100} />
}

function getComponentsForVariant(variant) {
  // Blog posts
  switch (variant) {
    case 'longform': {
      return {
        a: CustomLink,
        p: (paragraph: { children?: boolean; node?: any }) => {
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
                <Image
                  //src={`/static/img/${image.properties.src}`}
                  src={image.properties.src}
                  width={width}
                  height={height}
                  placeholder="blur"
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
                  blurDataURL={rgbDataURL(255, 204, 153)} // Orange placeholder 👺 rgba(255, 204, 153) */
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
        },
        pre({ node, inline, className, children, ...props }) {
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
        },
        code({ node, inline, className, children, ...props }) {
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
        },
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
        code({ node, inline, className, children, ...props }) {
          const language = /language-(\w+)/.exec(className || '')?.[1]
          return !inline && language ? (
            <CodeBlock
              text={String(children).replace(/\n$/, '')}
              language={language}
              {...props}
            />
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          )
        },
      }
    }
  }
}

export function MarkdownRenderer(props: any) {
  // variant = 'longform' | 'comment'
  const { children, variant = 'longform', ...rest } = props

  const schema = deepmerge(defaultSchema, {
    tagNames: [...defaultSchema.tagNames, 'sup', 'sub', 'section'],
    attributes: {
      '*': ['className'],
    },
    clobberPrefix: '',
    clobber: ['name', 'id'],
  })

  const components = getComponentsForVariant(variant)

  return (
    <Markdown
      {...rest}
      remarkPlugins={[remarkGfm, linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)]}
      rehypePlugins={[
        [rehypeSanitize, schema],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ]}
      components={components}
    >
      {children}
    </Markdown>
  )
}
