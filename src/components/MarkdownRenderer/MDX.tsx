/* eslint-disable @typescript-eslint/no-var-requires */
import { remarkCodeHike } from '@code-hike/mdx'
import { bundleMDX } from 'mdx-bundler'
//import dynamic from 'next/dynamic'
//import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePresetMinify from 'rehype-preset-minify'
//import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import linkifyRegex from 'remark-linkify-regex'

//const shiki = require('shiki')
import theme2 from '~/lib/mdx/shiki/themes/nord.json'
import theme from '~/styles/moonlight-ii.json'
//import { schema } from '.'
//const rehypePrettyCode = require('rehype-pretty-code')
//const { remarkCodeHike } = require('@code-hike/mdx')

/* shiki
  .getHighlighter({
    theme: 'nord',
  })
  .then((highlighter) => {
    const code = highlighter.getLoadedLanguages(`console.log('shiki');`, {
      lang: [],
    })
    return code
  })
 */
const root = process.cwd()

export async function mdxToCode<T>(text: string) {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  const { code } = await bundleMDX({
    source: text,
    // mdx imports can be automatically source from the components directory
    cwd: path.join(root, 'components'),
    mdxOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.

      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
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
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypePresetMinify,

        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          { behavior: 'wrap' },
          { properties: { className: ['anchor'] } },
        ],
      ]

      return options
    },
  })
  /* const source = await serialize(text, {
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
                 [rehypePrettyCode, options],
         rehypeSlug,
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
   */

  //const { compiledSource } = source

  return {
    mdx: code,
  }
}
