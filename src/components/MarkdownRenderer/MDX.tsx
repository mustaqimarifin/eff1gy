import dynamic from 'next/dynamic'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSanitize from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import linkifyRegex from 'remark-linkify-regex'

import { schema } from '.'

/* const rehypePrettyCode = dynamic(
  () => {
    return import('rehype-pretty-code')
  },
  { ssr: false }
)
 */
const options = {
  //theme: JSON.parse(fs.readFileSync('./lib/moonlight-ii.json', 'utf-8')),
  theme: 'slack-ochin',
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  // Feel free to add classNames that suit your docs
  onVisitHighlightedLine(node) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ['word']
  },
}
export async function mdxToCode<T>(text: string) {
  const source = await serialize(text, {
    mdxOptions: {
      remarkPlugins: [remarkGfm, linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i)],
      rehypePlugins: [
        rehypeSlug,
        [rehypePrettyCode, options],
        [rehypeSanitize, schema],
        [
          rehypeAutolinkHeadings,
          { behavior: 'wrap' },
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
  })

  const { compiledSource } = source

  return {
    source: { compiledSource },
  }
}
