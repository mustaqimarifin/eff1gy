import { remarkCodeHike } from '@code-hike/mdx'
import { bundleMDX } from 'mdx-bundler'
import { join } from 'path/posix'
import { cwd } from 'process'
//import rehypeAutolinkHeadings from 'rehype-autolink-headings'
//import rehypeMinify from 'rehype-preset-minify'
// import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import linkifyRegex from 'remark-linkify-regex/index.js'

import moonlight from '~/styles/nord.json'

import imageMetadata from './image-metadata'
//import { options as ShikiOptions } from './Shiki'

export async function mdxToCode(text: string) {
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(
      cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  const { code } = await bundleMDX({
    source: text,
    // mdx imports can be automatically source from the components directory
    cwd: join(cwd(), 'components'),
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
            lineNumbers: false,
            showCopyButton: true,
            theme: moonlight,
          },
        ],
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        //rehypeMinify,
        //[rehypePrettyCode],
        imageMetadata,
        rehypeSlug,
        /* [
          rehypeAutolinkHeadings,
          { behavior: 'wrap' },
          { properties: { className: ['anchor'] } },
        ], */
      ]

      return options
    },
    esbuildOptions: (options) => {
      options.minify = true
      options.treeShaking = true
      options.bundle = true
      options.platform = 'neutral'
      options.packages = 'external'
      options.charset = 'utf8'
      options.jsx = 'preserve'
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
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
