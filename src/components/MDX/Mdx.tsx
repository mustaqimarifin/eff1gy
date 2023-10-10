import { join } from 'path'
import { cwd } from 'process'
import { bundleMDX } from 'mdx-bundler'
import readingTime from 'reading-time'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'
import linkifyRegex from 'remark-linkify-regex'

//import moonlight from '~/styles/nord.json'
import imageMetadata from './image-metadata'

const root = process.cwd()

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
    //cwd: join(root, 'components'),
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i),
        /*         [
          remarkCodeHike,
          {
            autoImport: false,
            lineNumbers: false,
            showCopyButton: true,
            theme: 'poimandres',
          },
        ], */
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        imageMetadata,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
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
    wordCount: text.split(/\s+/gu).length,
    readingTime: readingTime(text).text,
  }
}
