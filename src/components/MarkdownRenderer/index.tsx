import * as React from "react"
import NextImage from "next/legacy/image"
import Link from "next/link"
import { CH } from "@code-hike/mdx/components"
import deepmerge from "deepmerge"
import { getMDXComponent, type MDXContentProps } from "mdx-bundler/client"
import Markdown from "react-markdown"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSanitize, { defaultSchema } from "rehype-sanitize"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import linkifyRegex from "remark-linkify-regex"

import { CodeBlock } from "./CodeBlock"

function LinkRenderer({ href, ...rest }: any) {
  // auto-link headings
  if (href.startsWith("#")) {
    return <a href={href} {...rest} />
  }

  if (href.startsWith("@")) {
    // link to a mention
    return <Link href={`/u/${href.slice(1)}`} {...rest} />
  }
  try {
    const url = new URL(href)
    if (url.origin === "https://eff1gy.vercel.app") {
      return <Link href={href} {...rest} />
    }
    return <a target="_blank" rel="noopener" href={href} {...rest} />
  } catch (e) {
    console.error(e)
    return <a target="_blank" rel="noopener" href={href} {...rest} />
  }
}

function ProsCard({ title, pros }) {
  return (
    <div className="my-4 w-full rounded-xl border border-emerald-200 bg-neutral-50 p-6 dark:border-emerald-900 dark:bg-neutral-900">
      <span>{`You might use ${title} if...`}</span>
      <div className="mt-4">
        {pros.map((pro) => (
          <div key={pro} className="mb-2 flex items-baseline font-medium">
            <div className="mr-2 h-4 w-4">
              <svg className="h-4 w-4 text-emerald-500" viewBox="0 0 24 24">
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <path d="M22 4L12 14.01l-3-3" />
                </g>
              </svg>
            </div>
            <span>{pro}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ConsCard({ title, cons }) {
  return (
    <div className="my-6 w-full rounded-xl border border-red-200 bg-neutral-50 p-6 dark:border-red-900 dark:bg-neutral-900">
      <span>{`You might not use ${title} if...`}</span>
      <div className="mt-4">
        {cons.map((con) => (
          <div key={con} className="mb-2 flex items-baseline font-medium">
            <div className="mr-2 h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-red-500"
              >
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </div>
            <span>{con}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function getComponentsForVariant(variant) {
  // Blog posts
  switch (variant) {
    case "longform": {
      return {
        a: LinkRenderer,
        img: Image,
        Callout,
        pre({ node, inline, className, children, ...props }) {
          const language = /language-(\w+)/.exec(className || "")?.[1]
          return !inline && language ? (
            <CodeBlock
              text={String(children).replace(/\n$/, "")}
              language={language}
              {...props}
            />
          ) : (
            <>{children}</>
          )
        },
        code({ node, inline, className, children, ...props }) {
          const language = /language-(\w+)/.exec(className || "")?.[1]
          return !inline && language ? (
            <CodeBlock
              text={String(children).replace(/\n$/, "")}
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
    // Questions, comments, descriptions on bookmarks, etc.
    case "comment": {
      return {
        a: LinkRenderer,
        h1: "p",
        h2: "p",
        h3: "p",
        h4: "p",
        h5: "p",
        h6: "p",
        pre({ children }) {
          return <>{children}</>
        },
        code({ node, inline, className, children, ...props }) {
          const language = /language-(\w+)/.exec(className || "")?.[1]
          return !inline && language ? (
            <CodeBlock
              text={String(children).replace(/\n$/, "")}
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
function Image(props) {
  return <NextImage {...props} quality={75} className="mdx-image rounded-md" />
}

const keyStr =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="

const triplet = (e1: number, e2: number, e3: number) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r: number, g: number, b: number) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

const MDImage = (paragraph: { children?: any; node?: any }) => {
  const { node } = paragraph
  if (node.children[0].tagName === "img") {
    const image = node.children[0]
    const metastring = image.properties.alt
    const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
    const metaWidth = metastring.match(/{([^}]+)x/)
    const metaHeight = metastring.match(/x([^}]+)}/)
    const width = metaWidth ? metaWidth[1] : "768"
    const height = metaHeight ? metaHeight[1] : "432"
    const isPriority = metastring?.toLowerCase().match("{priority}")
    const hasCaption = metastring?.toLowerCase().includes("{caption:")
    const caption = metastring?.match(/{caption: (.*?)}/)?.pop()

    return (
      <div className="mx-auto">
        <NextImage
          src={image.properties.src}
          width={width}
          height={height}
          placeholder="blur"
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw"
          // blurDataURL={previewImage.dataURIBase64}
          blurDataURL={rgbDataURL(255, 204, 153)} // Orange placeholder 👺 rgba(255, 204, 153) */
          className="object-cover"
          alt={alt}
          priority={isPriority}
          style={{
            maxWidth: "100%",
            height: "auto",
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

const CustomLink = (props) => {
  const href = props.href
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"))

  if (isInternalLink) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function Callout(props) {
  return (
    <div className="mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  )
}
export const MDXComponents = {
  img: Image,
  a: CustomLink,
  CH,
  Callout,
  ProsCard,
  ConsCard,
}

interface Props {
  mdx: string
  [key: string]: unknown
}

export const MDSEX = ({ mdx, ...rest }: Props) => {
  const MDXLayout = React.useMemo(
    (): React.FunctionComponent<MDXContentProps> => getMDXComponent(mdx),
    [mdx]
  )
  return <MDXLayout components={{ ...MDXComponents }} {...rest} />
}
export function MarkdownRenderer(props: any) {
  // variant = 'longform' | 'comment'
  const { children, variant = "longform", ...rest } = props

  const schema = deepmerge(defaultSchema, {
    //@ts-ignore
    tagNames: [...defaultSchema?.tagNames, "sup", "sub", "section"],
    attributes: {
      "*": ["className"],
    },
    clobberPrefix: "",
    clobber: ["name", "id"],
  })

  const components = getComponentsForVariant(variant)

  return (
    <Markdown
      {...rest}
      remarkPlugins={[remarkGfm, linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)]}
      rehypePlugins={[
        [rehypeSanitize, schema],
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ]}
      components={components}
    >
      {children}
    </Markdown>
  )
}
