/* eslint-disable @typescript-eslint/no-var-requires */
import { serialize } from 'next-mdx-remote/serialize'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePresetMinify from 'rehype-preset-minify'
//import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import linkifyRegex from 'remark-linkify-regex'
const shiki = require('shiki')

import theme2 from '~/lib/mdx/shiki/themes/slack-ochin.json'
//import theme from '~/styles/moonlight-ii.json'
//const rehypePrettyCode = require('rehype-pretty-code')
const { remarkCodeHike } = require('@code-hike/mdx')

shiki
  .getHighlighter({
    theme: 'nord',
  })
  .then((highlighter) => {
    const code = highlighter.getLoadedLanguages(`console.log('shiki');`, {
      lang: [],
    })
    return code
  })

//const hehe = highlighter.getLoadedLanguages()

export async function mdxToCode<T>(text: string) {
  const source = await serialize(text, {
    mdxOptions: {
      useDynamicImport: true,
      remarkPlugins: [
        remarkGfm,
        linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i),
        [
          remarkCodeHike,
          {
            autoImport: false,
            theme: theme2,
            lineNumbers: true,
            showCopyButton: true,
            skipLanguages: false,
          },
        ],
      ],
      rehypePlugins: [
        rehypePresetMinify,
        /*         [rehypePrettyCode, options],
         */ rehypeSlug,
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

  //const { compiledSource } = source

  return {
    mdx: source,
  }
}
