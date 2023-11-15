import { join } from 'path'
import { cwd } from 'process'
import { remarkCodeHike } from '@code-hike/mdx'
import { serialize } from 'next-mdx-remote/serialize'
//import { bundleMDX } from 'mdx-bundler'
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

  /* const { code } = await bundleMDX({
    source: text,
    //cwd: join(root, 'components'),
    mdxOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        linkifyRegex(/^(?!.*\bRT\b)(?:.+\s)?@\w+/i),

      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        imageMetadata,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      ]

      return options
    },
  }) */
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
            lineNumbers: false,
            showCopyButton: true,
            skipLanguages: false,
          },
        ],
      ],
      rehypePlugins: [
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
        imageMetadata,
      ],
      format: 'mdx',
    },
  })

  //const { compiledSource } = source
  return {
    mdx: source,
    wordCount: text.split(/\s+/gu).length,
    readingTime: readingTime(text).text,
  }
}
